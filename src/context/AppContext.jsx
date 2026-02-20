import React, { useState, useEffect } from "react";
import DefaultAvatar from "../assets/images/Avatar [1.0].svg";
import DefaultLogo from "../assets/images/company-logo-empty.svg";
import { AppContext } from "./appContextHooks";
import { supabase } from "../shared/services/supabase";

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem("user_data");
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (e) {
      console.error("Error parsing user data:", e);
      return null;
    }
  });

  const [company, setCompany] = useState(() => {
    try {
      const savedCompany = localStorage.getItem("company_data");
      return savedCompany ? JSON.parse(savedCompany) : null;
    } catch (e) {
      console.error("Error parsing company data:", e);
      return null;
    }
  });

  const [loading, setLoading] = useState(true);

  // Fetch from Supabase on mount/auth change
  useEffect(() => {
    const fetchMerchantData = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        const { data: merchant, error } = await supabase
          .from("merchants")
          .select("*")
          .eq("id", session.user.id)
          .single();

        if (!error && merchant) {
          const userData = {
            id: session.user.id,
            name:
              merchant.contact_name ||
              session.user.user_metadata?.full_name ||
              "Merchant",
            email: session.user.email,
            avatar: merchant.avatar_url || DefaultAvatar,
            role: "Admin",
          };
          const companyData = {
            name: merchant.company_name || "PrivyID",
            slogan: merchant.slogan || "Merchant KYC Flow",
            logo: merchant.logo_url || DefaultLogo,
          };
          setUser(userData);
          setCompany(companyData);
          localStorage.setItem("user_data", JSON.stringify(userData));
          localStorage.setItem("company_data", JSON.stringify(companyData));
        }
      }
      setLoading(false);
    };

    fetchMerchantData();
  }, []);

  const updateUser = async (newData) => {
    const updatedUser = { ...user, ...newData };
    setUser(updatedUser);
    localStorage.setItem("user_data", JSON.stringify(updatedUser));

    // Persist to Supabase if applicable
    if (user?.id) {
      await supabase
        .from("merchants")
        .update({
          contact_name: updatedUser.name,
          avatar_url: updatedUser.avatar,
        })
        .eq("id", user.id);
    }
  };

  const updateCompany = async (newData) => {
    const updatedCompany = { ...company, ...newData };
    setCompany(updatedCompany);
    localStorage.setItem("company_data", JSON.stringify(updatedCompany));

    // Persist to Supabase if applicable
    if (user?.id) {
      await supabase
        .from("merchants")
        .update({
          company_name: updatedCompany.name,
          slogan: updatedCompany.slogan,
          logo_url: updatedCompany.logo,
        })
        .eq("id", user.id);
    }
  };

  return (
    <AppContext.Provider
      value={{ user, company, updateUser, updateCompany, loading }}
    >
      {children}
    </AppContext.Provider>
  );
};
