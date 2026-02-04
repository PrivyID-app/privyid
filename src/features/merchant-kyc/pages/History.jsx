import React from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import VerificationTable from "../../../shared/components/VerificationTable";
import FilterDropdown from "../../../shared/components/FilterDropdown";

const History = () => {
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
      name: "Mike Johnson",
      status: "Rejected",
      batch: "#BATCH1003",
      date: "17 Sep 2024",
      time: "09:15 AM",
    },
    {
      id: "#KYC20240915004",
      type: "National ID",
      name: "Sarah Williams",
      status: "Approved",
      batch: "#BATCH1004",
      date: "17 Sep 2024",
      time: "09:15 AM",
    },
    {
      id: "#KYC20240915005",
      type: "Passport",
      name: "Chris Brown",
      status: "Approved",
      batch: "#BATCH1005",
      date: "17 Sep 2024",
      time: "09:15 AM",
    },
    {
      id: "#KYC20240915006",
      type: "Driver License",
      name: "Emma Wilson",
      status: "Approved",
      batch: "#BATCH1006",
      date: "18 Sep 2024",
      time: "02:30 PM",
    },
    {
      id: "#KYC20240915007",
      type: "National ID",
      name: "Daniel Garcia",
      status: "Pending",
      batch: "#BATCH1007",
      date: "18 Sep 2024",
      time: "03:45 PM",
    },
    {
      id: "#KYC20240915008",
      type: "Passport",
      name: "Olivia Martinez",
      status: "Approved",
      batch: "#BATCH1008",
      date: "19 Sep 2024",
      time: "10:15 AM",
    },
    {
      id: "#KYC20240915009",
      type: "National ID",
      name: "James Lee",
      status: "Rejected",
      batch: "#BATCH1009",
      date: "19 Sep 2024",
      time: "11:30 AM",
    },
    {
      id: "#KYC20240915010",
      type: "Driver License",
      name: "Sophia Taylor",
      status: "Approved",
      batch: "#BATCH1010",
      date: "20 Sep 2024",
      time: "01:45 PM",
    },
  ];

  return (
    <>
      <PageHeader
        title="Verification History"
        description="View and manage past verification requests"
        notificationLink="/merchant-kyc/notifications"
      />

      <div className="content_area">
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

export default History;
