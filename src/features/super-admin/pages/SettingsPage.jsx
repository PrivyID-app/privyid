import React from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";

const SettingsPage = () => {
  return (
    <div className="content_wrapper">
      <PageHeader title="Settings" description="Configure system settings" />
      <div className="content_area">
        <p>Settings Content</p>
      </div>
    </div>
  );
};

export default SettingsPage;
