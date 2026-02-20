import React, { useState, useEffect } from "react";
import "./mobile-device-warning.css";

const MobileDeviceWarning = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const checkViewport = () => {
      // Check if width is less than 1024px (tablet/mobile)
      setIsMobile(window.innerWidth < 1024);
    };

    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  // Only show on paths that are NOT the landing page or documentation
  const currentPath = window.location.hash || window.location.pathname;
  const isExcludedPath =
    currentPath === "#/" ||
    currentPath.includes("documentation") ||
    currentPath === "/";

  if (!isMobile || !isVisible || isExcludedPath) return null;

  return (
    <div className="mobile-warning-overlay">
      <div className="mobile-warning-content">
        <div className="warning-icon">
          <span className="material-symbols-outlined">laptop_mac</span>
        </div>
        <h3>Desktop Required</h3>
        <p>
          The PrivyID Dashboard and Onboarding flow are optimized for desktop
          systems. Please log in from a laptop or desktop computer for the best
          experience.
        </p>
        <button
          className="close-warning-btn"
          onClick={() => setIsVisible(false)}
        >
          Got it, I'll switch
        </button>
      </div>
    </div>
  );
};

export default MobileDeviceWarning;
