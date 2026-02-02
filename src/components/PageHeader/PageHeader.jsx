import React from "react";
import { Link } from "react-router-dom";

const PageHeader = ({
  title,
  description,
  notificationLink = "notifications",
}) => {
  return (
    <div className="page_title">
      <div className="title_summary">
        <p className="page_title_bg">{title}</p>
        <p className="page_title_sm">{description}</p>
      </div>

      <Link to={notificationLink} className="settings_icon_link">
        <span className="material-symbols-outlined settings_icon">
          notifications
        </span>
      </Link>
    </div>
  );
};

export default PageHeader;
