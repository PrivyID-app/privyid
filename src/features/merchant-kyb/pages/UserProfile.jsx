import React, { useState } from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import Tabs from "../../../shared/components/Tabs";
import ProfileImage from "../../../shared/components/Profile/ProfileImage";
import AccountDetails from "../../../shared/components/Profile/AccountDetails";
import NotificationPreferences from "../../../shared/components/Profile/NotificationPreferences";
import SecuritySettings from "../../../shared/components/Profile/SecuritySettings";
import "../../../shared/styles/extra-pages.css";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("account");

  const tabs = [
    { label: "Account Details", key: "account" },
    { label: "Settings", key: "settings" },
    { label: "Security", key: "security" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "account":
        return <AccountDetails />;
      case "settings":
        return <NotificationPreferences />;
      case "security":
        return <SecuritySettings />;
      default:
        return <AccountDetails />;
    }
  };

  return (
    <>
      <PageHeader
        title="User Profile"
        description="View and manage your account details"
      />

      <div className="content_area">
        <div className="tab_content_wrapper">
          <ProfileImage />

          <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

          <div className="profile_tab_container" style={{ marginTop: "24px" }}>
            {renderTabContent()}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
