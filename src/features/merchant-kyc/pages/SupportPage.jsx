import React from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";

const SupportPage = () => {
  return (
    <div className="content_wrapper">
      <PageHeader
        title="Support"
        description="Get help and support"
        notificationIconRoute="/merchant-kyc/notifications"
      />
      <div className="content_area">
        <p>Support Content</p>
      </div>
    </div>
  );
};

export default SupportPage;
