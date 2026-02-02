import React, { useState } from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import VerificationTable from "../../../shared/components/VerificationTable";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Icons
import FileTextIcon from "../../../assets/images/file-text-line.svg";
import FileCheckIcon from "../../../assets/images/file-check-fill.svg";
import TimeLineIcon from "../../../assets/images/time-line.svg";
import ErrorWarningIcon from "../../../assets/images/error-warning-line.svg";

const DashboardOverview = () => {
  const lineChartData = [
    { name: "Jan", value: 500 },
    { name: "Feb", value: 420 },
    { name: "Mar", value: 800 },
    { name: "Apr", value: 950 },
    { name: "May", value: 700 },
    { name: "Jun", value: 1050 },
    { name: "Jul", value: 1200 },
  ];

  const barChartData = [
    { name: "Approved", value: 5000 },
    { name: "Pending", value: 3200 },
    { name: "Rejected", value: 550 },
  ];

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
  ];

  return (
    <>
      <PageHeader
        title="Combined Dashboard Overview"
        description="Monitor both KYC and KYB verification activity"
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
              <span className="material-symbols-outlined">docs</span>
              <p>Batch Verification</p>
            </button>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="overview_wrapper">
          <div className="overview_card">
            <div className="card_top_area">
              <div className="overview_card_icon">
                <img src={FileTextIcon} alt="Icon" />
              </div>
              <div className="card_rate">
                <span className="material-symbols-outlined up_icon">
                  arrow_upward
                </span>
                <p className="rate_value">+15.5%</p>
              </div>
            </div>
            <div className="card_content">
              <p className="card_value">2,100</p>
              <p className="card_title">Total Verifications</p>
            </div>
          </div>

          <div className="overview_card">
            <div className="card_top_area">
              <div className="overview_card_icon">
                <img src={FileCheckIcon} alt="Icon" />
              </div>
              <div className="card_rate">
                <span className="material-symbols-outlined up_icon">
                  arrow_upward
                </span>
                <p className="rate_value">+12.2%</p>
              </div>
            </div>
            <div className="card_content">
              <p className="card_value">19,450</p>
              <p className="card_title">Verified</p>
            </div>
          </div>

          <div className="overview_card">
            <div className="card_top_area">
              <div className="overview_card_icon">
                <img src={TimeLineIcon} alt="Icon" />
              </div>
              <div className="card_rate">
                <span className="material-symbols-outlined up_icon">
                  arrow_upward
                </span>
                <p className="rate_value">+11.0%</p>
              </div>
            </div>
            <div className="card_content">
              <p className="card_value">345</p>
              <p className="card_title">Total Pending</p>
            </div>
          </div>

          <div className="overview_card">
            <div className="card_top_area">
              <div className="overview_card_icon">
                <img src={ErrorWarningIcon} alt="Icon" />
              </div>
              <div className="card_rate">
                <span className="material-symbols-outlined up_icon">
                  arrow_upward
                </span>
                <p className="rate_value">+3.5%</p>
              </div>
            </div>
            <div className="card_content">
              <p className="card_value">85</p>
              <p className="card_title">Total Rejected</p>
            </div>
          </div>
        </div>

        {/* Charts Wrapper */}
        <div className="chart_wrapper">
          <div className="verification_activity">
            <div className="top_area">
              <p className="section_title">Verification Activity</p>
              <select
                name="timeframe_dropdown"
                id="timeframe_dropdown"
                className="timeframe_dropdown styled_select"
              >
                <option value="this_month">This Month</option>
                <option value="last_month">Last Month</option>
                <option value="last_3_months">Last 3 Months</option>
                <option value="last_6_months">Last 6 Months</option>
                <option value="this_year">This Year</option>
              </select>
            </div>

            <div className="line_chart_area">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineChartData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#5AC4AF"
                    strokeWidth={3}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="performance_summary">
            <div className="top_area">
              <p className="section_title">Performance Summary</p>
              <select
                name="performance_dropdown"
                id="performance_dropdown"
                className="filter_options styled_select"
              >
                <option value="quarter1">Quarter 1</option>
                <option value="quarter2">Quarter 2</option>
                <option value="quarter3">Quarter 3</option>
                <option value="quarter4">Quarter 4</option>
                <option value="this_year">This Year</option>
              </select>
            </div>

            <div className="bar_chart_area">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barChartData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip cursor={{ fill: "transparent" }} />
                  <Bar
                    dataKey="value"
                    fill="#1B263C"
                    radius={[5, 5, 0, 0]}
                    barSize={40}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
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
            <a href="/merchant-combined/history" className="view_all_link">
              <p>View All</p>
              <span className="material-symbols-outlined arrow_icon">
                chevron_right
              </span>
            </a>
          </div>

          <VerificationTable data={verifications} />
        </div>
      </div>
    </>
  );
};

export default DashboardOverview;
