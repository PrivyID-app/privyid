import React, { useState } from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import Tabs from "../../../shared/components/Tabs";
import GeneralSettings from "../components/settings/GeneralSettings";
import UserSettings from "../components/settings/UserSettings";
import SystemSettings from "../components/settings/SystemSettings";
import PricingSettings from "../components/settings/PricingSettings";
import VerificationLinkSettings from "../components/settings/VerificationLinkSettings";
import NotificationSettings from "../components/settings/NotificationSettings";
import "./SettingsPage.css";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("general");

  const tabs = [
    { label: "General", key: "general" },
    { label: "Users", key: "users" },
    { label: "System", key: "system" },
    { label: "Pricing", key: "pricing" },
    { label: "Verification Link", key: "verification_link" },
    { label: "Notifications", key: "notifications" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "general":
        return <GeneralSettings />;
      case "users":
        return <UserSettings />;
      case "system":
        return <SystemSettings />;
      case "pricing":
        return <PricingSettings />;
      case "verification_link":
        return <VerificationLinkSettings />;
      case "notifications":
        return <NotificationSettings />;
      default:
        return <GeneralSettings />;
    }
  };

  return (
    <div className="content_wrapper">
      <PageHeader
        title="Settings"
        description="Manage your account preferences"
      />
      <div className="content_area settings_content">
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="tab_content_wrapper" style={{ marginTop: "24px" }}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
