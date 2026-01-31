import React from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";

const DashboardOverview = () => {
  return (
    <div className="content_wrapper">
      <PageHeader
        title="Dashboard Overview"
        description="Monitor your verification activity and performance"
      />
      <div className="content_area">
        <p>Enter your contents here</p>
      </div>
    </div>
  );
};

export default DashboardOverview;
