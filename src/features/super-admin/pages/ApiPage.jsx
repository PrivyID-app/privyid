import React from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";

const ApiPage = () => {
  return (
    <div className="content_wrapper">
      <PageHeader
        title="API & Developers"
        description="Manage API keys and developer access"
      />
      <div className="content_area">
        <p>API Content</p>
      </div>
    </div>
  );
};

export default ApiPage;
