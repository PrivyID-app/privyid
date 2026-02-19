import React, { useState } from "react";
import userFill from "../../../assets/images/user-fill.svg";
import checkboxIcon from "../../../assets/images/Checkbox [1.0].svg";
import { supabase } from "../../../shared/services/supabase";

const AdminLoginStep = ({ onNext }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword(
        {
          email,
          password,
        },
      );

      if (authError) throw authError;

      // Logic for Supabase Auth handled by ProtectedRoute, but we trigger navigation
      onNext();
    } catch (err) {
      setError(err.message || "Invalid login credentials");
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
          <p className="login_title_text_bg">Super Admin Login</p>
          <p className="login_title_text_sm">
            Enter your credentials to access the portal.
          </p>
        </div>
      </div>

      <form className="login_form" onSubmit={handleSubmit}>
        {error && (
          <div
            style={{
              padding: "0.75rem",
              borderRadius: "8px",
              background: "#fee2e2",
              color: "#b91c1c",
              marginBottom: "1rem",
              fontSize: "0.875rem",
            }}
          >
            {error}
          </div>
        )}

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
              required
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
          {loading ? "Signing in..." : "Login"}
        </button>
      </form>
    </>
  );
};

export default AdminLoginStep;
