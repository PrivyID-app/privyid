import React from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";

const AnalyticsPage = () => {
  return (
    <div className="content_wrapper">
      <PageHeader
        title="Analytics"
        description="Detailed insights into platform usage"
      />
      <div className="content_area">
        <p>Analytics Content</p>
      </div>
    </div>
  );
};

export default AnalyticsPage;
