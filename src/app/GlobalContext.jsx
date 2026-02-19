import React, { createContext, useContext, useState, useCallback } from "react";
import Toast from "../shared/components/Toast";

const GlobalContext = createContext(null);

export const GlobalProvider = ({ children }) => {
  const [toast, setToast] = useState({
    isVisible: false,
    message: "",
    type: "info",
  });

  const showToast = useCallback((message, type = "info") => {
    setToast({ isVisible: true, message, type });
  }, []);

  const hideToast = useCallback(() => {
    setToast((prev) => ({ ...prev, isVisible: false }));
  }, []);

  return (
    <GlobalContext.Provider value={{ showToast }}>
      {children}
      <Toast
        isVisible={toast.isVisible}
        message={toast.message}
        type={toast.type}
        onClose={hideToast}
      />
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobal must be used within a GlobalProvider");
  }
  return context;
};
