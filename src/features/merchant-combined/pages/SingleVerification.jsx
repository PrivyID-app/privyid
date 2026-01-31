import React from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";

const SingleVerification = () => {
  return (
    <div className="content_wrapper">
      <PageHeader
        title="Single Verification"
        description="Verify individual customers manually"
      />
      <div className="content_area">
        <p>Single Verification Content</p>
      </div>
    </div>
  );
};

export default SingleVerification;
