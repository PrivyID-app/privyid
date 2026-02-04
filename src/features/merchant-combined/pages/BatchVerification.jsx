import React from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import VerificationTable from "../../../shared/components/VerificationTable";
import FileDropzone from "../../../shared/components/FileDropzone";
import FilterDropdown from "../../../shared/components/FilterDropdown";

const BatchVerification = () => {
  const verifications = [
    {
      id: "#COMB-KYC-001",
      type: "Passport",
      name: "John Doe",
      status: "Approved",
      batch: "#BATCH4001",
      date: "15 Sep 2024",
      time: "10:30 AM",
    },
    {
      id: "#COMB-KYC-002",
      type: "Driver License",
      name: "Jane Smith",
      status: "Pending",
      batch: "#BATCH4002",
      date: "16 Sep 2024",
      time: "11:45 AM",
    },
    {
      id: "#COMB-KYC-003",
      type: "National ID",
      name: "Mark Wilson",
      status: "Approved",
      batch: "#BATCH4003",
      date: "16 Sep 2024",
      time: "02:20 PM",
    },
    {
      id: "#COMB-KYC-004",
      type: "Passport",
      name: "Sarah Parker",
      status: "Rejected",
      batch: "#BATCH4004",
      date: "17 Sep 2024",
      time: "09:15 AM",
    },
    {
      id: "#COMB-KYC-005",
      type: "Driver License",
      name: "Tom Harris",
      status: "Approved",
      batch: "#BATCH4005",
      date: "17 Sep 2024",
      time: "01:40 PM",
    },
    {
      id: "#COMB-KYC-006",
      type: "National ID",
      name: "Alice Cooper",
      status: "Pending",
      batch: "#BATCH4006",
      date: "18 Sep 2024",
      time: "10:00 AM",
    },
    {
      id: "#COMB-KYC-007",
      type: "Passport",
      name: "Bob Dylan",
      status: "Approved",
      batch: "#BATCH4007",
      date: "18 Sep 2024",
      time: "03:30 PM",
    },
    {
      id: "#COMB-KYC-008",
      type: "Driver License",
      name: "Charlie Brown",
      status: "Approved",
      batch: "#BATCH4008",
      date: "19 Sep 2024",
      time: "11:50 AM",
    },
    {
      id: "#COMB-KYC-009",
      type: "National ID",
      name: "Diana Prince",
      status: "Rejected",
      batch: "#BATCH4009",
      date: "19 Sep 2024",
      time: "04:10 PM",
    },
    {
      id: "#COMB-KYC-010",
      type: "Passport",
      name: "Edward Norton",
      status: "Approved",
      batch: "#BATCH4010",
      date: "20 Sep 2024",
      time: "10:30 AM",
    },
  ];

  const handleFileSelect = (file) => {
    console.log("File selected:", file.name);
  };

  return (
    <>
      <PageHeader
        title="Batch KYC Verification"
        description="Upload and verify multiple individual customers at once"
      />
      <div className="content_area">
        <div className="quick_actions">
          <p className="section_title">Quick Actions</p>
          <div className="filter_wrapper">
            <button className="secondary_button">
              <span className="material-symbols-outlined">add</span>
              <p>Single Verification</p>
            </button>
            <button className="primary_button">
              <span className="material-symbols-outlined">description</span>
              <p>New Batch Verification</p>
            </button>
          </div>
        </div>

        <div className="supporting_documents_section">
          <FileDropzone onFileSelect={handleFileSelect} />
        </div>

        <div className="recent_verifications">
          <div className="top_area">
            <p className="section_title">Recent Records</p>
            <div className="search_box">
              <span className="material-symbols-outlined search_icon">
                search
              </span>
              <input
                type="text"
                placeholder="Search records..."
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
