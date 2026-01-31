import React, { useEffect, useState } from 'react';
import '../onboarding.css';
import logoDark from '../../../assets/images/Logo dark.svg';
import pattern from '../../../assets/images/Pattern.svg';

const OnboardingLayout = ({ 
  children, 
  leftContent,
  leftTopContent,
  layoutClassName = 'login_flow',
  showLeftPanel = true,
  leftContainerClassName = '',
  useLoginStepWrapper = true
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Reset visibility and trigger fade-in animation with a small delay
    setIsVisible(false);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    return () => clearTimeout(timer);
  }, [layoutClassName]);

  return (
    <div className="body_wrapper">
      <div className={`${layoutClassName} active section-fade ${isVisible ? 'visible' : ''}`}>
        {showLeftPanel && (
          <div className={`onboarding_left_container ${leftContainerClassName}`}>
            <div className="onboarding_left_top">
              <div className="logo">
                <a href="/">
                  <img src={logoDark} alt="PrivyID Logo" />
                </a>
              </div>
              {leftTopContent}
            </div>

            <div className="pattern">
              <img src={pattern} alt="Pattern" />
            </div>

            <div className="onboarding_left_bottom">
              {leftContent || (
                <>
                  <p className="onboarding_left_footer_text_bg">Trusted by 1,000+ Merchants</p>
                  <p className="onboarding_left_footer_text_sm">Process millions of verifications with enterprise-grade security.</p>
                </>
              )}
            </div>
          </div>
        )}

        <div className="onboarding_right_container">
          {useLoginStepWrapper ? (
            <div className="login_step">
              {children}
            </div>
          ) : (
            children
          )}
        </div>
      </div>
    </div>
  );
};

export default OnboardingLayout;
