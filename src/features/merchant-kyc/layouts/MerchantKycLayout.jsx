import React, { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import "../merchant-kyc.css";
import Sidebar from "../../../components/Sidebar/Sidebar";
import AdminIdentityBar from "../../../shared/components/AdminIdentityBar";
import UserProfile from "../pages/UserProfile";
import Notifications from "../pages/Notifications";

const MerchantKycLayout = () => {
  const { merchantId } = useParams();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const kycLinks = [
    {
      to: `/m/${merchantId}/kyc`,
      icon: "dashboard",
      label: "Overview",
      end: true,
    },
    {
      to: `/m/${merchantId}/kyc/single-verification`,
      icon: "draft",
      label: "Single Verification",
    },
    {
      to: `/m/${merchantId}/kyc/batch-verification`,
      icon: "docs",
      label: "Batch Verification",
    },
    {
      to: `/m/${merchantId}/kyc/history`,
      icon: "schedule",
      label: "History",
    },
    {
      to: `/m/${merchantId}/kyc/api`,
      icon: "code",
      label: "API & Developers",
    },
    {
      to: `/m/${merchantId}/kyc/tokens`,
      icon: "token",
      label: "Tokens",
    },
    {
      to: `/m/${merchantId}/kyc/settings`,
      icon: "settings",
      label: "Settings",
      section: "OTHERS",
    },
    {
      to: `/m/${merchantId}/kyc/support`,
      icon: "headphones",
      label: "Support",
      section: "OTHERS",
    },
  ];

  return (
    <section className="merchant_kyc_layout">
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
        slogan="Merchant KYC Flow"
        links={kycLinks}
      />

      <main className="main_content">
        <Outlet />
      </main>
    </section>
  );
};

export default MerchantKycLayout;
