import React, { useState, useEffect } from "react";
import { supabase } from "../../../shared/services/supabase";
import { useGlobal } from "../../../app/GlobalContext";
import { useNavigate } from "react-router-dom";

import userFill from "../../../assets/images/user-fill.svg";
import checkboxIcon from "../../../assets/images/Checkbox [1.0].svg";
import googleLogo from "../../../assets/images/Google logo [1.0].svg";
import appleLogo from "../../../assets/images/Apple Logos [1.0].svg";

const LoginStep = ({ onNext, onSignupClick, onLoginSuccess }) => {
  const navigate = useNavigate();
  const { showToast } = useGlobal();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      );
    if (isMobile) {
      showToast(
        "Please use a laptop or desktop for a better experience.",
        "info",
      );
    }
  }, [showToast]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      const user = data.user;

      // 1. Check if Super Admin
      const { data: adminData } = await supabase
        .from("super_admins")
        .select("*")
        .eq("id", user.id)
        .single();

      if (adminData) {
        showToast("Welcome back, Super Admin!", "success");
        navigate("/super-admin");
        return;
      }

      // 2. Check if Merchant
      const { data: merchantData } = await supabase
        .from("merchants")
        .select("*")
        .eq("id", user.id)
        .single();

      if (merchantData) {
        showToast("Login successful!", "success");
        onLoginSuccess({ user, merchant: merchantData });
      } else {
        // New user or profile missing
        onNext();
      }
    } catch (error) {
      showToast(error.message || "Invalid credentials.", "error");
    } finally {
      setLoading(false);
    }
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
          <p className="login_title_text_bg">Login to your account</p>
          <p className="login_title_text_sm">Enter your details to login.</p>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

        <button className="login_button" type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <div className="alt_login">
        <div className="alt_login_header">
          <p className="alt_login_header_text_sm">Or continue with</p>
        </div>

        <div className="alt_login_buttons">
          <button className="alt_login_button" type="button">
            <img src={googleLogo} alt="Google" />
            Login with Google
          </button>

          <button className="alt_login_button" type="button">
            <img src={appleLogo} alt="Apple" />
            Login with Apple
          </button>
        </div>
      </div>

      <div className="login_footer">
        <p className="login_footer_text_sm">
          Don't have an account?{" "}
          <span className="login_footer_link">
            <a
              className="login_footer_link"
              onClick={onSignupClick}
              style={{ cursor: "pointer" }}
            >
              Sign Up
            </a>
          </span>
        </p>
      </div>
    </>
  );
};

export default LoginStep;
