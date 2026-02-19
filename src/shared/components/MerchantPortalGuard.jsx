import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { supabase } from "../services/supabase";

const MerchantPortalGuard = () => {
  const [session, setSession] = useState(null);
  const [merchant, setMerchant] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);

      if (session) {
        // Fetch merchant profile to check service_type
        const { data, error } = await supabase
          .from("merchants")
          .select("service_type")
          .eq("id", session.user.id)
          .single();

        if (!error) {
          setMerchant(data);
        }
      }
      setLoading(false);
    };

    checkAuth();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (!session) {
        setMerchant(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>Verifying portal access...</p>
      </div>
    );
  }

  if (!session) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Check if user has access to the current portal path
  const path = location.pathname;
  const serviceType = merchant?.service_type;

  if (serviceType === "combined") {
    // Combined accounts can access all merchant portals
    return <Outlet />;
  }

  if (path.startsWith("/merchant-kyc") && serviceType !== "kyc") {
    return <Navigate to={`/merchant-${serviceType}`} replace />;
  }

  if (path.startsWith("/merchant-kyb") && serviceType !== "kyb") {
    return <Navigate to={`/merchant-${serviceType}`} replace />;
  }

  if (path.startsWith("/merchant-combined") && serviceType !== "combined") {
    return <Navigate to={`/merchant-${serviceType}`} replace />;
  }

  return <Outlet />;
};

export default MerchantPortalGuard;
