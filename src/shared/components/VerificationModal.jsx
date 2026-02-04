import React from "react";
import "./verification-modal.css";

const VerificationModal = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null;

  return (
    <div className="modal_overlay" onClick={onClose}>
      <div className="modal_container" onClick={(e) => e.stopPropagation()}>
        <div className="modal_header">
          <p className="modal_title">Verification Details</p>
          <button className="close_button" onClick={onClose}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="details_report modal_report">
          <div className="report_title">
            <p>Verification ID: {data.id}</p>
            <button className="secondary_button export_btn">
              Export as CSV
              <span className="material-symbols-outlined">upload</span>
            </button>
          </div>
          <div className="report_content">
            <div className="report_row">
              <p className="report_label">User Name</p>
              <p className="report_value">{data.name}</p>
            </div>
            <div className="report_row">
              <p className="report_label">ID Type</p>
              <p className="report_value">{data.type}</p>
            </div>
            <div className="report_row">
              <p className="report_label">Batch No.</p>
              <p className="report_value">{data.batch}</p>
            </div>
            <div className="report_row">
              <p className="report_label">Date</p>
              <p className="report_value">{data.date}</p>
            </div>
            <div className="report_row">
              <p className="report_label">Time</p>
              <p className="report_value">{data.time}</p>
            </div>
            <div className="report_row">
              <p className="report_label">Status</p>
              <p className={`report_value status ${data.status.toLowerCase()}`}>
                {data.status}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationModal;
