import React from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";

const TokensPage = () => {
  return (
    <div className="content_wrapper">
      <PageHeader
        title="Token Management"
        description="Manage your usage tokens and billing"
      />
      <div className="content_area">
        <p>Tokens Content</p>
      </div>
    </div>
  );
};

export default TokensPage;
