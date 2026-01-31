import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CompanyLogo from "../../assets/images/company-logo-empty.svg";
import NavTabIndicator from "../../assets/images/nav-tab-rectangle.svg";
import DefaultAvatar from "../../assets/images/Avatar [1.0].svg";

const Sidebar = ({
  companyName = "PrivyID",
  slogan = "Merchant KYC Flow",
  user = {
    name: "Emma Wright",
    email: "emma@company.com",
    avatar: DefaultAvatar,
  },
  links = [],
  className = "",
  logo = CompanyLogo,
  activeIndicator = NavTabIndicator,
}) => {
  const [isUserExpanded, setIsUserExpanded] = useState(false);

  // Group links by section
  const mainLinks = links.filter(
    (link) => !link.section || link.section === "MAIN",
  );
  const otherLinks = links.filter((link) => link.section === "OTHERS");

  const renderLink = (link) => (
    <NavLink
      key={link.to}
      to={link.to}
      end={link.end}
      className={({ isActive }) => (isActive ? "active_tab" : "inactive_tab")}
    >
      {({ isActive }) => (
        <>
          <div className="indicator">
            {isActive && <img src={activeIndicator} alt="Indicator" />}
          </div>

          <div className="tab-link">
            <div className="icon_title">
              <span className="material-symbols-outlined">{link.icon}</span>
              <p>{link.label}</p>
            </div>
            {isActive && link.hasArrow !== false && (
              <span className="material-symbols-outlined arrow_icon">
                chevron_right
              </span>
            )}
          </div>
        </>
      )}
    </NavLink>
  );

  return (
    <nav className={`sidebar ${className}`}>
      <div className="top_section">
        <div className="company_name_content">
          <div className="company_logo">
            <img src={logo} alt="PrivyID Logo" />
          </div>

          <div className="company_name">
            <p className="top_section_title">{companyName}</p>
            <p className="top_section_slogan">{slogan}</p>
          </div>

          <div className="expand">
            <span className="material-symbols-outlined code_icon">code</span>
          </div>
        </div>
      </div>

      <div className="nav_contents">
        {mainLinks.length > 0 && (
          <div className="nav_content_wrapper">
            <div className="nav_main_title">
              <p>MAIN</p>
            </div>
            <div className="nav_main_links">{mainLinks.map(renderLink)}</div>
          </div>
        )}

        {otherLinks.length > 0 && (
          <div className="nav_content_wrapper">
            <div className="nav_main_title">
              <p>OTHERS</p>
            </div>
            <div className="nav_main_links">{otherLinks.map(renderLink)}</div>
          </div>
        )}
      </div>

      <div className="buttom_section">
        <div
          className="user_content"
          onClick={() => setIsUserExpanded(!isUserExpanded)}
          style={{ cursor: "pointer" }}
        >
          <div className="avatar">
            <img src={user.avatar || DefaultAvatar} alt="Avatar" />
          </div>

          <div className="company_name">
            <p className="top_section_title">{user.name}</p>
            <p className="top_section_slogan">{user.email}</p>
          </div>

          <span className="material-symbols-outlined expand_icon">
            chevron_right
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
