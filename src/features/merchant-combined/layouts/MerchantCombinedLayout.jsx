import React, { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import "../merchant-combined.css";
import Sidebar from "../../../components/Sidebar/Sidebar";
import AdminIdentityBar from "../../../shared/components/AdminIdentityBar";

const MerchantCombinedLayout = () => {
  const { merchantId } = useParams();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const combinedLinks = [
    {
      to: `/m/${merchantId}/combined`,
      icon: "dashboard",
      label: "Overview",
      end: true,
    },
    {
      to: `/m/${merchantId}/combined/single-verification`,
      icon: "draft",
      label: "Single Verification",
    },
    {
      to: `/m/${merchantId}/combined/batch-verification`,
      icon: "docs",
      label: "Batch Verification",
    },
    {
      to: `/m/${merchantId}/combined/single-business`,
      icon: "draft",
      label: "Single Business",
    },
    {
      to: `/m/${merchantId}/combined/batch-business`,
      icon: "docs",
      label: "Batch Business",
    },
    {
      to: `/m/${merchantId}/combined/history`,
      icon: "schedule",
      label: "History",
    },
    {
      to: `/m/${merchantId}/combined/api`,
      icon: "code",
      label: "API & Developers",
    },
    {
      to: `/m/${merchantId}/combined/tokens`,
      icon: "token",
      label: "Tokens",
    },
    {
      to: `/m/${merchantId}/combined/settings`,
      icon: "settings",
      label: "Settings",
      section: "OTHERS",
    },
    {
      to: `/m/${merchantId}/combined/support`,
      icon: "headphones",
      label: "Support",
      section: "OTHERS",
    },
  ];

  return (
    <section className="merchant_combined_layout">
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
        slogan="Combined Flow"
        links={combinedLinks}
      />

      <main className="main_content">
        <Outlet />
      </main>
    </section>
  );
};

export default MerchantCombinedLayout;
