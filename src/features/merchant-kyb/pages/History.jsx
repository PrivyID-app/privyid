import React from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import VerificationTable from "../../../shared/components/VerificationTable";

const History = () => {
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
      name: "Tech Solutions",
      status: "Pending",
      batch: "#BATCH2002",
      date: "16 Sep 2024",
      time: "11:45 AM",
    },
    {
      id: "#KYB20240915003",
      type: "Business License",
      name: "Creative Studio",
      status: "Approved",
      batch: "#BATCH2003",
      date: "17 Sep 2024",
      time: "02:15 PM",
    },
    {
      id: "#KYB20240915004",
      type: "Tax ID",
      name: "InnoTech Ltd",
      status: "Rejected",
      batch: "#BATCH2004",
      date: "17 Sep 2024",
      time: "04:30 PM",
    },
    {
      id: "#KYB20240915005",
      type: "Business License",
      name: "Alpha Retail",
      status: "Approved",
      batch: "#BATCH2005",
      date: "18 Sep 2024",
      time: "09:00 AM",
    },
    {
      id: "#KYB20240915006",
      type: "Tax ID",
      name: "Swift Logistics",
      status: "Pending",
      batch: "#BATCH2006",
      date: "18 Sep 2024",
      time: "11:15 AM",
    },
    {
      id: "#KYB20240915007",
      type: "Business License",
      name: "Prime Real Estate",
      status: "Approved",
      batch: "#BATCH2007",
      date: "19 Sep 2024",
      time: "01:45 PM",
    },
    {
      id: "#KYB20240915008",
      type: "Tax ID",
      name: "Oceanic Exports",
      status: "Approved",
      batch: "#BATCH2008",
      date: "19 Sep 2024",
      time: "03:30 PM",
    },
    {
      id: "#KYB20240915009",
      type: "Business License",
      name: "Golden Holdings",
      status: "Rejected",
      batch: "#BATCH2009",
      date: "20 Sep 2024",
      time: "10:00 AM",
    },
    {
      id: "#KYB20240915010",
      type: "Tax ID",
      name: "Sky High Group",
      status: "Approved",
      batch: "#BATCH2010",
      date: "20 Sep 2024",
      time: "12:15 PM",
    },
  ];

  return (
    <>
      <PageHeader
        title="Business Verification History"
        description="View and manage past business verification requests"
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
