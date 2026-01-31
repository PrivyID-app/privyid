import React from "react";
import { Outlet } from "react-router-dom";
import "../super-admin.css";
import Sidebar from "../../../components/Sidebar/Sidebar";
import AdminAvatar from "../../../assets/images/Avatar [1.0].svg";
import AdminLogo from "../../../assets/images/privyid-admin.svg";
import WhiteRectangle from "../../../assets/images/white-rectangle.svg";

const SuperAdminLayout = () => {
  const adminLinks = [
    {
      to: "/super-admin",
      icon: "dashboard",
      label: "Overview",
      end: true,
    },
    {
      to: "/super-admin/merchants",
      icon: "group",
      label: "Merchants",
    },
    {
      to: "/super-admin/verifications",
      icon: "docs",
      label: "Verifications",
    },
    {
      to: "/super-admin/analytics",
      icon: "finance",
      label: "Analytics",
    },
    {
      to: "/super-admin/api",
      icon: "code",
      label: "API & Developers",
    },
    {
      to: "/super-admin/audit-logs",
      icon: "document_search",
      label: "Audit Logs",
    },
    {
      to: "/super-admin/settings",
      icon: "settings",
      label: "Settings",
      section: "OTHERS",
    },
    {
      to: "/super-admin/support",
      icon: "headphones",
      label: "Support",
      section: "OTHERS",
    },
  ];

  const adminUser = {
    name: "Emma Wright",
    email: "emma@company.com",
    avatar: AdminAvatar,
  };

  return (
    <section className="super_admin_layout">
      <Sidebar
        companyName="PrivyID Admin"
        slogan="Secure KYC & KYB"
        links={adminLinks}
        user={adminUser}
        logo={AdminLogo}
        activeIndicator={WhiteRectangle}
      />

      <main className="main_content">
        <Outlet />
      </main>
    </section>
  );
};

export default SuperAdminLayout;
