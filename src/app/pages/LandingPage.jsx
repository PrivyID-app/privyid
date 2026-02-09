import React from "react";
import WebNav from "../../shared/components/WebNav";
import SpecialButton from "../../shared/components/SpecialButton";
import "./LandingPage.css";

// Image imports
import logoBlack from "../../assets/images/Logo black.svg";
import logoWhite from "../../assets/images/Logo White.svg";
import authorImage from "../../assets/images/privyid-admin-2.png";

const LandingPage = () => {
  return (
    <>
      <WebNav />
      <WebNav />
      <div style={{ paddingTop: '80px', overflowY: 'auto', height: 'calc(100vh - 80px)' }}>
        {/* Mobile nav - not implemented in this conversion */}
        <nav className="mobile-nav"></nav>

        <div className="section-header">
          {/* Hero section */}
          <div className="hero bg-white flex flex-col items-center text-center w-fill">
            <div className="vector">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1362"
                height="577"
                viewBox="0 0 1362 577"
                fill="none"
              >
                <path
                  d="M31.9178 -56H0.872314V-22.7368M31.9178 -56V-22.7368M31.9178 -56H62.9632M31.9178 -22.7368H0.872314M31.9178 -22.7368V10.5263M31.9178 -22.7368H62.9632M0.872314 -22.7368V10.5263M31.9178 10.5263H0.872314M31.9178 10.5263V43.7895M31.9178 10.5263H62.9632M0.872314 10.5263V43.7895M31.9178 43.7895H0.872314M31.9178 43.7895V77.0526M31.9178 43.7895H62.9632M0.872314 43.7895V77.0526M31.9178 77.0526H0.872314M31.9178 77.0526V110.316M31.9178 77.0526H62.9632M0.872314 77.0526V110.316M31.9178 110.316H0.872314M31.9178 110.316V143.579M31.9178 110.316H62.9632M0.872314 110.316V143.579M31.9178 143.579H0.872314M31.9178 143.579V176.842M31.9178 143.579H62.9632M0.872314 143.579V176.842M31.9178 176.842H0.872314M31.9178 176.842V210.105M31.9178 176.842H62.9632M0.872314 176.842V210.105M31.9178 210.105H0.872314M31.9178 210.105V243.368M31.9178 210.105H62.9632M0.872314 210.105V243.368M31.9178 243.368H0.872314M31.9178 243.368V276.632M31.9178 243.368H62.9632M0.872314 243.368V276.632M31.9178 276.632H0.872314M31.9178 276.632V309.895M31.9178 276.632H62.9632M0.872314 276.632V309.895M31.9178 309.895H0.872314M31.9178 309.895V343.158M31.9178 309.895H62.9632M0.872314 309.895V343.158M31.9178 343.158H0.872314M31.9178 343.158V376.421M31.9178 343.158H62.9632M0.872314 343.158V376.421M31.9178 376.421H0.872314M31.9178 376.421V409.684M31.9178 376.421H62.9632M0.872314 376.421V409.684M31.9178 409.684H0.872314M31.9178 409.684V442.947M31.9178 409.684H62.9632M0.872314 409.684V442.947M31.9178 442.947H0.872314M31.9178 442.947V476.211M31.9178 442.947H62.9632M0.872314 442.947V476.211M31.9178 476.211H0.872314M31.9178 476.211V509.474M31.9178 476.211H62.9632M0.872314 476.211V509.474M31.9178 509.474H0.872314M31.9178 509.474V542.737M31.9178 509.474H62.9632M0.872314 509.474V542.737M31.9178 542.737H0.872314M31.9178 542.737V576M31.9178 542.737H62.9632M0.872314 542.737V576H31.9178M31.9178 576H62.9632M62.9632 -56V-22.7368M62.9632 -56H94.0087M62.9632 -22.7368V10.5263M62.9632 -22.7368H94.0087M62.9632 10.5263V43.7895M62.963... [truncated]
                    stroke="red"
                  strokeOpacity="0.6"
                  strokeWidth="1.74474"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_1666_28289"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(683.872 260) rotate(90) scale(316 551.534)"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="#0E121B" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
                stroke="url(#paint0_radial_1666_28289)"
                strokeOpacity="0.6"
                strokeWidth="1.74474"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_1666_28289"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(683.872 260) rotate(90) scale(316 551.534)"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="#0E121B" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
