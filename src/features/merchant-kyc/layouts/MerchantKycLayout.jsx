import React from "react";
import { Outlet } from "react-router-dom";
import "../merchant-kyc.css";
import Sidebar from "../../../components/Sidebar/Sidebar";
import UserProfile from "../pages/UserProfile";
import Notifications from "../pages/Notifications";

const MerchantKycLayout = () => {
  const kycLinks = [
    {
      to: "/merchant-kyc",
      icon: "dashboard",
      label: "Overview",
      end: true,
    },
    {
      to: "/merchant-kyc/single-verification",
      icon: "draft",
      label: "Single Verification",
    },
    {
      to: "/merchant-kyc/batch-verification",
      icon: "docs",
      label: "Batch Verification",
    },
    {
      to: "/merchant-kyc/history",
      icon: "schedule",
      label: "History",
    },
    {
      to: "/merchant-kyc/api",
      icon: "code",
      label: "API & Developers",
    },
    {
      to: "/merchant-kyc/tokens",
      icon: "token",
      label: "Tokens",
    },
    {
      to: "/merchant-kyc/settings",
      icon: "settings",
      label: "Settings",
      section: "OTHERS",
    },
    {
      to: "/merchant-kyc/support",
      icon: "headphones",
      label: "Support",
      section: "OTHERS",
    },
  ];

  return (
    <section className="merchant_kyc_layout">
      <Sidebar
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
