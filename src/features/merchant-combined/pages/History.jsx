import React from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import VerificationTable from "../../../shared/components/VerificationTable";

const History = () => {
  const verifications = [
    {
      id: "#COMB20240915001",
      type: "Passport",
      name: "John Doe",
      status: "Approved",
      batch: "#BATCH3001",
      date: "15 Sep 2024",
      time: "10:30 AM",
    },
    {
      id: "#COMB20240915002",
      type: "Business License",
      name: "Global Corp",
      status: "Pending",
      batch: "#BATCH3002",
      date: "16 Sep 2024",
      time: "11:45 AM",
    },
  ];

  return (
    <div className="content_area">
      <PageHeader
        title="Combined Verification History"
        description="View and manage all past verification requests"
      />

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

          <div className="button_wrapper">
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
  );
};

export default History;
