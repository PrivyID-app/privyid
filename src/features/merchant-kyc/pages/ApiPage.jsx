import React from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import ApiDeveloperContent from "../../../shared/components/ApiDeveloperContent";

const ApiPage = () => {
  return (
    <div className="content_wrapper">
      <PageHeader
        title="API & Developers"
        description="Manage API keys and developer settings"
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
