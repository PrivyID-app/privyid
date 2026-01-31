import React from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";

const VerificationsPage = () => {
  return (
    <div className="content_wrapper">
      <PageHeader
        title="Verifications"
        description="Review and manage global verification requests"
      />
      <div className="content_area">
        <p>Verifications Content</p>
      </div>
    </div>
  );
};

export default VerificationsPage;
