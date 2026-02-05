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
import CheckboxIcon from "../../../assets/images/Checkbox [1.0].svg";
import CheckboxActiveIcon from "../../../assets/images/Checkbox-active [1.0].svg";
import CustomSelect from "../../../shared/components/CustomSelect";

const DashboardOverview = () => {
  const [timeframe, setTimeframe] = useState("this_month");
  const [performanceQuarter, setPerformanceQuarter] = useState("quarter1");

  const timeframeOptions = [
    { label: "This Month", value: "this_month" },
    { label: "Last Month", value: "last_month" },
    { label: "Last 3 Months", value: "last_3_months" },
    { label: "Last 6 Months", value: "last_6_months" },
    { label: "This Year", value: "this_year" },
  ];

  const performanceOptions = [
    { label: "Quarter 1", value: "quarter1" },
    { label: "Quarter 2", value: "quarter2" },
    { label: "Quarter 3", value: "quarter3" },
    { label: "Quarter 4", value: "quarter4" },
    { label: "This Year", value: "this_year" },
  ];
  const lineChartData = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 600 },
    { name: "Apr", value: 800 },
    { name: "May", value: 500 },
    { name: "Jun", value: 900 },
    { name: "Jul", value: 1000 },
  ];

  const barChartData = [
    { name: "Approved", value: 4000 },
    { name: "Pending", value: 2400 },
    { name: "Rejected", value: 400 },
  ];

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
  ];

  return (
    <>
      <PageHeader
        title="Dashboard Overview"
        description="Monitor your verification activity and performance"
        notificationLink="/merchant-kyc/notifications"
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
                <p className="rate_value">+12.5%</p>
              </div>
            </div>
            <div className="card_content">
              <p className="card_value">1,250</p>
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
                <p className="rate_value">+12.5%</p>
              </div>
            </div>
            <div className="card_content">
              <p className="card_value">12,250</p>
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
                <p className="rate_value">+12.5%</p>
              </div>
            </div>
            <div className="card_content">
              <p className="card_value">250</p>
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
                <p className="rate_value">+2.5%</p>
              </div>
            </div>
            <div className="card_content">
              <p className="card_value">50</p>
              <p className="card_title">Total Rejected</p>
            </div>
          </div>
        </div>

        {/* Charts Wrapper */}
        <div className="chart_wrapper">
          <div className="verification_activity">
            <div className="top_area">
              <p className="section_title">Verification Activity</p>
              <CustomSelect
                options={timeframeOptions}
                value={timeframe}
                onSelect={(val) => setTimeframe(val)}
                className="service_selector_custom"
              />
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
              <CustomSelect
                options={performanceOptions}
                value={performanceQuarter}
                onSelect={(val) => setPerformanceQuarter(val)}
                className="service_selector_custom"
              />
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
            <a href="#" className="view_all_link">
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
