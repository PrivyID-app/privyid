import React from "react";
import WebNav from "../../../shared/components/WebNav";
import SpecialButton from "../../../shared/components/SpecialButton";
import styles from "./MarketingPage.module.css";

const MarketingPage = () => {
  return (
    <div className={styles.marketing_container}>
      <WebNav />

      <main className={styles.main_content}>
        {/* Hero Section */}
        <section className={styles.hero_section}>
          <div className={styles.hero_badge}>
            <span className={styles.badge_new}>NEW</span>
            <span className={styles.badge_text}>
              Seamless identity verification via API
            </span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </div>

          <h1 className={styles.hero_title}>
            Identity infrastructure <br />
            without data custody
          </h1>

          <p className={styles.hero_subtitle}>
            Verify users and businesses via API. PrivyID handles identity
            documents and compliance — your product only receives a verification
            token.
          </p>

          <div className={styles.hero_check_vector}>
            <img
              src="../../../../public/assets/images/hero-check-vector.svg"
              alt="Hero Check Vector"
            />
          </div>

          <div className={styles.hero_actions}>
            <SpecialButton icon="north_east">Get started free</SpecialButton>

            <SpecialButton variant="secondary">
              <div className={styles.google_btn_content}>
                <img
                  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                  alt="Google"
                />
                <span>Sign in with Google</span>
              </div>
            </SpecialButton>
          </div>
        </section>

        {/* Brands Section */}
        <section className={styles.brands_section}>
          <p className={styles.brands_title}>
            Trusted by 500+ companies worldwide
          </p>
          <div className={styles.brands_grid}>
            <BrandItem icon="sync_alt" name="Synergy" />
            <BrandItem icon="filter_tilt_shift" name="Horizon" />
            <BrandItem icon="auto_awesome" name="Catalyst" />
            <BrandItem icon="local_fire_department" name="Phoenix" />
            <BrandItem icon="wb_sunny" name="Solaris" />
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.features_section}>
          <div className={styles.features_header}>
            <h2 className={styles.section_title}>
              Verification flows designed for developers
            </h2>
            <p className={styles.section_subtitle}>
              Integrate in minutes, scale to millions.
            </p>
          </div>

          <div className={styles.features_grid}>
            <FeatureCard
              icon="code"
              title="API Verification"
              description="Verify directly in your app with our robust API."
            />
            <FeatureCard
              icon="person"
              title="Single Verification"
              description="Verify one user instantly through our dashboard."
            />
            <FeatureCard
              icon="description"
              title="Batch Verification"
              description="Verify thousands of users in a single upload."
            />
            <FeatureCard
              icon="key"
              title="Token-Based Access"
              description="Get proof without storing sensitive identity data."
            />
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footer_content}>
          <div className={styles.footer_logo}>
            <h3>PrivyID</h3>
            <p>The identity infrastructure for the modern web.</p>
          </div>
          <div className={styles.footer_links}>
            <div className={styles.link_group}>
              <h4>Product</h4>
              <a href="#">Verification</a>
              <a href="#">API Reference</a>
              <a href="#">Pricing</a>
            </div>
            <div className={styles.link_group}>
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Privacy</a>
            </div>
          </div>
        </div>
        <div className={styles.footer_bottom}>
          <p>© 2026 PrivyID Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const BrandItem = ({ icon, name }) => (
  <div className={styles.brand_item}>
    <span className="material-symbols-outlined">{icon}</span>
    <span>{name}™</span>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className={styles.feature_card}>
    <div className={styles.feature_icon_box}>
      <span className="material-symbols-outlined">{icon}</span>
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default MarketingPage;
