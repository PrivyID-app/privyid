import React from "react";

const PageTitle = ({ title, subtitle, action }) => {
  return (
    <div className="page_title">
      <div className="title_summary">
        <p className="page_title_bg">{title}</p>
        {subtitle && <p className="page_title_sm">{subtitle}</p>}
      </div>
      {action && <div className="page_title_action">{action}</div>}
    </div>
  );
};

export default PageTitle;
