import React from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import VerificationTable from "../../../shared/components/VerificationTable";
import FileDropzone from "../../../shared/components/FileDropzone";
import FilterDropdown from "../../../shared/components/FilterDropdown";

const BatchBusiness = () => {
  const verifications = [
    {
      id: "#COMB-KYB-001",
      type: "Business License",
      name: "Global Corp",
      status: "Approved",
      batch: "#BATCH5001",
      date: "15 Sep 2024",
      time: "10:30 AM",
    },
    {
      id: "#COMB-KYB-002",
      type: "Tax ID",
      name: "Tech Solutions Ltd",
      status: "Pending",
      batch: "#BATCH5002",
      date: "16 Sep 2024",
      time: "11:45 AM",
    },
    {
      id: "#COMB-KYB-003",
      type: "Articles of Association",
      name: "Summit Enterprises",
      status: "Approved",
      batch: "#BATCH5003",
      date: "16 Sep 2024",
      time: "03:10 PM",
    },
    {
      id: "#COMB-KYB-004",
      type: "Business License",
      name: "Oceanic Ventures",
      status: "Rejected",
      batch: "#BATCH5004",
      date: "17 Sep 2024",
      time: "09:00 AM",
    },
    {
      id: "#COMB-KYB-005",
      type: "Tax ID",
      name: "Alpha Retail Group",
      status: "Approved",
      batch: "#BATCH5005",
      date: "17 Sep 2024",
      time: "01:25 PM",
    },
    {
      id: "#COMB-KYB-006",
      type: "Articles of Association",
      name: "Pioneer Consulting",
      status: "Pending",
      batch: "#BATCH5006",
      date: "18 Sep 2024",
      time: "10:40 AM",
    },
    {
      id: "#COMB-KYB-007",
      type: "Business License",
      name: "Green Valley Foods",
      status: "Approved",
      batch: "#BATCH5007",
      date: "18 Sep 2024",
      time: "02:50 PM",
    },
    {
      id: "#COMB-KYB-008",
      type: "Tax ID",
      name: "Swift Logistics",
      status: "Approved",
      batch: "#BATCH5008",
      date: "19 Sep 2024",
      time: "11:15 AM",
    },
    {
      id: "#COMB-KYB-009",
      type: "Articles of Association",
      name: "Blue Wave Media",
      status: "Rejected",
      batch: "#BATCH5009",
      date: "19 Sep 2024",
      time: "04:30 PM",
    },
    {
      id: "#COMB-KYB-010",
      type: "Business License",
      name: "Horizon Estates",
      status: "Approved",
      batch: "#BATCH5010",
      date: "20 Sep 2024",
      time: "09:20 AM",
    },
  ];

  const handleFileSelect = (file) => {
    console.log("File selected:", file.name);
  };

  return (
    <>
      <PageHeader
        title="Batch Business Verification"
        description="Upload and verify multiple businesses at once"
      />
      <div className="content_area">
        <div className="quick_actions">
          <p className="section_title">Quick Actions</p>
          <div className="filter_wrapper">
            <button className="secondary_button">
              <span className="material-symbols-outlined">add</span>
              <p>Single Business</p>
            </button>
            <button className="primary_button">
              <span className="material-symbols-outlined">description</span>
              <p>New Batch Business</p>
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
                placeholder="Search businesses..."
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

export default BatchBusiness;
