import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { supabase } from "../services/supabase";

const ProtectedRoute = ({ redirectPath = "/super-admin/login" }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check current session
    supabase.auth
      .getSession()
      .then(({ data: { session } }) => {
        setSession(session);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f8f9fa",
          gap: "20px",
        }}
      >
        <img
          src="/src/assets/images/privyid-admin.svg"
          alt="PrivyID Logo"
          style={{ width: "140px", animation: "pulse 2s infinite ease-in-out" }}
        />
        <div
          style={{
            width: "40px",
            height: "40px",
            border: "3px solid rgba(0,0,0,0.1)",
            borderTopColor: "#5AC4AF",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        ></div>
        <p
          style={{
            fontFamily: "sans-serif",
            color: "#666",
            fontSize: "14px",
            margin: "0",
          }}
        >
          Verifying session...
        </p>
        <style>
          {`
            @keyframes spin { to { transform: rotate(360deg); } }
            @keyframes pulse {
              0%, 100% { opacity: 0.8; transform: scale(1); }
              50% { opacity: 1; transform: scale(1.05); }
            }
          `}
        </style>
      </div>
    );
  }

  if (!session) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
