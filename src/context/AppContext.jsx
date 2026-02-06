import React, { createContext, useContext, useState, useEffect } from "react";
import DefaultAvatar from "../assets/images/Avatar [1.0].svg";
import DefaultLogo from "../assets/images/company-logo-empty.svg";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Initialize state from localStorage or defaults
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user_data");
    return savedUser
      ? JSON.parse(savedUser)
      : {
          name: "Emma Wright",
          email: "emma@company.com",
          avatar: DefaultAvatar,
          dept: "Engineering",
          phone: "123-456-7890",
          role: "Admin",
        };
  });

  const [company, setCompany] = useState(() => {
    const savedCompany = localStorage.getItem("company_data");
    return savedCompany
      ? JSON.parse(savedCompany)
      : {
          name: "PrivyID",
          slogan: "Merchant KYC Flow",
          logo: DefaultLogo,
        };
  });

  // Sync to localStorage on change
  useEffect(() => {
    localStorage.setItem("user_data", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem("company_data", JSON.stringify(company));
  }, [company]);

  const updateUser = (newData) => {
    setUser((prev) => ({ ...prev, ...newData }));
  };

  const updateCompany = (newData) => {
    setCompany((prev) => ({ ...prev, ...newData }));
  };

  return (
    <AppContext.Provider value={{ user, company, updateUser, updateCompany }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
