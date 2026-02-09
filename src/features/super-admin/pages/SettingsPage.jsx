import React, { useState } from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import Tabs from "../../../shared/components/Tabs";
import PlatformSettings from "../components/settings/PlatformSettings";
import SecuritySettings from "../components/settings/SecuritySettings";
import BillingSettings from "../components/settings/BillingSettings";
import EmailSettings from "../components/settings/EmailSettings";
import AdminNotificationSettings from "../components/settings/AdminNotificationSettings";
import AuditSettings from "../components/settings/AuditSettings";
import "./SettingsPage.css";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("platform");

  const tabs = [
    { label: "Platform", key: "platform" },
    { label: "Security", key: "security" },
    { label: "Billing", key: "billing" },
    { label: "Email", key: "email" },
    { label: "Notifications", key: "notifications" },
    { label: "Audit", key: "audit" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "platform":
        return <PlatformSettings />;
      case "security":
        return <SecuritySettings />;
      case "billing":
        return <BillingSettings />;
      case "email":
        return <EmailSettings />;
      case "notifications":
        return <AdminNotificationSettings />;
      case "audit":
        return <AuditSettings />;
      default:
        return <PlatformSettings />;
    }
  };

  return (
    <>
      <PageHeader
        title="Settings"
        description="Configure platform settings and preferences"
      />
      <div className="content_area settings_content">
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        <div className="settings_tab_content">{renderContent()}</div>
      </div>
    </>
  );
};

export default SettingsPage;
