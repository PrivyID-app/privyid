import React, { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import "../merchant-kyb.css";
import Sidebar from "../../../components/Sidebar/Sidebar";
import AdminIdentityBar from "../../../shared/components/AdminIdentityBar";

const MerchantKybLayout = () => {
  const { merchantId } = useParams();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const kybLinks = [
    {
      to: `/m/${merchantId}/kyb`,
      icon: "dashboard",
      label: "Overview",
      end: true,
    },
    {
      to: `/m/${merchantId}/kyb/single-verification`,
      icon: "draft",
      label: "Single Business",
    },
    {
      to: `/m/${merchantId}/kyb/batch-verification`,
      icon: "docs",
      label: "Batch Business",
    },
    {
      to: `/m/${merchantId}/kyb/history`,
      icon: "schedule",
      label: "History",
    },
    {
      to: `/m/${merchantId}/kyb/api`,
      icon: "code",
      label: "API & Developers",
    },
    {
      to: `/m/${merchantId}/kyb/tokens`,
      icon: "token",
      label: "Tokens",
    },
    {
      to: `/m/${merchantId}/kyb/settings`,
      icon: "settings",
      label: "Settings",
      section: "OTHERS",
    },
    {
      to: `/m/${merchantId}/kyb/support`,
      icon: "headphones",
      label: "Support",
      section: "OTHERS",
    },
  ];

  return (
    <section className="merchant_kyb_layout">
      {/* Mobile Header Top Bar (Hidden on Desktop via CSS) */}
      <div className="mobile_top_bar">
        <div className="mobile_logo_wrapper">
          <span className="mobile_title">PrivyID</span>
        </div>
        <button
          className="mobile_menu_trigger"
          onClick={() => setIsMobileSidebarOpen(true)}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>

      {/* Sidebar Overlay (Visible only when sidebar is open on mobile) */}
      {isMobileSidebarOpen && (
        <div
          className="sidebar_overlay"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      <AdminIdentityBar />
      <Sidebar
        className={isMobileSidebarOpen ? "open" : ""}
        companyName="PrivyID"
        slogan="Merchant KYB Flow"
        links={kybLinks}
      />

      <main className="main_content">
        <Outlet />
      </main>
    </section>
  );
};

export default MerchantKybLayout;
