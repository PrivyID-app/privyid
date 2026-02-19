import React, { useState } from "react";
import { supabase } from "../../../shared/services/supabase";

const AddMerchantModal = ({ isOpen, onClose, onRefresh }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    business_name: "",
    email: "",
    service_type: "combined",
    company_type: "Limited Liability",
  });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from("merchants").insert([
        {
          ...formData,
          onboarding_step: "completed",
        },
      ]);

      if (error) throw error;

      alert("✅ Merchant added successfully!");
      onRefresh();
      onClose();
    } catch (error) {
      console.error("Error adding merchant:", error);
      alert(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal_overlay" onClick={onClose}>
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <div className="modal_header">
          <h3>Add New Merchant</h3>
          <button className="close_btn" onClick={onClose}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="modal_form">
          <div className="form_group">
            <label>Business Name</label>
            <input
              type="text"
              required
              value={formData.business_name}
              onChange={(e) =>
                setFormData({ ...formData, business_name: e.target.value })
              }
              placeholder="e.g. Acme Corp"
            />
          </div>

          <div className="form_group">
            <label>Business Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="admin@acme.com"
            />
          </div>

          <div className="form_group">
            <label>Service Type</label>
            <select
              value={formData.service_type}
              onChange={(e) =>
                setFormData({ ...formData, service_type: e.target.value })
              }
            >
              <option value="combined">Combined (KYC + KYB)</option>
              <option value="kyc">KYC Only</option>
              <option value="kyb">KYB Only</option>
            </select>
          </div>

          <div className="form_group">
            <label>Company Type</label>
            <select
              value={formData.company_type}
              onChange={(e) =>
                setFormData({ ...formData, company_type: e.target.value })
              }
            >
              <option value="Limited Liability">Limited Liability</option>
              <option value="Sole Proprietorship">Sole Proprietorship</option>
              <option value="Enterprise">Enterprise</option>
            </select>
          </div>

          <div className="form_actions">
            <button
              type="button"
              className="secondary_button"
              onClick={onClose}
              disabled={loading}
            >
              Cancel
            </button>
            <button type="submit" className="primary_button" disabled={loading}>
              {loading ? "Adding..." : "Add Merchant"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMerchantModal;
