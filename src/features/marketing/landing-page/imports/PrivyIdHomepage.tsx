import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WebNav from "../../../../shared/components/WebNav";
import SpecialButton from "../../../../shared/components/SpecialButton";
import PrimaryButton from "../../../../shared/components/PrimaryButton";
import SecondaryButton from "../../../../shared/components/SecondaryButton";
import "../../../../app/pages/LandingPage.css";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Assets (from src/assets/images)
import logoDark from "../../../../assets/images/Logo dark.svg";
import Footer from "../../../../shared/components/Footer";
import CtaSection from "../../../../shared/components/CtaSection";

// Legacy images — referenced via relative path from /legacy/images/
// Legacy images — referenced via public/legacy/ images/
const LEGACY = `${import.meta.env.BASE_URL}legacy/images/`;

// Trusted-by logos — doubled for seamless marquee loop
const BRAND_LOGOS = [
  { src: `${LEGACY}🖼️ Web/Brand Items [Atomic]-1.svg`, alt: "Brand 1" },
  { src: `${LEGACY}🖼️ Web/Brand Items [Atomic]-2.svg`, alt: "Brand 2" },
  { src: `${LEGACY}🖼️ Web/Brand Items [Atomic]-3.svg`, alt: "Brand 3" },
  { src: `${LEGACY}🖼️ Web/Brand Items [Atomic]-4.svg`, alt: "Brand 4" },
  { src: `${LEGACY}🖼️ Web/Brand Items [Atomic].svg`, alt: "Brand 5" },
];

// Verification Tabs
const TABS = [
  {
    id: "api",
    icon: "code",
    title: "API Verification",
    subtitle: "Verify directly in your app",
    content: {
      label: "Try live editor",
      sub: "Click the button to use the code editor",
    },
  },
  {
    id: "single",
    icon: "person",
    title: "Single Verification",
    subtitle: "Verify one user instantly",
    content: {
      label: "Single user flow",
      sub: "Quickly verify one individual",
    },
  },
  {
    id: "batch",
    icon: "docs",
    title: "Batch Verification",
    subtitle: "Verify multiple users at once",
    content: { label: "Bulk upload", sub: "Upload a CSV and verify thousands" },
  },
  {
    id: "token",
    icon: "key",
    title: "Token-Based Access",
    subtitle: "Proof without identity",
    content: {
      label: "Token exchange",
      sub: "Receive a proof token, nothing more",
    },
  },
];

// Testimonials
const TESTIMONIALS = [
  {
    name: "Daniel Okoye",
    role: "Co-founder, VaultPay",
    quote:
      "Everything we needed was already built in—verification, compliance, and token delivery.",
    highlight: " It just worked out of the box.",
    avatar: `${LEGACY}Image.png`, // existing avatar
    stats: [
      { label: "Time to Verify", value: "42s" },
      { label: "Onboarding completion", value: "+37%" },
    ],
  },
  {
    name: "Amina Bello",
    role: "CTO, NeoLend Africa",
    quote: "PrivyID saved us months of compliance engineering.",
    highlight: " We went live in a weekend.",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop",
    stats: [
      { label: "Time saved", value: "3mo" },
      { label: "Drop-off reduced", value: "-61%" },
    ],
  },
  {
    name: "Carlos Mendes",
    role: "Head of Product, FlowTrade",
    quote: "Our users trust us more knowing we don't store their documents.",
    highlight: " Zero custody is a game changer.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    stats: [
      { label: "Breach liability", value: "$0" },
      { label: "Compliance cost", value: "-80%" },
    ],
  },
];

// FAQ
const FAQS = [
  {
    q: "How does PrivyID protect user data?",
    a: "PrivyID never stores raw identity documents on your servers. All sensitive data lives within PrivyID's secure, encrypted infrastructure. You receive only a verification token as proof.",
  },
  {
    q: "How long does a typical verification take?",
    a: "Most verifications complete in under 30 seconds. Our real-time pipeline processes identity documents, runs compliance checks, and delivers results via webhook instantly.",
  },
  {
    q: "What countries and document types are supported?",
    a: "We support 40+ countries with localized compliance rules built in. Accepted documents include national IDs, passports, driver's licenses, and business registration certificates.",
  },
  {
    q: "Can I set up PrivyID without a developer?",
    a: "Yes. You can use our no-code hosted verification link to collect user verifications without writing a single line of code. Connect it to your dashboard in minutes.",
  },
  {
    q: "Is PrivyID GDPR and local regulation compliant?",
    a: "PrivyID is built with privacy-by-design principles. Our infrastructure is GDPR-ready and automatically adapts to local regulations across supported regions. Compliance updates are applied by default.",
  },
  {
    q: "What does 'token-based access' mean?",
    a: "Instead of sharing identity documents, users complete verification through PrivyID. Your system receives a cryptographic proof token that confirms verification status — but never the actual documents.",
  },
];

