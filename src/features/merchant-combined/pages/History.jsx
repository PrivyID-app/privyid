import React from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";

const History = () => {
  return (
    <div className="content_wrapper">
      <PageHeader
        title="Verification History"
        description="View and manage past verification requests"
      />
      <div className="content_area">
        <p>History Content</p>
      </div>
    </div>
  );
};

export default History;
