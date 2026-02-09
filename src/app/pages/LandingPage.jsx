import React from "react";
import { Link } from "react-router-dom";
import WebNav from "../../shared/components/WebNav";
import SpecialButton from "../../shared/components/SpecialButton";
import "./LandingPage.css"; // Assuming LandingPage.css will contain notfound.css content

// Importing images
import bgPattern from "../../assets/images/404-bg.svg";
import chipIndicator from "../../assets/images/chart-legend-dots-[1.0].svg";

const LandingPage = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="notfound_container">
      <WebNav />

      <main className="notfound_content_wrapper">
        <div className="notfound_bg_pattern">
          <img src={bgPattern} alt="Background Pattern" />
        </div>

        <div className="notfound_chip">
          <div className="notfound_indicator_img">
            <img src={chipIndicator} alt="Chip Indicator" />
          </div>
          <p>404 error</p>
        </div>

        <h1 className="Page_Not_Found_Title">Page Not Found</h1>

        <p className="notfound_error_message">
          We couldn't mint the page you are looking for 🤔, maybe it never
          existed or has been moved.
        </p>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <Link to="/onboarding" className="notfound_onboarding_link">
            <SpecialButton icon="vpn_key">Get API keys</SpecialButton>
          </Link>
          <SpecialButton icon="refresh" onClick={handleRefresh}>
            Go Back Home
          </SpecialButton>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;