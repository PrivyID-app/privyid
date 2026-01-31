import React from "react";

const PageHeader = ({ title, description }) => {
  return (
    <div className="page_title">
      <div className="title_summary">
        <p className="page_title_bg">{title}</p>
        <p className="page_title_sm">{description}</p>
      </div>

      <span className="material-symbols-outlined settings_icon">
        notifications
      </span>
    </div>
  );
};

export default PageHeader;
