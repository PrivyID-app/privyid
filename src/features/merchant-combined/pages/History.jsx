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
    {
      id: "#COMB20240915003",
      type: "National ID",
      name: "Sarah Williams",
      status: "Approved",
      batch: "#BATCH3003",
      date: "17 Sep 2024",
      time: "09:15 AM",
    },
    {
      id: "#COMB20240915004",
      type: "Tax ID",
      name: "InnoTech Ltd",
      status: "Rejected",
      batch: "#BATCH3004",
      date: "17 Sep 2024",
      time: "04:30 PM",
    },
    {
      id: "#COMB20240915005",
      type: "Passport",
      name: "Chris Brown",
      status: "Approved",
      batch: "#BATCH3005",
      date: "17 Sep 2024",
      time: "09:15 AM",
    },
    {
      id: "#COMB20240915006",
      type: "Business License",
      name: "Alpha Retail",
      status: "Approved",
      batch: "#BATCH3006",
      date: "18 Sep 2024",
      time: "09:00 AM",
    },
    {
      id: "#COMB20240915007",
      type: "Driver License",
      name: "Emma Wilson",
      status: "Approved",
      batch: "#BATCH3007",
      date: "18 Sep 2024",
      time: "02:30 PM",
    },
    {
      id: "#COMB20240915008",
      type: "Tax ID",
      name: "Swift Logistics",
      status: "Pending",
      batch: "#BATCH3008",
      date: "18 Sep 2024",
      time: "11:15 AM",
    },
    {
      id: "#COMB20240915009",
      type: "Passport",
      name: "Olivia Martinez",
      status: "Approved",
      batch: "#BATCH3009",
      date: "19 Sep 2024",
      time: "10:15 AM",
    },
    {
      id: "#COMB20240915010",
      type: "Business License",
      name: "Prime Real Estate",
      status: "Approved",
      batch: "#BATCH3010",
      date: "19 Sep 2024",
      time: "01:45 PM",
    },
  ];

  return (
    <>
      <PageHeader
        title="Combined Verification History"
        description="View and manage all past verification requests"
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
    </>
  );
};

export default History;
