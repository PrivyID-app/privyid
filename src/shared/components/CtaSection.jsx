import React from "react";
import { Link } from "react-router-dom";
import SpecialButton from "./SpecialButton";
import SecondaryButton from "./SecondaryButton";
import "./cta-section.css";

const LEGACY = `${import.meta.env.BASE_URL}legacy/images/`;

const CtaSection = ({
  title = "Ready to integrate?",
  subtitle = "Sign up for a free account and start verifying users today.",
  primaryButtonText = "Generate API Keys",
  primaryButtonTo = "/onboarding?mode=signup",
  primaryButtonIcon = "vpn_key",
  secondaryButtonText = "View documentation",
  secondaryButtonTo = "/documentation",
  showPrimaryButton = true,
  showSecondaryButton = true,
  showImage = true,
}) => {
  const isExternal = (url) =>
    url.startsWith("http") || url.startsWith("mailto:");

  return (
    <section className="lp-cta-section">
      <div className="lp-container">
        <div className="lp-cta-box">
          <div className="lp-cta-header">
            <p className="lp-cta-title">{title}</p>
            <p className="lp-cta-subtitle">{subtitle}</p>
            {(showPrimaryButton || showSecondaryButton) && (
              <div className="lp-cta-buttons">
                {showPrimaryButton && (
                  <SpecialButton
                    as={isExternal(primaryButtonTo) ? "a" : Link}
                    {...{
                      [isExternal(primaryButtonTo) ? "href" : "to"]:
                        primaryButtonTo,
                    }}
                    icon={primaryButtonIcon}
                  >
                    {primaryButtonText}
                  </SpecialButton>
                )}

                {showSecondaryButton && (
                  <SecondaryButton
                    as={isExternal(secondaryButtonTo) ? "a" : Link}
                    {...{
                      [isExternal(secondaryButtonTo) ? "href" : "to"]:
                        secondaryButtonTo,
                    }}
                  >
                    {secondaryButtonText}
                    <span className="material-symbols-outlined">
                      arrow_forward_ios
                    </span>
                  </SecondaryButton>
                )}
              </div>
            )}
          </div>
          {showImage && (
            <div className="lp-cta-image">
              <img src={`${LEGACY}cta-image.svg`} alt="" aria-hidden="true" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
