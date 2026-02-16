import React from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import SupportContent from "../../../shared/components/SupportContent";

const SupportPage = () => {
  return (
    <div className="content_wrapper">
      <PageHeader
        title="Support Center"
        description="Get help with your KYB integration and operations"
        notificationIconRoute="/merchant-kyb/notifications"
      />
      <div className="content_area">
        <SupportContent />
      </div>
    </div>
  );
};

export default SupportPage;
