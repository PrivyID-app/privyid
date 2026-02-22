import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../services/supabase";

const AdminIdentityBar = () => {
  const navigate = useNavigate();
  const { merchantId: urlId } = useParams();
  const [isAdmin, setIsAdmin] = useState(false);
  const [merchantName, setMerchantName] = useState("");

  useEffect(() => {
    const checkAdmin = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session) return;

      const { data: userData } = await supabase
        .from("users")
        .select("is_admin")
        .eq("id", session.user.id)
        .single();

      if (userData?.is_admin) {
        setIsAdmin(true);
        if (urlId) {
          const { data: merchData } = await supabase
            .from("merchants")
            .select("business_name")
            .eq("id", urlId)
            .single();
          setMerchantName(merchData?.business_name || urlId);
        }
      }
    };

    checkAdmin();
  }, [urlId]);

  const handleExit = () => {
    localStorage.removeItem("admin_viewing_merchant_id");
    navigate("/super-admin");
  };

  if (!isAdmin) return null;

  return (
    <div
      style={{
        background: "#1e293b",
        color: "#f8fafc",
        padding: "8px 16px",
        fontSize: "0.875rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 9999,
        position: "relative",
        borderBottom: "2px solid #334155",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <span
          className="material-symbols-outlined"
          style={{ fontSize: "18px", color: "#fbbf24" }}
        >
          admin_panel_settings
        </span>
        <span>
          <strong>Admin View:</strong> {merchantName}
        </span>
      </div>
      <button
        onClick={handleExit}
        style={{
          background: "#334155",
          color: "white",
          border: "none",
          padding: "4px 12px",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "0.75rem",
          fontWeight: "600",
          transition: "background 0.2s",
        }}
        onMouseOver={(e) => (e.target.style.background = "#475569")}
        onMouseOut={(e) => (e.target.style.background = "#334155")}
      >
        Exit to Admin Portal
      </button>
    </div>
  );
};

export default AdminIdentityBar;
