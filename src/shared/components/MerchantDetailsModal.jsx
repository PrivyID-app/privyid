import React from "react";
import "./verification-modal.css"; // Reuse the same modal styles

const MerchantDetailsModal = ({ isOpen, onClose, merchant }) => {
  if (!isOpen || !merchant) return null;

  return (
    <div className="modal_overlay" onClick={onClose}>
      <div className="modal_container" onClick={(e) => e.stopPropagation()}>
        <div className="modal_header">
          <p className="modal_title">Merchant Details</p>
          <button className="close_button" onClick={onClose}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="details_report modal_report">
          <div className="report_title">
            <p>Merchant ID: {merchant.id}</p>
            <div style={{ display: "flex", gap: "8px" }}>
              {/* Dashboard navigation removed as requested */}
            </div>
          </div>
          <div className="report_content">
            <div className="report_row">
              <p className="report_label">Business Name</p>
              <p className="report_value">{merchant.businessName}</p>
            </div>
            <div className="report_row">
              <p className="report_label">Business Type</p>
              <p className="report_value">{merchant.businessType}</p>
            </div>
            <div className="report_row">
              <p className="report_label">Service Type</p>
              <p
                className="report_value"
                style={{ textTransform: "uppercase" }}
              >
                {merchant.serviceType}
              </p>
            </div>
            <div className="report_row">
              <p className="report_label">Join Date</p>
              <p className="report_value">{merchant.joinDate}</p>
            </div>
            <div className="report_row">
              <p className="report_label">Total Verifications</p>
              <p className="report_value">{merchant.verifications}</p>
            </div>
            <div className="report_row">
              <p className="report_label">Total Revenue</p>
              <p className="report_value">{merchant.revenue}</p>
            </div>
            <div className="report_row">
              <p className="report_label">Status</p>
              <p
                className={`report_value status ${merchant.status.toLowerCase()}`}
              >
                {merchant.status.charAt(0).toUpperCase() +
                  merchant.status.slice(1)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantDetailsModal;
