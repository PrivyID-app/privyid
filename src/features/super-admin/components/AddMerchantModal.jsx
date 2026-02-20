import React, { useState } from "react";
import { supabase } from "../../../shared/services/supabase";
import CustomSelect from "../../../shared/components/CustomSelect";

const AddMerchantModal = ({ isOpen, onClose, onRefresh }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    business_name: "",
    email: "",
    service_type: "combined",
    company_type: "Limited Liability",
  });

  const serviceOptions = [
    { value: "combined", label: "Combined (KYC + KYB)" },
    { value: "kyc", label: "KYC Only" },
    { value: "kyb", label: "KYB Only" },
  ];

  const companyOptions = [
    { value: "Limited Liability", label: "Limited Liability" },
    { value: "Sole Proprietorship", label: "Sole Proprietorship" },
    { value: "Enterprise", label: "Enterprise" },
  ];

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
            <CustomSelect
              options={serviceOptions}
              value={formData.service_type}
              onSelect={(value) =>
                setFormData({ ...formData, service_type: value })
              }
            />
          </div>

          <div className="form_group">
            <label>Company Type</label>
            <CustomSelect
              options={companyOptions}
              value={formData.company_type}
              onSelect={(value) =>
                setFormData({ ...formData, company_type: value })
              }
            />
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
