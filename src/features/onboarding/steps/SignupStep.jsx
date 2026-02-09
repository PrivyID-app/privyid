import React, { useState } from 'react';
import { useOnboarding } from '../onboarding.context';
import userAddFill from '../../../assets/images/user-add-fill.svg';
import infoFill from '../../../assets/images/information-fill.svg';
import googleLogo from '../../../assets/images/Google logo [1.0].svg';
import appleLogo from '../../../assets/images/Apple Logos [1.0].svg';
import checkboxGreen from '../../../assets/images/Checkbox-green [1.0].svg';

export const SignupLeftContent = () => (
  <>
    <p className="onboarding_left_footer_text_bg">Start Verifying Identities in Minutes</p>
    <p className="onboarding_left_footer_text_sm">Join 1,000+ merchants who trust PrivyID for enterprise-grade identity verification.</p>
    <div className="feature_wrapper">
      <div className="feature">
        <img src={checkboxGreen} alt="feature" />
        <div className="feature_text">
          <p className="feature_text_bg">100 Free Verifications</p>
          <p className="feature_text_sm">Test our platform with no credit card required</p>
        </div>
      </div>
      <div className="feature">
        <img src={checkboxGreen} alt="feature" />
        <div className="feature_text">
          <p className="feature_text_bg">5-Minute Setup</p>
          <p className="feature_text_sm">Guided onboarding gets you live quickly</p>
        </div>
      </div>
      <div className="feature">
        <img src={checkboxGreen} alt="feature" />
        <div className="feature_text">
          <p className="feature_text_bg">Enterprise Security</p>
          <p className="feature_text_sm">SOC 2 Type II certified, GDPR compliant</p>
        </div>
      </div>
    </div>
  </>
);

const SignupStep = ({ onNext, onLoginClick }) => {
  const { setKycOptions } = useOnboarding();
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setKycOptions({ email });
    onNext();
  };

  return (
    <>
      <div className="login_header">
        <div className="custom_icon">
          <div className="key_icon">
            <img src={userAddFill} alt="user Icon" />
          </div>
        </div>

        <div className="login_title">
          <p className="login_title_text_bg">Create a new account</p>
          <p className="login_title_text_sm">Enter your details to register.</p>
        </div>
      </div>

      <form className="login_form" onSubmit={handleSubmit}>
        <div className="input_group">
          <label className="input_label" htmlFor="signup_email">Email</label>
          <div className="input_wrapper">
            <input 
              className="input" 
              type="email" 
              id="signup_email" 
              name="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span className="material-symbols-outlined icon">mail</span>
          </div>
        </div>

        <div className="input_group">
          <label className="input_label" htmlFor="password">Password</label>
          <div className="input_wrapper">
            <input 
              className="input" 
              type={showPassword ? "text" : "password"} 
              id="password" 
              name="password" 
              placeholder="Enter your password" 
              required
            />
            <span className="material-symbols-outlined icon">lock</span>
            <span 
              className="material-symbols-outlined icon-eye" 
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "visibility_off" : "visibility"}
            </span>
          </div>
        </div>

        <div className="hint">
          <div className="hint_icon">
            <img src={infoFill} alt="hint_icon" />
          </div>
          <p className="hint_text">Must contain 1 uppercase letter, 1 number, min. 8 characters.</p>
        </div>

        <div className="input_group">
          <label className="input_label" htmlFor="confirm_password">Confirm Password</label>
          <div className="input_wrapper">
            <input 
              className="input" 
              type={showPassword ? "text" : "password"} 
              id="confirm_password" 
              placeholder="Confirm password" 
              required
            />
            <span className="material-symbols-outlined icon">lock</span>
          </div>
        </div>

        <button className="login_button" type="submit">Register</button>
      </form>

      <div className="alt_login">
        <div className="alt_login_header">
          <p className="alt_login_header_text_sm">Or Signup with</p>
        </div>

        <div className="alt_login_buttons">
          <button className="alt_login_button" type="button">
            <img src={googleLogo} alt="Google" />
            Signup with Google
          </button>

          <button className="alt_login_button" type="button">
            <img src={appleLogo} alt="Apple" />
            Signup with Apple
          </button>
        </div>
      </div>

      <div className="login_footer">
        <p className="login_footer_text_sm Terms">
          By clicking Register, you agree to accept PrivyID Terms and Conditions.
        </p>
        <p className="login_footer_text_sm" style={{ marginTop: '1rem' }}>
          Already have an account?{' '}
          <span className="login_footer_link">
            <a className="login_footer_link" onClick={onLoginClick} style={{ cursor: 'pointer' }}>Login</a>
          </span>
        </p>
      </div>
    </>
  );
};

export default SignupStep;
