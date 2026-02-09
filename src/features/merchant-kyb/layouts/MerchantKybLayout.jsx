import React from "react";
import { Outlet } from "react-router-dom";
import "../merchant-kyb.css";
import Sidebar from "../../../components/Sidebar/Sidebar";

const MerchantKybLayout = () => {
  const kybLinks = [
    {
      to: "/merchant-kyb",
      icon: "dashboard",
      label: "Overview",
      end: true,
    },
    {
      to: "/merchant-kyb/single-verification",
      icon: "draft",
      label: "Single Business",
    },
    {
      to: "/merchant-kyb/batch-verification",
      icon: "docs",
      label: "Batch Business",
    },
    {
      to: "/merchant-kyb/history",
      icon: "schedule",
      label: "History",
    },
    {
      to: "/merchant-kyb/api",
      icon: "code",
      label: "API & Developers",
    },
    {
      to: "/merchant-kyb/tokens",
      icon: "token",
      label: "Tokens",
    },
    {
      to: "/merchant-kyb/settings",
      icon: "settings",
      label: "Settings",
      section: "OTHERS",
    },
    {
      to: "/merchant-kyb/support",
      icon: "headphones",
      label: "Support",
      section: "OTHERS",
    },
  ];

  return (
    <section className="merchant_kyb_layout">
      <Sidebar
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
