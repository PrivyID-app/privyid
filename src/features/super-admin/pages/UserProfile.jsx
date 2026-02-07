import React, { useState } from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import Tabs from "../../../shared/components/Tabs";
import ProfileImage from "../../../shared/components/Profile/ProfileImage";
import AccountDetails from "../../../shared/components/Profile/AccountDetails";
import SecuritySettings from "../../../shared/components/Profile/SecuritySettings";
import "../super-admin.css";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("account");

  const tabs = [
    { label: "Account Details", key: "account" },
    { label: "Security", key: "security" },
    { label: "Activity Log", key: "activity" },
  ];

  const activityLogs = [
    {
      action: "Login",
      timestamp: "2024-09-15 10:30:25",
      ip: "192.168.1.100",
      device: "Chrome on Windows",
    },
    {
      action: "Merchant Created",
      timestamp: "2024-09-15 09:45:12",
      ip: "192.168.1.100",
      device: "Chrome on Windows",
    },
    {
      action: "Settings Updated",
      timestamp: "2024-09-14 16:55:30",
      ip: "192.168.1.100",
      device: "Chrome on Windows",
    },
    {
      action: "Login",
      timestamp: "2024-09-14 09:20:15",
      ip: "192.168.1.100",
      device: "Chrome on Windows",
    },
    {
      action: "Verification Approved",
      timestamp: "2024-09-13 14:30:45",
      ip: "192.168.1.100",
      device: "Chrome on Windows",
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "account":
        return <AccountDetails />;
      case "security":
        return <SecuritySettings />;
      case "activity":
        return (
          <div className="activity_log_section">
            <h3>Recent Activity</h3>
            <p className="section_description">
              View your recent admin actions and login history
            </p>
            <div className="activity_log_table">
              <div className="table_header">
                <div className="cell">Action</div>
                <div className="cell">Timestamp</div>
                <div className="cell">IP Address</div>
                <div className="cell">Device</div>
              </div>
              {activityLogs.map((log, index) => (
                <div key={index} className="table_row">
                  <div className="cell">
                    <p>{log.action}</p>
                  </div>
                  <div className="cell">
                    <p>{log.timestamp}</p>
                  </div>
                  <div className="cell">
                    <p>{log.ip}</p>
                  </div>
                  <div className="cell">
                    <p>{log.device}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return <AccountDetails />;
    }
  };

  return (
    <>
      <PageHeader
        title="User Profile"
        description="Manage your admin account and preferences"
      />
      <div className="content_area user_profile_content">
        <ProfileImage />
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        <div className="profile_tab_content">{renderContent()}</div>
      </div>
    </>
  );
};

export default UserProfile;
