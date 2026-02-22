import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation, useParams } from "react-router-dom";
import { supabase } from "../services/supabase";

const MerchantPortalGuard = () => {
  const [session, setSession] = useState(null);
  const [merchant, setMerchant] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const { merchantId } = useParams();

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
          .select("id, service_type")
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

  // Enforce that the merchantId in the URL matches the logged-in user
  // Skip this check for Super Admins
  if (merchantId && merchantId !== session.user.id && !merchant?.is_admin) {
    // If they try to access another merchant's ID, redirect to their own portal
    return (
      <Navigate
        to={`/m/${session.user.id}/${merchant?.service_type || "kyc"}`}
        replace
      />
    );
  }

  // Check if user has access to the current portal path
  const path = location.pathname;
  const serviceType = merchant?.service_type || "kyc";

  if (serviceType === "combined") {
    // Combined accounts can access all merchant portals
    return <Outlet />;
  }

  // Prevent cross-access between KYC and KYB if not combined
  if (path.includes("/kyc") && serviceType !== "kyc") {
    return <Navigate to={`/m/${session.user.id}/${serviceType}`} replace />;
  }

  if (path.includes("/kyb") && serviceType !== "kyb") {
    return <Navigate to={`/m/${session.user.id}/${serviceType}`} replace />;
  }

  if (path.includes("/combined") && serviceType !== "combined") {
    return <Navigate to={`/m/${session.user.id}/${serviceType}`} replace />;
  }

  return <Outlet />;
};

export default MerchantPortalGuard;
