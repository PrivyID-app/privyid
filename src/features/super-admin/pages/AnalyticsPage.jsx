import React, { useState } from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import TopPerformingMerchantsTable from "../components/TopPerformingMerchantsTable";
import CustomSelect from "../../../shared/components/CustomSelect";
import "../super-admin.css";

const AnalyticsPage = () => {
  const [dateRange, setDateRange] = useState("monthly");

  const dateRangeOptions = [
    { value: "monthly", label: "Monthly" },
    { value: "quarterly", label: "Quarterly" },
    { value: "yearly", label: "Yearly" },
  ];

  // Revenue Trends Data
  const revenueData = [
    { month: "Jan", revenue: 2400000, target: 2000000 },
    { month: "Feb", revenue: 3200000, target: 2500000 },
    { month: "Mar", revenue: 2800000, target: 2700000 },
    { month: "Apr", revenue: 4100000, target: 3000000 },
    { month: "May", revenue: 3900000, target: 3200000 },
    { month: "Jun", revenue: 4500000, target: 3500000 },
    { month: "Jul", revenue: 5200000, target: 4000000 },
    { month: "Aug", revenue: 4800000, target: 4200000 },
    { month: "Sep", revenue: 5600000, target: 4500000 },
  ];

  // Verification Volume Data
  const verificationData = [
    { month: "Jan", KYC: 4000, KYB: 2400 },
    { month: "Feb", KYC: 3000, KYB: 1398 },
    { month: "Mar", KYC: 2000, KYB: 9800 },
    { month: "Apr", KYC: 2780, KYB: 3908 },
    { month: "May", KYC: 1890, KYB: 4800 },
    { month: "Jun", KYC: 2390, KYB: 3800 },
    { month: "Jul", KYC: 3490, KYB: 4300 },
    { month: "Aug", KYC: 4200, KYB: 5100 },
    { month: "Sep", KYC: 4800, KYB: 5600 },
  ];

  // Merchant Growth Data
  const merchantGrowthData = [
    { month: "Jan", merchants: 120 },
    { month: "Feb", merchants: 180 },
    { month: "Mar", merchants: 250 },
    { month: "Apr", merchants: 340 },
    { month: "May", merchants: 450 },
    { month: "Jun", merchants: 580 },
    { month: "Jul", merchants: 720 },
    { month: "Aug", merchants: 890 },
    { month: "Sep", merchants: 1050 },
  ];

  // Verification Status Breakdown Data
  const verificationStatusData = [
    { name: "Approved", value: 7000, color: "#22c55e" }, // green-500
    { name: "Pending", value: 2000, color: "#f59e0b" }, // amber-500
    { name: "Rejected", value: 1000, color: "#ef4444" }, // red-500
  ];

  const metricsCards = [
    {
      icon: "tabler_currency-naira.svg",
      value: "₦45,280,450",
      title: "Total Revenue",
      rate: "+18.5%",
      trend: "up",
    },
    {
      icon: "building-line.svg",
      value: "1,250",
      title: "Active Merchants",
      rate: "+12.5%",
      trend: "up",
    },
    {
      icon: "qr-scan-line.svg",
      value: "96.8%",
      title: "Success Rate",
      rate: "+2.3%",
      trend: "up",
    },
    {
      icon: "time-line-2.svg",
      value: "99.9%",
      title: "API Uptime",
      rate: "+0.1%",
      trend: "up",
    },
  ];

  return (
    <>
      <PageHeader
        title="Analytics"
        description="Detailed insights into platform usage"
      />

      <div className="content_area">
        {/* Metrics Cards */}
        <div className="overview_wrapper">
          {metricsCards.map((card, index) => (
            <div key={index} className="overview_card">
              <div className="card_top_area">
                <div className="overview_card_icon">
                  <img
                    src={`/src/assets/images/${card.icon}`}
                    alt={`${card.title} Icon`}
                  />
                </div>
                <div className="card_rate">
                  <span
                    className={`material-symbols-outlined ${card.trend}_icon`}
                  >
                    {card.trend === "up" ? "arrow_upward" : "arrow_downward"}
                  </span>
                  <p className="rate_value">{card.rate}</p>
                </div>
              </div>
              <div className="card_content">
                <p className="card_value">{card.value}</p>
                <p className="card_title">{card.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="analytics_charts">
          {/* Revenue Trends */}
          <div className="chart_container">
            <div className="chart_header">
              <p>Revenue Trends</p>
              <CustomSelect
                options={dateRangeOptions}
                value={dateRange}
                onSelect={setDateRange}
                className="date_range_selector"
              />
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="var(--state-feature-base)"
                  strokeWidth={2}
                  name="Revenue"
                />
                <Line
                  type="monotone"
                  dataKey="target"
                  stroke="var(--text-soft-400)"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="Target"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Verification Volume */}
          <div className="chart_container">
            <div className="chart_header">
              <p>Verification Volume</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={verificationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="KYC" fill="var(--state-feature-base)" name="KYC" />
                <Bar dataKey="KYB" fill="var(--state-stable-base)" name="KYB" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Merchant Growth */}
          <div className="chart_container">
            <div className="chart_header">
              <p>Merchant Growth</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={merchantGrowthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="merchants"
                  stroke="var(--state-feature-base)"
                  fill="var(--state-feature-base)"
                  fillOpacity={0.6}
                  name="Merchants"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Verification Status Breakdown */}
          <div className="chart_container">
            <div className="chart_header">
              <p>Verification Status Breakdown</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={verificationStatusData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {verificationStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Top Performing Merchants Table */}
          <TopPerformingMerchantsTable />
        </div>

        {/* Export Button */}
        <div className="analytics_actions">
        </div>
      </div>
    </>
  );
};

export default AnalyticsPage;
