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
    const fetchUserData = async (session) => {
      if (!session) {
        setUser(null);
        setCompany(null);
        localStorage.removeItem("user_data");
        localStorage.removeItem("company_data");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        // 1. First check if the user is an admin in the 'users' table
        const { data: adminRecord, error: adminError } = await supabase
          .from("users")
          .select("*")
          .eq("id", session.user.id)
          .single();

        if (!adminError && adminRecord && adminRecord.is_admin) {
          console.log("AppContext: Admin detected", adminRecord);
          const userData = {
            id: session.user.id,
            name:
              adminRecord.full_name ||
              session.user.user_metadata?.full_name ||
              "Super Admin",
            email: session.user.email,
            avatar: adminRecord.avatar_url || DefaultAvatar,
            role: "Super Admin",
          };
          setUser(userData);
          localStorage.setItem("user_data", JSON.stringify(userData));
          setLoading(false);
          return;
        }

        // 2. If not admin, try fetching from merchants table
        const { data: merchant, error: mError } = await supabase
          .from("merchants")
          .select("*")
          .eq("id", session.user.id)
          .single();

        if (!mError && merchant) {
          console.log("AppContext: Merchant detected", merchant);
          const userData = {
            id: session.user.id,
            name:
              merchant.contact_name ||
              session.user.user_metadata?.full_name ||
              "Merchant",
            email: session.user.email,
            avatar: merchant.avatar_url || DefaultAvatar,
            role: "Merchant",
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
        } else {
          console.warn("AppContext: No merchant or admin record found", {
            mError,
            adminError,
          });
        }
      } catch (err) {
        console.error("AppContext fetching failed:", err);
      } finally {
        setLoading(false);
      }
    };

    // Initial check
    supabase.auth.getSession().then(({ data: { session } }) => {
      fetchUserData(session);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      fetchUserData(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const updateUser = async (newData) => {
    if (!user?.id) {
      console.warn("AppContext: Cannot update user, no ID found");
      return;
    }

    // Capture previous state for rollback
    const previousUser = user;
    const updatedUser = { ...user, ...newData };

    // Optimistic UI update
    setUser(updatedUser);
    localStorage.setItem("user_data", JSON.stringify(updatedUser));

    console.log("AppContext: Persisting update for role:", user.role);

    try {
      let error;
      // We use the role FROM THE COMPONENT STATE (user.role)
      // but double check it's defined
      const currentRole = user.role;

      if (currentRole === "Super Admin") {
        const { error: updateError } = await supabase
          .from("users")
          .update({
            full_name: updatedUser.name,
            avatar_url: updatedUser.avatar,
          })
          .eq("id", user.id);
        error = updateError;
      } else {
        const { error: updateError } = await supabase
          .from("merchants")
          .update({
            contact_name: updatedUser.name,
            avatar_url: updatedUser.avatar,
          })
          .eq("id", user.id);
        error = updateError;
      }

      if (error) {
        console.error("AppContext: Persistence failed", error);
        // Rollback
        setUser(previousUser);
        localStorage.setItem("user_data", JSON.stringify(previousUser));

        // Use a generic alert if GlobalContext isn't available here, 
        // but AppContext is wrapped by GlobalProvider usually
        alert(`Failed to save changes: ${error.message || "Unknown error"}`);
      } else {
        console.log("AppContext: Persistence successful");
      }
    } catch (err) {
      console.error("AppContext: Exception in updateUser", err);
      setUser(previousUser);
      localStorage.setItem("user_data", JSON.stringify(previousUser));
      alert(`Critical error saving changes. See console.`);
    }
  };

  const updateCompany = async (newData) => {
    if (!user?.id || user.role === "Super Admin") return;

    const previousCompany = company;
    const updatedCompany = { ...company, ...newData };
    setCompany(updatedCompany);
    localStorage.setItem("company_data", JSON.stringify(updatedCompany));

    try {
      const { error } = await supabase
        .from("merchants")
        .update({
          company_name: updatedCompany.name,
          slogan: updatedCompany.slogan,
          logo_url: updatedCompany.logo,
        })
        .eq("id", user.id);

      if (error) {
        console.error("AppContext: Company update failed:", error);
        setCompany(previousCompany);
        localStorage.setItem("company_data", JSON.stringify(previousCompany));
      }
    } catch (err) {
      console.error("AppContext: Error in updateCompany:", err);
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
