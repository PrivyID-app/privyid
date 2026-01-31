import React, { useState } from "react";
import userFill from "../../../assets/images/user-fill.svg";
import checkboxIcon from "../../../assets/images/Checkbox [1.0].svg";

const AdminLoginStep = ({ onNext }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <>
      <div className="login_header">
        <div className="custom_icon">
          <div className="key_icon">
            <img src={userFill} alt="user Icon" />
          </div>
        </div>

        <div className="login_title">
          <p className="login_title_text_bg">Super Admin Login</p>
          <p className="login_title_text_sm">
            Enter your credentials to access the portal.
          </p>
        </div>
      </div>

      <form className="login_form" onSubmit={handleSubmit}>
        <div className="input_group">
          <label className="input_label" htmlFor="email">
            Email
          </label>
          <div className="input_wrapper">
            <input
              className="input"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
            <span className="material-symbols-outlined icon">mail</span>
          </div>
        </div>

        <div className="input_group">
          <label className="input_label" htmlFor="password">
            Password
          </label>
          <div className="input_wrapper">
            <input
              className="input"
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter your password"
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

        <div className="forgot_password">
          <div className="checkbox">
            <img
              src={checkboxIcon}
              alt="Checkbox"
              className="checkbox_icon checked"
              id="remember_me"
            />
            <p className="checkbox_label">Remember me</p>
          </div>
          <a className="forgot_password_link" href="#">
            Forgot password?
          </a>
        </div>

        <button className="login_button" type="submit">
          Login
        </button>
      </form>
    </>
  );
};

export default AdminLoginStep;
