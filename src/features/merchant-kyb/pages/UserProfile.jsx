import React, { useState, useEffect } from "react";
import { supabase } from "../../../shared/services/supabase";
import PageHeader from "../../../components/PageHeader/PageHeader";
import Tabs from "../../../shared/components/Tabs";
import ProfileImage from "../../../shared/components/Profile/ProfileImage";
import AccountDetails from "../../../shared/components/Profile/AccountDetails";
import NotificationPreferences from "../../../shared/components/Profile/NotificationPreferences";
import SecuritySettings from "../../../shared/components/Profile/SecuritySettings";
import "../../../shared/styles/extra-pages.css";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("account");
  const [merchantId, setMerchantId] = useState(null);
  const [viewingAsMerchant] = useState(
    localStorage.getItem("admin_viewing_merchant_id"),
  );

  useEffect(() => {
    const getMerchantId = async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (userData?.user) {
        setMerchantId(viewingAsMerchant || userData.user.id);
      }
    };
    getMerchantId();
  }, [viewingAsMerchant]);

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
        notificationIconRoute={
          merchantId ? `/m/${merchantId}/kyb/notifications` : null
        }
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
