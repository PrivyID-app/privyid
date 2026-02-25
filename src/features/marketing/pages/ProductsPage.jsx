import React from "react";
import { Link } from "react-router-dom";
import WebNav from "../../../shared/components/WebNav";
import Footer from "../../../shared/components/Footer";
import SpecialButton from "../../../shared/components/SpecialButton";
import SecondaryButton from "../../../shared/components/SecondaryButton";
import CtaSection from "../../../shared/components/CtaSection";
import "../../../app/pages/LandingPage.css";

const LEGACY = `${import.meta.env.BASE_URL}legacy/images/`;

const ProductsPage = () => {
  return (
    <div className="lp-body">
      <WebNav />
      <main className="lp-main">
        <section className="lp-hero">
          <div className="lp-hero-content">
            <h1 className="lp-hero-title">
              Identity Verification Built for Scale
            </h1>
            <p className="lp-hero-subtitle">
              Comprehensive KYC and KYB solutions that protect your business and
              delight your users.
            </p>
            <div className="lp-hero-buttons">
              <SpecialButton
                as={Link}
                to="/onboarding?mode=signup"
                icon="rocket_launch"
              >
                Get Started
              </SpecialButton>
              <SecondaryButton as={Link} to="/documentation">
                View Docs
              </SecondaryButton>
            </div>
          </div>
        </section>

        <section className="lp-section">
          <div className="lp-container">
            <div
              className="lp-section-header"
              style={{ textAlign: "center", marginBottom: "4rem" }}
            >
              <h2 className="lp-section-title">Our Products</h2>
              <p className="lp-section-subtitle">
                Everything you need to verify identities anywhere in the world.
              </p>
            </div>

            <div className="lp-bento-grid">
              <div className="lp-bento-card">
                <div className="lp-bento-icon">
                  <span className="material-symbols-outlined">
                    person_search
                  </span>
                </div>
                <h3>Global KYC</h3>
                <p>
                  Verify individuals in seconds across 40+ countries with
                  localized document support.
                </p>
              </div>

              <div className="lp-bento-card lp-bento-tall">
                <div className="lp-bento-icon">
                  <span className="material-symbols-outlined">
                    corporate_fare
                  </span>
                </div>
                <h3>KYB Enterprise</h3>
                <p>
                  Automate business verification with real-time access to
                  corporate registries and UBO discovery.
                </p>
                <div style={{ marginTop: "auto", paddingTop: "2rem" }}>
                  <img
                    src={`${LEGACY}cta-image.svg`}
                    alt="Enterprise"
                    style={{ width: "100%", opacity: 0.5 }}
                  />
                </div>
              </div>

              <div className="lp-bento-card">
                <div className="lp-bento-icon">
                  <span className="material-symbols-outlined">shield</span>
                </div>
                <h3>AML Screening</h3>
                <p>
                  Real-time screening against global sanctions, PEP lists, and
                  adverse media.
                </p>
              </div>

              <div className="lp-bento-card">
                <div className="lp-bento-icon">
                  <span className="material-symbols-outlined">fingerprint</span>
                </div>
                <h3>Biometric Auth</h3>
                <p>
                  Liveness detection and face matching to prevent spoofing and
                  identity theft.
                </p>
              </div>

              <div className="lp-bento-card">
                <div className="lp-bento-icon">
                  <span className="material-symbols-outlined">api</span>
                </div>
                <h3>No-Code Links</h3>
                <p>
                  Generate verification links instantly. No engineering required
                  to go live.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CtaSection
          title="Ready to secure your platform?"
          subtitle="Join hundreds of companies trusting PrivyID for their identity needs."
          primaryButtonText="Sign Up Now"
          showSecondaryButton={false}
          showImage={false}
        />
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
