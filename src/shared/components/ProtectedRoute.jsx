import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { supabase } from "../services/supabase";
import LogoAdmin from "../../assets/images/privyid-admin.svg";

const ProtectedRoute = ({ redirectPath = "/super-admin/login" }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    // Check current session
    const checkSession = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        if (mounted) {
          setSession(session);
        }
      } catch (err) {
        console.error("Auth session check failed:", err);
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    checkSession();

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
          src={LogoAdmin}
          alt="PrivyID Logo"
          style={{ width: "140px", animation: "pulse 2s infinite ease-in-out" }}
        />
        <style>
          {`
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
