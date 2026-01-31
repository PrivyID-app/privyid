import React from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";

const MerchantsPage = () => {
  return (
    <div className="content_wrapper">
      <PageHeader
        title="Merchants"
        description="Manage registered merchants and their accounts"
      />
      <div className="content_area">
        <p>Merchants Content</p>
      </div>
    </div>
  );
};

export default MerchantsPage;
