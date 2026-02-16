import React from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import ApiDeveloperContent from "../../../shared/components/ApiDeveloperContent";
import ApiKeysTable from "../components/api/ApiKeysTable";
import ApiAnalytics from "../components/api/ApiAnalytics";
import RateLimitConfig from "../components/api/RateLimitConfig";
import WebhookManager from "../components/api/WebhookManager";
import "../super-admin.css";

const ApiPage = () => {
  return (
    <div className="content_wrapper">
      <PageHeader
        title="API & Developers"
        description="Manage API keys and developer settings"
        notificationIconRoute="/super-admin/notifications"
      />
      <div
        className="content_area"
        style={{ padding: 0, height: "calc(100vh - 120px)" }}
      >
        <ApiDeveloperContent />
      </div>
    </div>
  );
};

export default ApiPage;
