import React from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";

const AuditLogsPage = () => {
  return (
    <div className="content_wrapper">
      <PageHeader
        title="Audit Logs"
        description="View system logs and activity trails"
      />
      <div className="content_area">
        <p>Audit Logs Content</p>
      </div>
    </div>
  );
};

export default AuditLogsPage;
