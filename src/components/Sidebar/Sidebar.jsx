import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAppContext } from "../../context/appContextHooks";
import NavTabIndicator from "../../assets/images/nav-tab-rectangle.svg";

const Sidebar = ({
  links = [],
  className = "",
  activeIndicator = NavTabIndicator,
  logo,
  companyName: companyNameProp,
  slogan: sloganProp,
  user: userProp, // Accept user as a prop
  onLogout, // Accept onLogout as a prop
}) => {
  const context = useAppContext();
  const user = userProp || context.user;
  const company = {
    name: companyNameProp || context.company?.name || "PrivyID",
    slogan: sloganProp || context.company?.slogan || "Identity Infrastructure",
    logo: logo || context.company?.logo,
  };

  // Determine which logo to use
  const currentLogo = company.logo;

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
            <img src={currentLogo} alt="PrivyID Logo" />
          </div>

          <div className="company_name">
            <p className="top_section_title">{company.name}</p>
            <p className="top_section_slogan">{company.slogan}</p>
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
        <div className="user_content">
          <div className="avatar">
            <img src={user?.avatar} alt="Avatar" />
          </div>

          <div className="company_name" style={{ flex: 1, overflow: "hidden" }}>
            <p className="top_section_title truncate_text">
              {user?.name || "Admin"}
            </p>
            <p className="top_section_slogan truncate_text">{user?.email}</p>
          </div>

          <div
            className="logout_trigger"
            onClick={onLogout}
            title="Logout"
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              color: "var(--text-soft-400)",
              marginLeft: "0.5rem",
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "1.25rem" }}
            >
              logout
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
