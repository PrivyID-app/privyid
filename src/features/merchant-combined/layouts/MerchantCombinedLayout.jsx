import React from "react";
import { Outlet } from "react-router-dom";
import "../merchant-combined.css";
import Sidebar from "../../../components/Sidebar/Sidebar";

const MerchantCombinedLayout = () => {
  const combinedLinks = [
    {
      to: "/merchant-combined",
      icon: "dashboard",
      label: "Overview",
      end: true,
    },
    {
      to: "/merchant-combined/single-verification",
      icon: "draft",
      label: "Single Verification",
    },
    {
      to: "/merchant-combined/batch-verification",
      icon: "docs",
      label: "Batch Verification",
    },
    {
      to: "/merchant-combined/single-business",
      icon: "draft",
      label: "Single Business",
    },
    {
      to: "/merchant-combined/batch-business",
      icon: "docs",
      label: "Batch Business",
    },
    {
      to: "/merchant-combined/history",
      icon: "schedule",
      label: "History",
    },
    {
      to: "/merchant-combined/api",
      icon: "code",
      label: "API & Developers",
    },
    {
      to: "/merchant-combined/tokens",
      icon: "token",
      label: "Tokens",
    },
    {
      to: "/merchant-combined/settings",
      icon: "settings",
      label: "Settings",
      section: "OTHERS",
    },
    {
      to: "/merchant-combined/support",
      icon: "headphones",
      label: "Support",
      section: "OTHERS",
    },
  ];

  return (
    <section className="merchant_combined_layout">
      <Sidebar
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