export default function PrivyIdHomepage() {
  const [activeTab, setActiveTab] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  // Animation logic
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Entrance
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });
      heroTl
        .from(".lp-hero-chip", { y: -20, opacity: 0, duration: 0.8 }, 0.2)
        .from(".lp-hero-title", { y: 30, opacity: 0 }, "-=0.6")
        .from(".lp-hero-subtitle", { y: 20, opacity: 0 }, "-=0.7")
        .from(".lp-hero-buttons", { y: 10, opacity: 0 }, "-=0.8")
        .from(".lp-hero-pattern", { scale: 1.1, opacity: 0, duration: 2 }, 0);

      // 2. Bento Grid Animation (ScrollTrigger)
      gsap.from(".lp-bento-card", {
        scrollTrigger: {
          trigger: ".lp-bento-grid",
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
      });

      // 3. Stats Section Horizontal Stagger
      gsap.from(".lp-stats-row", {
        scrollTrigger: {
          trigger: ".lp-stats-table",
          start: "top 85%",
        },
        x: -30,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power2.out",
      });

      // 4. Numbers Counter (Optional/Flashy)
      // Note: This targets elements with the number class
      const statsElements = document.querySelectorAll(".lp-stat-number");
      statsElements.forEach((el) => {
        const targetValue = el.textContent || "";
        if (targetValue.includes("M") || targetValue.includes("<")) {
          // Complex values might need more logic, but simple fade-in is safe
          gsap.from(el, {
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
            },
            scale: 0.8,
            duration: 0.5,
            ease: "back.out(1.7)",
          });
        }
      });

      // 5. How It Works - Staggered entrance
      gsap.from(".lp-hiw-card", {
        scrollTrigger: {
          trigger: ".lp-hiw-grid",
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
      });

      // 6. Section Headers - Staggered entrance for all section headers
      const sectionHeaders = document.querySelectorAll(".lp-section-header");
      sectionHeaders.forEach((header) => {
        gsap.from(header.children, {
          scrollTrigger: {
            trigger: header,
            start: "top 85%",
          },
          y: 30,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
        });
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  // FAQ Smooth Transition - Triggered by state change
  useEffect(() => {
    if (openFaq !== null) {
      const activeAnswer = document.querySelectorAll(".lp-faq-answer")[openFaq];
      if (activeAnswer) {
        gsap.fromTo(
          activeAnswer,
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" }
        );
      }
    }
    // Close other FAQs happens via React state rendering classes, 
    // but GSAP can handle the opening height more smoothly than max-height.
  }, [openFaq]);

  // SEO Integration
  React.useEffect(() => {
    document.title = "PrivyID | Identity Infrastructure without Data Custody";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Start your journey with PrivyID. Scalable KYC and KYB solutions for your business. Verify users and businesses via API without storing sensitive data.",
      );
    }
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute(
        "content",
        "PrivyID, KYC onboarding, KYB integration, identity verification, zero custody, compliance API",
      );
    }
  }, []);

  const prevTestimonial = () =>
    setTestimonialIndex(
      (i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
    );
  const nextTestimonial = () =>
    setTestimonialIndex((i) => (i + 1) % TESTIMONIALS.length);

  const current = TESTIMONIALS[testimonialIndex];

  return (
    <div className="lp-body" ref={mainRef}>
      <style>{`
        html, body, #root, .App, .lp-body {
          overflow-y: auto !important;
          overflow-x: hidden !important;
          height: auto !important;
          min-height: 100vh !important;
        }
        .lp-body {
          display: flex;
          flex-direction: column;
        }
        .lp-main {
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
          flex: 1;
        }
      `}</style>
      <WebNav />

      <main className="lp-main">
        {/* ======== HERO ======== */}
        <section className="lp-hero">
          <div className="lp-hero-pattern">
            <img
              src={`${LEGACY}hero-check-vector.svg`}
              alt=""
              aria-hidden="true"
            />
          </div>

          <div className="lp-hero-content">
            <div className="lp-hero-chip">
              <span className="lp-hero-chip-new">New</span>
              <p>Seamless Identity Verification via API</p>
              <span className="material-symbols-outlined">arrow_outward</span>
            </div>

            <h1 className="lp-hero-title">
              Identity <span className="lp-hero-title-highlight">Infrastructure</span> <br /> without Data Custody
            </h1>

            <p className="lp-hero-subtitle">
              Verify users and businesses via API. PrivyID handles identity
              documents and compliance — your product only receives a
              verification token.
            </p>

            <div className="lp-hero-buttons">
              <SpecialButton
                as={Link as any}
                to="/onboarding?mode=signup"
                icon="arrow_outward"
              >
                Get Started Free
              </SpecialButton>
              <SecondaryButton as={Link as any} to="/documentation">
                View Documentation
                <span className="material-symbols-outlined">arrow_outward</span>
              </SecondaryButton>
            </div>
          </div>
        </section>

        {/* ======== TRUSTED BY ======== */}
        <section
          className="lp-trusted lp-section"
          style={{ padding: "3rem 0" }}
        >
          <p className="lp-trusted-label">
            Trusted by 500+ Companies Worldwide
          </p>
          <div className="lp-marquee-wrapper">
            <div className="lp-marquee-track">
              {[...BRAND_LOGOS, ...BRAND_LOGOS].map((logo, i) => (
                <img
                  key={i}
                  src={logo.src}
                  alt={logo.alt}
                  className="lp-marquee-logo"
                />
              ))}
            </div>
          </div>
        </section>

        {/* ======== PAGE DIVIDER ======== */}
        <div className="lp-page-divider">
          <img src={`${LEGACY}page-divider.svg`} alt="" aria-hidden="true" />
        </div>

        {/* ======== VERIFICATION TABS ======== */}
        <section className="lp-tabs-section">
          <div className="lp-container">
            <div className="lp-tabs-wrapper">
              {/* Indicator row */}
              <div className="lp-tabs-indicator">
                {TABS.map((tab, i) => (
                  <div
                    key={tab.id}
                    className={`lp-tabs-indicator-segment ${i === activeTab ? "is-active" : ""}`}
                  />
                ))}
              </div>

              {/* Tab cards */}
              <div className="lp-tabs-cards">
                {TABS.map((tab, i) => (
                  <div
                    key={tab.id}
                    className={`lp-tab-card ${i === activeTab ? "is-active" : ""}`}
                    onClick={() => setActiveTab(i)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && setActiveTab(i)}
                  >
                    <div className="lp-tab-icon">
                      <span className="material-symbols-outlined">
                        {tab.icon}
                      </span>
                    </div>
                    <p className="lp-tab-title">{tab.title}</p>
                    <p className="lp-tab-subtitle">{tab.subtitle}</p>
                  </div>
                ))}
              </div>

              {/* Tab content */}
              <div className="lp-tab-content">
                <div className="lp-try-live">
                  <div className="lp-live-icon">
                    <img src={`${LEGACY}live-icon.svg`} alt="Live" />
                  </div>
                  <p className="lp-live-text">
                    {TABS[activeTab].content.label}
                  </p>
                  <p className="lp-live-subtitle">
                    {TABS[activeTab].content.sub}
                  </p>
                  <PrimaryButton as={Link as any} to="/onboarding?mode=signup">
                    Try Live
                    <span className="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======== PAGE DIVIDER ======== */}
        <div className="lp-page-divider">
          <img src={`${LEGACY}page-divider.svg`} alt="" aria-hidden="true" />
        </div>

        {/* ======== STATS / IDENTITY VERIFICATION ======== */}
        <section className="lp-section lp-stats-section">
          <div
            className="lp-container"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="lp-section-header">
              <div className="lp-chip">
                <span className="material-symbols-outlined">verified</span>
                Performance
              </div>
              <h2 className="lp-section-title">
                Identity <span className="lp-hero-title-highlight">Verification</span> <br /> at infrastructure scale
              </h2>
              <p className="lp-section-subtitle">
                Reduce compliance overhead and breach risk so your team can
                focus on shipping product, not managing sensitive documents.
              </p>
            </div>

            <div className="lp-stats-table">
              {[
                {
                  number: "12M+",
                  label: "Verifications processed in the last year.",
                  desc: "Powering compliant onboarding across fintech and platforms.",
                },
                {
                  number: "< 30s",
                  label: "Average verification time.",
                  desc: "Fast user onboarding without compromising security or compliance.",
                },
                {
                  number: "0",
                  label: "Identity documents stored by clients.",
                  desc: "All sensitive data remains within PrivyID's secure infrastructure.",
                },
                {
                  number: "40+",
                  label: "Countries Supported",
                  desc: "Verifying users globally with local compliance standards built in.",
                },
              ].map((row, i) => (
                <div key={i} className="lp-stats-row">
                  <div className="lp-stat-cell">
                    <p className="lp-stat-number">{row.number}</p>
                  </div>
                  <div className="lp-stat-cell">
                    <p className="lp-stat-label">{row.label}</p>
                  </div>
                  <div className="lp-stat-cell">
                    <p className="lp-stat-desc">{row.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="lp-get-api">
              <p className="lp-get-api-title">Get API Access</p>
              <Link to="/onboarding?mode=signup" className="lp-get-api-link">
                Get API Keys
                <span className="material-symbols-outlined">arrow_outward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ======== PAGE DIVIDER ======== */}
        <div className="lp-page-divider">
          <img src={`${LEGACY}page-divider.svg`} alt="" aria-hidden="true" />
        </div>

        {/* ======== PRIVACY BENTO ======== */}
        <section className="lp-section lp-bento-section">
          <div className="lp-container">
            <div className="lp-section-header">
              <div className="lp-chip">
                <span className="material-symbols-outlined">shield</span>
                Built for modern privacy
              </div>
              <h2 className="lp-section-title">
                Remove risk. Ship faster.
                <br />
                <span className="lp-hero-title-highlight">Stay compliant.</span>
              </h2>
            </div>

            <div className="lp-bento-grid">
              {/* Left Column (Cards 1 & 2) */}
              <div className="lp-bento-card">
                <div className="lp-bento-icon">
                  <img src={`${LEGACY}check-double-line.svg`} alt="" />
                </div>
                <div className="lp-bento-card-content">
                  <p className="lp-bento-card-title">Always compliant</p>
                  <p className="lp-bento-card-subtitle">
                    Regulations handled by default.
                  </p>
                  <p className="lp-bento-card-body">
                    Auto-updates as laws change.
                  </p>
                </div>
              </div>

              <div className="lp-bento-card">
                <div className="lp-bento-icon">
                  <img src={`${LEGACY}lock-line.svg`} alt="" />
                </div>
                <div className="lp-bento-card-content">
                  <p className="lp-bento-card-title">Zero custody</p>
                  <p className="lp-bento-card-subtitle">
                    You never store identity documents.
                  </p>
                  <p className="lp-bento-card-body">Zero breach liability.</p>
                </div>
              </div>

              {/* Middle (Tall Card) */}
              <div className="lp-bento-card lp-bento-tall">
                <div className="lp-bento-icon">
                  <img src={`${LEGACY}flashlight-line.svg`} alt="" />
                </div>
                <div className="lp-bento-card-content">
                  <p className="lp-bento-card-title">30-minute setup</p>
                  <p className="lp-bento-card-subtitle">
                    4 lines of code to go live.
                  </p>
                  <p className="lp-bento-card-body">Pre-built SDKs.</p>
                </div>
              </div>

              {/* Right Column (Cards 4 & 5) */}
              <div className="lp-bento-card">
                <div className="lp-bento-icon">
                  <img src={`${LEGACY}rocket-line-2.svg`} alt="" />
                </div>
                <div className="lp-bento-card-content">
                  <p className="lp-bento-card-title">60s verification</p>
                  <p className="lp-bento-card-subtitle">
                    Real-time verification results.
                  </p>
                  <p className="lp-bento-card-body">Delivered via webhooks.</p>
                </div>
              </div>

              <div className="lp-bento-card">
                <div className="lp-bento-icon">
                  <img src={`${LEGACY}shield-user-line.svg`} alt="" />
                </div>
                <div className="lp-bento-card-content">
                  <p className="lp-bento-card-title">Reduced legal risk</p>
                  <p className="lp-bento-card-subtitle">
                    Minimize audit and breach exposure.
                  </p>
                  <p className="lp-bento-card-body">
                    No sensitive data on your servers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======== PAGE DIVIDER ======== */}
        <div className="lp-page-divider">
          <img src={`${LEGACY}page-divider.svg`} alt="" aria-hidden="true" />
        </div>

        {/* ======== HOW IT WORKS ======== */}
        <section className="lp-section lp-hiw-section">
          <div className="lp-container">
            <div className="lp-section-header">
              <div className="lp-chip">
                <span className="material-symbols-outlined">fast_forward</span>
                How it works?
              </div>
              <h2 className="lp-section-title">
                How Identity <span className="lp-hero-title-highlight">Verification</span> <br /> should work
              </h2>
              <p className="lp-section-subtitle">
                PrivyID manages verification end-to-end, so your team gets
                trusted proof — without storing documents or managing
                compliance.
              </p>
            </div>

            <div className="lp-hiw-grid">
              <div className="lp-hiw-card">
                <p className="lp-hiw-number blue">01</p>
                <div className="lp-hiw-card-content">
                  <p className="lp-hiw-title">User Verifies</p>
                  <p className="lp-hiw-subtitle">
                    Uploads ID and selfie securely
                  </p>
                </div>
              </div>
              <div className="lp-hiw-card">
                <p className="lp-hiw-number green">02</p>
                <div className="lp-hiw-card-content">
                  <p className="lp-hiw-title">PrivyID Verifies</p>
                  <p className="lp-hiw-subtitle">
                    Checks, encrypts, and stores data
                  </p>
                </div>
              </div>
              <div className="lp-hiw-card">
                <p className="lp-hiw-number purple">03</p>
                <div className="lp-hiw-card-content">
                  <p className="lp-hiw-title">You Get Token</p>
                  <p className="lp-hiw-subtitle">
                    Receive proof — no documents
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======== PAGE DIVIDER ======== */}
        <div className="lp-page-divider">
          <img src={`${LEGACY}page-divider.svg`} alt="" aria-hidden="true" />
        </div>

        {/* ======== TESTIMONIALS ======== */}
        <section className="lp-section lp-testimonials-section">
          <div className="lp-container">
            <div className="lp-section-header">
              <div className="lp-chip">
                <span className="material-symbols-outlined">chat_bubble</span>
                Fast teams without risk
              </div>
              <h2 className="lp-section-title">
                Real <span className="lp-hero-title-highlight">Results</span> from <br /> Teams using  PrivyID
              </h2>
              <p className="lp-section-subtitle">
                See how fintechs and platforms verified users faster, reduced
                compliance overhead, and eliminated identity data custody.
              </p>
            </div>

            <div className="lp-testimonial-grid">
              {/* Avatar panel */}
              <div
                className="lp-avatar-panel"
                style={{ backgroundImage: `url(${current.avatar})` }}
              >
                <div className="lp-avatar-overlay" />
                <div className="lp-avatar-nav">
                  <button
                    className="lp-avatar-btn"
                    onClick={prevTestimonial}
                    aria-label="Previous"
                  >
                    <span className="material-symbols-outlined">
                      arrow_back
                    </span>
                  </button>
                  <button
                    className="lp-avatar-btn"
                    onClick={nextTestimonial}
                    aria-label="Next"
                  >
                    <span className="material-symbols-outlined">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>

              {/* Testimonial card */}
              <div className="lp-testimonial-card">
                <div className="lp-testimonial-header">
                  <div>
                    <p className="lp-testimonial-name">{current.name}</p>
                    <p className="lp-testimonial-role">{current.role}</p>
                  </div>
                  <div className="lp-company-logo">
                    <img src={`${LEGACY}company-items.svg`} alt="Company" />
                  </div>
                </div>

                <div className="lp-testimonial-quote">
                  <p>
                    {current.quote}
                    <span className="highlight">{current.highlight}</span>
                  </p>
                </div>
              </div>

              {/* Stats cards */}
              <div className="lp-testimonial-stats">
                {current.stats.map((s, i) => (
                  <div key={i} className="lp-stat-card">
                    <p className="lp-stat-card-label">{s.label}</p>
                    <p className="lp-stat-card-value">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ======== PAGE DIVIDER ======== */}
        <div className="lp-page-divider">
          <img src={`${LEGACY}page-divider.svg`} alt="" aria-hidden="true" />
        </div>

        {/* ======== FAQ ======== */}
        <section className="lp-section lp-faq-section">
          <div
            className="lp-container"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="lp-section-header">
              <div className="lp-chip">
                <span className="material-symbols-outlined">help</span>
                FAQ
              </div>
              <h2 className="lp-section-title">Frequently Asked <span className="lp-hero-title-highlight">Questions</span></h2>
              <p className="lp-section-subtitle">
                Everything you need to know about PrivyID and how it works.
              </p>
            </div>

            <div className="lp-faq-list">
              {FAQS.map((faq, i) => (
                <div
                  key={i}
                  className={`lp-faq-item ${openFaq === i ? "is-open" : ""}`}
                >
                  <button
                    className="lp-faq-question"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span className="lp-faq-question-text">{faq.q}</span>
                    <div className="lp-faq-toggle">
                      <span className="material-symbols-outlined">add</span>
                    </div>
                  </button>
                  <div className="lp-faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======== PAGE DIVIDER ======== */}
        <div className="lp-page-divider">
          <img src={`${LEGACY}page-divider.svg`} alt="" aria-hidden="true" />
        </div>

        {/* ======== CTA ======== */}
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
