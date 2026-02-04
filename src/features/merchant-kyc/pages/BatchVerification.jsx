import React from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import VerificationTable from "../../../shared/components/VerificationTable";
import FileDropzone from "../../../shared/components/FileDropzone";
import FilterDropdown from "../../../shared/components/FilterDropdown";

const BatchVerification = () => {
  const verifications = [
    {
      id: "#KYC20240915001",
      type: "Passport",
      name: "John Doe",
      status: "Approved",
      batch: "#BATCH1001",
      date: "15 Sep 2024",
      time: "10:30 AM",
    },
    {
      id: "#KYC20240915002",
      type: "Driver License",
      name: "Jane Smith",
      status: "Pending",
      batch: "#BATCH1002",
      date: "16 Sep 2024",
      time: "11:45 AM",
    },
    {
      id: "#KYC20240915003",
      type: "National ID",
      name: "Robert Johnson",
      status: "Approved",
      batch: "#BATCH1003",
      date: "16 Sep 2024",
      time: "02:15 PM",
    },
    {
      id: "#KYC20240915004",
      type: "Passport",
      name: "Emily Davis",
      status: "Rejected",
      batch: "#BATCH1004",
      date: "17 Sep 2024",
      time: "09:30 AM",
    },
    {
      id: "#KYC20240915005",
      type: "Driver License",
      name: "Michael Wilson",
      status: "Approved",
      batch: "#BATCH1005",
      date: "17 Sep 2024",
      time: "11:00 AM",
    },
    {
      id: "#KYC20240915006",
      type: "National ID",
      name: "Sarah Miller",
      status: "Pending",
      batch: "#BATCH1006",
      date: "18 Sep 2024",
      time: "08:45 AM",
    },
    {
      id: "#KYC20240915007",
      type: "Passport",
      name: "David Brown",
      status: "Approved",
      batch: "#BATCH1007",
      date: "18 Sep 2024",
      time: "01:20 PM",
    },
    {
      id: "#KYC20240915008",
      type: "Driver License",
      name: "Jessica Taylor",
      status: "Approved",
      batch: "#BATCH1008",
      date: "19 Sep 2024",
      time: "10:05 AM",
    },
    {
      id: "#KYC20240915009",
      type: "National ID",
      name: "Chris Anderson",
      status: "Rejected",
      batch: "#BATCH1009",
      date: "19 Sep 2024",
      time: "03:40 PM",
    },
    {
      id: "#KYC20240915010",
      type: "Passport",
      name: "Lisa Thomas",
      status: "Approved",
      batch: "#BATCH1010",
      date: "20 Sep 2024",
      time: "09:50 AM",
    },
  ];

  const handleFileSelect = (file) => {
    console.log("File selected:", file.name);
  };

  return (
    <>
      <PageHeader
        title="Batch Verification"
        description="Upload and verify multiple customers at once"
      />
      <div className="content_area">
        {/* Quick Actions */}
        <div className="quick_actions">
          <p className="section_title">Quick Actions</p>

          <div className="filter_wrapper">
            <button className="secondary_button">
              <span className="material-symbols-outlined">add</span>
              <p>Single Verification</p>
            </button>

            <button className="secondary_button">
              <span className="material-symbols-outlined">add</span>
              <p>API Integration</p>
            </button>

            <button className="primary_button">
              <span className="material-symbols-outlined">description</span>
              <p>New Batch Verification</p>
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
              <FilterDropdown
                options={[
                  { label: "All Status", value: "all" },
                  { label: "Approved", value: "approved" },
                  { label: "Pending", value: "pending" },
                  { label: "Rejected", value: "rejected" },
                ]}
                onFilterChange={(val) => console.log("Filter:", val)}
              />

              <button className="secondary_button">
                <span className="material-symbols-outlined">download</span>
                <p>Download as CSV</p>
              </button>
            </div>
          </div>

          <VerificationTable data={verifications} />
        </div>
      </div>
    </>
  );
};

export default BatchVerification;
