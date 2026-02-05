import React from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import VerificationTable from "../../../shared/components/VerificationTable";

// Icons
import FileTextIcon from "../../../assets/images/file-text-line.svg";
import FileCheckIcon from "../../../assets/images/file-check-fill.svg";
import TimeLineIcon from "../../../assets/images/time-line.svg";
import ErrorWarningIcon from "../../../assets/images/error-warning-line.svg";

const TokensPage = () => {
  // Mock Data for Table
  const tokens = [
    {
      id: "tok_abc123def456",
      type: "Passport",
      name: "John Doe",
      status: "Approved",
      batch: "#BATCH1001",
      date: "15 Sep 2024",
      time: "10:30 AM",
    },
    {
      id: "tok_xyz789ghi012",
      type: "Driver License",
      name: "Jane Smith",
      status: "Pending",
      batch: "#BATCH1002",
      date: "16 Sep 2024",
      time: "11:45 AM",
    },
    {
      id: "tok_uvw345jkl678",
      type: "National ID",
      name: "Mike Johnson",
      status: "Rejected",
      batch: "#BATCH1003",
      date: "17 Sep 2024",
      time: "09:15 AM",
    },
    {
      id: "tok_rst901mno345",
      type: "Tax ID",
      name: "Sarah Williams",
      status: "Approved",
      batch: "#BATCH1004",
      date: "18 Sep 2024",
      time: "02:20 PM",
    },
    {
      id: "tok_opq678stu901",
      type: "Passport",
      name: "Chris Brown",
      status: "Approved",
      batch: "#BATCH1005",
      date: "19 Sep 2024",
      time: "04:10 PM",
    },
    {
      id: "tok_def234ghi567",
      type: "Driver License",
      name: "Emily Davis",
      status: "Approved",
      batch: "#BATCH1006",
      date: "20 Sep 2024",
      time: "09:00 AM",
    },
    {
      id: "tok_jkl567mno890",
      type: "National ID",
      name: "David Wilson",
      status: "Pending",
      batch: "#BATCH1007",
      date: "20 Sep 2024",
      time: "10:30 AM",
    },
    {
      id: "tok_pqr890stu123",
      type: "Passport",
      name: "Sophia Martinez",
      status: "Rejected",
      batch: "#BATCH1008",
      date: "21 Sep 2024",
      time: "11:15 AM",
    },
    {
      id: "tok_vwx123yz456",
      type: "Tax ID",
      name: "James Anderson",
      status: "Approved",
      batch: "#BATCH1009",
      date: "21 Sep 2024",
      time: "01:45 PM",
    },
    {
      id: "tok_abc789def012",
      type: "Driver License",
      name: "Olivia Thomas",
      status: "Approved",
      batch: "#BATCH1010",
      date: "22 Sep 2024",
      time: "03:20 PM",
    },
  ];

  return (
    <div className="content_wrapper">
      <PageHeader
        title="Token Management"
        description="Manage your usage tokens and billing"
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

          <div className="overview_wrapper">
            {/* Card 1: Total Tokens Issued */}
            <div className="overview_card">
              <div className="card_top_area">
                <div className="overview_card_icon">
                  <img src={FileTextIcon} alt="Total Tokens Issued" />
                </div>
                <div className="card_rate">
                  <span className="material-symbols-outlined up_icon">
                    arrow_upward
                  </span>
                  <p className="rate_value">+12.5%</p>
                </div>
              </div>
              <div className="card_content">
                <p className="card_value">1,250</p>
                <p className="card_title">Total Tokens Issued</p>
              </div>
            </div>

            {/* Card 2: Active Tokens */}
            <div className="overview_card">
              <div className="card_top_area">
                <div className="overview_card_icon">
                  <img src={FileCheckIcon} alt="Active Tokens" />
                </div>
                <div className="card_rate">
                  <span className="material-symbols-outlined up_icon">
                    arrow_upward
                  </span>
                  <p className="rate_value">+10.2%</p>
                </div>
              </div>
              <div className="card_content">
                <p className="card_value">950</p>
                <p className="card_title">Active Tokens</p>
              </div>
            </div>

            {/* Card 3: Pending Tokens */}
            <div className="overview_card">
              <div className="card_top_area">
                <div className="overview_card_icon">
                  <img src={TimeLineIcon} alt="Pending Tokens" />
                </div>
                <div className="card_rate">
                  <span className="material-symbols-outlined up_icon">
                    arrow_upward
                  </span>
                  <p className="rate_value">+5.4%</p>
                </div>
              </div>
              <div className="card_content">
                <p className="card_value">150</p>
                <p className="card_title">Pending Tokens</p>
              </div>
            </div>

            {/* Card 4: Revoked Tokens */}
            <div className="overview_card">
              <div className="card_top_area">
                <div className="overview_card_icon">
                  <img src={ErrorWarningIcon} alt="Revoked Tokens" />
                </div>
                <div
                  className="card_rate"
                  style={{ color: "var(--state-error-base)" }}
                >
                  <span
                    className="material-symbols-outlined up_icon"
                    style={{ transform: "rotate(180deg)" }}
                  >
                    arrow_upward
                  </span>
                  <p
                    className="rate_value"
                    style={{ color: "var(--state-error-base)" }}
                  >
                    +1.2%
                  </p>
                </div>
              </div>
              <div className="card_content">
                <p className="card_value">50</p>
                <p className="card_title">Revoked Tokens</p>
              </div>
            </div>
          </div>

          <VerificationTable data={tokens} idLabel="Token No." />
        </div>
      </div>
    </div>
  );
};

export default TokensPage;
