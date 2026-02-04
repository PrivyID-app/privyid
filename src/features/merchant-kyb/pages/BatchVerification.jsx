import React from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import VerificationTable from "../../../shared/components/VerificationTable";
import FileDropzone from "../../../shared/components/FileDropzone";

const BatchVerification = () => {
  const verifications = [
    {
      id: "#KYB20240915001",
      type: "Business License",
      name: "Global Corp",
      status: "Approved",
      batch: "#BATCH2001",
      date: "15 Sep 2024",
      time: "10:30 AM",
    },
    {
      id: "#KYB20240915002",
      type: "Tax ID",
      name: "Tech Solutions Ltd",
      status: "Pending",
      batch: "#BATCH2002",
      date: "16 Sep 2024",
      time: "11:45 AM",
    },
  ];

  const handleFileSelect = (file) => {
    console.log("File selected:", file.name);
  };

  return (
    <div className="content_wrapper">
      <PageHeader
        title="Batch Business"
        description="Upload and verify multiple businesses at once"
      />
      <div className="content_area">
        {/* Quick Actions */}
        <div className="quick_actions">
          <p className="section_title">Quick Actions</p>

          <div className="filter_wrapper">
            <button className="secondary_button">
              <span className="material-symbols-outlined">add</span>
              <p>Single Business</p>
            </button>

            <button className="secondary_button">
              <span className="material-symbols-outlined">add</span>
              <p>API Integration</p>
            </button>

            <button className="primary_button">
              <span className="material-symbols-outlined">description</span>
              <p>New Batch Business</p>
            </button>
          </div>
        </div>

        {/* Supporting Documents / Dropzone */}
        <div className="supporting_documents_section">
          <FileDropzone onFileSelect={handleFileSelect} />
        </div>

        {/* Recent Verifications Table */}
        <div className="recent_verifications">
          <div className="top_area">
            <p className="section_title">Recent Verifications</p>

            <div className="search_box">
              <span className="material-symbols-outlined search_icon">
                search
              </span>
              <input
                type="text"
                placeholder="Search by name, email, or ID"
                className="search_input"
              />
            </div>

            <div className="filter_wrapper">
              <button className="secondary_button">
                <span className="material-symbols-outlined">filter_list</span>
                <p>Filter Records</p>
              </button>

              <button className="secondary_button">
                <span className="material-symbols-outlined">download</span>
                <p>Download as CSV</p>
              </button>
            </div>
          </div>

          <VerificationTable data={verifications} />
        </div>
      </div>
    </div>
  );
};

export default BatchVerification;
