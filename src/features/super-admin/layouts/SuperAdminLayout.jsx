import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { supabase } from "../../../shared/services/supabase";
import Sidebar from "../../../components/Sidebar/Sidebar";
import AdminAvatar from "../../../assets/images/Avatar [2.0].svg";
import AdminLogo from "../../../assets/images/privyid-admin-2.png";
import WhiteRectangle from "../../../assets/images/white-rectangle.svg";
import "../super-admin.css";

const SuperAdminLayout = () => {
  const navigate = useNavigate();
  const [adminUser, setAdminUser] = useState({
    name: "Admin",
    email: "admin@privyid.com",
    avatar: AdminAvatar,
  });

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setAdminUser({
          name: session.user.email.split("@")[0],
          email: session.user.email,
          avatar: AdminAvatar,
        });
      }
    });
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/super-admin/login");
  };

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

  return (
    <section className="super_admin_layout">
      <Sidebar
        companyName="PrivyID Admin"
        slogan="Secure KYC & KYB"
        links={adminLinks}
        user={adminUser}
        onLogout={handleLogout}
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
