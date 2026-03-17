import React, { useState } from "react";
import { useAppContext } from "../../../context/appContextHooks";
import { supabase } from "../../services/supabase";
import { useNavigate, useLocation } from "react-router-dom";
import { useGlobal } from "../../../app/GlobalContext";

const AccountDetails = () => {
  const { user, updateUser } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation();
  const { showToast } = useGlobal();
  const [formData, setFormData] = useState({ ...user });

  React.useEffect(() => {
    setFormData({ ...user });
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    updateUser(formData);
    showToast("Account details updated successfully!", "success");
  };

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      showToast("Logged out successfully", "success");

      if (location.pathname.includes("super-admin")) {
        navigate("/super-admin/login");
      } else {
        navigate("/onboarding?mode=login");
      }
    } catch (error) {
      showToast(error.message || "Logout failed", "error");
    }
  };

  return (
    <div className="account_details_section">
      <div className="header">
        <p className="info">Account Info</p>
        <p>Manage and update your account details, profile picture and more</p>
      </div>

      <div className="form_container">
        <form onSubmit={handleSave}>
          <div className="form_row">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
            />
          </div>
          <div className="form_row">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              disabled
            />
          </div>
          <div className="form_row">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
            />
          </div>
          <div className="form_row">
            <label>Department</label>
            <input
              type="text"
              name="dept"
              value={formData.dept}
              onChange={handleChange}
              placeholder="Department"
            />
          </div>
          <div className="form_row">
            <label>Role</label>
            <div className="role_pill_container">
              <span className="role_pill">
                <span className="material-symbols-outlined">check_circle</span>
                {user.role}
              </span>
            </div>
          </div>

          <div className="form_actions">
            <div className="danger_zone">
              <button
                type="button"
                className="btn_logout"
                onClick={handleLogout}
              >
                Log out
              </button>
              <button type="button" className="btn_delete">
                Delete Account
              </button>
            </div>
            <button type="submit" className="primary_btn">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountDetails;
