import React from 'react';
import { Link } from 'react-router-dom';
import WebNav from '../../shared/components/WebNav'; // Import WebNav
import '../../../legacy/index.css'; // Import the CSS for this page

// Import images
import LogoBlack from '../../../legacy/images/Logo black.svg'; // Assuming this path
import CelebrationHeader from '../../../legacy/images/celebration-header.svg'; // Assuming this path
import SpecialButton from '../../shared/components/SpecialButton';

const LandingPage = () => {
    return (
        <>
            <WebNav />

            <main>
                <section className="hero">
                    <div className="container">
                        <h1>Your Trusted Partner for Secure Identity Verification</h1>
                        <p>Streamline your KYC & KYB processes with PrivyID's advanced and reliable solutions.</p>
                        <Link to="/onboarding"><SpecialButton>Get Started Now</SpecialButton></Link>
                        <div className="hero-image">
                            <img src={CelebrationHeader} alt="Hero Illustration" />
                        </div>
                    </div>
                </section>

                <section className="features">
                    <div className="container">
                        <h2>Why Choose PrivyID?</h2>
                        <div className="feature-grid">
                            <div className="feature-item">
                                <span className="material-symbols-outlined">verified_user</span>
                                <h3>Robust Security</h3>
                                <p>Protect your business and customers with industry-leading security protocols.</p>
                            </div>
                            <div className="feature-item">
                                <span className="material-symbols-outlined">speed</span>
                                <h3>Blazing Fast Verification</h3>
                                <p>Onboard users and businesses in minutes, not days.</p>
                            </div>
                            <div className="feature-item">
                                <span className="material-symbols-outlined">integration_instructions</span>
                                <h3>Seamless Integration</h3>
                                <p>Easy-to-use APIs and flexible integration options for any platform.</p>
                            </div>
                            <div className="feature-item">
                                <span className="material-symbols-outlined">analytics</span>
                                <h3>Actionable Insights</h3>
                                <p>Gain valuable data and analytics to optimize your operations.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cta">
                    <div className="container">
                        <h2>Ready to Transform Your Verification Process?</h2>
                        <Link to="/onboarding" className="btn primary large">Start Your Free Trial</Link>
                    </div>
                </section>
            </main>

            <footer>
                <div className="container">
                    <p>&copy; 2024 PrivyID. All rights reserved.</p>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>
            </footer>
        </>
    );
};

export default LandingPage;
