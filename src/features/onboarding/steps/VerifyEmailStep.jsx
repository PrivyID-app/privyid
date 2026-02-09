import React, { useState, useRef } from 'react';
import { useOnboarding } from '../onboarding.context';
import mailCheckFill from '../../../assets/images/mail-check-fill.svg';

const VerifyEmailStep = ({ onNext }) => {
  const { kycOptions } = useOnboarding();
  const [code, setCode] = useState(['', '', '', '']);
  const inputs = useRef([]);

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    
    const newCode = [...code];
    newCode[index] = value.slice(-1);
    setCode(newCode);

    if (value && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code.every(digit => digit !== '')) {
      onNext();
    }
  };

  const handleResend = () => {
    console.log('Resend code');
  };

  return (
    <>
      <div className="login_header">
        <div className="custom_icon">
          <div className="key_icon">
            <img src={mailCheckFill} alt="user Icon" />
          </div>
        </div>

        <div className="login_title">
          <p className="login_title_text_bg">Enter Verification Code</p>
          <p className="login_title_text_sm">
            We sent a verification code to <span id="user_email_display">{kycOptions?.email || '[EMAIL_ADDRESS]'}</span>
          </p>
        </div>
      </div>

      <form className="verify_form" onSubmit={handleSubmit}>
        <div className="input_code_group">
          {code.map((digit, idx) => (
            <div key={idx} className="input_wrapper">
              <input
                ref={el => inputs.current[idx] = el}
                className="input_code"
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(idx, e.target.value)}
                onKeyDown={(e) => handleKeyDown(idx, e)}
                pattern="[0-9]*"
                inputMode="numeric"
                required
              />
            </div>
          ))}
        </div>

        <button className="login_button" type="submit">Submit Code</button>
      </form>

      <div className="login_footer">
        <p className="login_footer_text_sm Terms">
          Experiencing issues receiving the code?
          <a className="resend_code_link" onClick={handleResend} style={{ cursor: 'pointer' }}>
            <p className="login_footer_text_sm Terms">Resend Code</p>
          </a>
        </p>
      </div>
    </>
  );
};

export default VerifyEmailStep;
