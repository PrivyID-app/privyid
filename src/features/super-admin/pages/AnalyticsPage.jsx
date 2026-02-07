import React, { useState } from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "../super-admin.css";

const AnalyticsPage = () => {
  const [dateRange, setDateRange] = useState("monthly");

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

  // Top Performing Merchants
  const topMerchants = [
    {
      name: "Apex Holdings",
      verifications: "21,340",
      revenue: "₦4,268,000",
      growth: "+15.2%",
    },
    {
      name: "NexGen Technologies",
      verifications: "18,560",
      revenue: "₦3,710,000",
      growth: "+12.8%",
    },
    {
      name: "Quantum Dynamics",
      verifications: "15,230",
      revenue: "₦3,050,000",
      growth: "+10.5%",
    },
    {
      name: "Ironclad Systems",
      verifications: "12,450",
      revenue: "₦2,450,000",
      growth: "+8.3%",
    },
    {
      name: "TechFlow Solutions",
      verifications: "8,320",
      revenue: "₦1,680,000",
      growth: "+6.7%",
    },
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
              <h3>Revenue Trends</h3>
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="date_range_selector"
              >
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="yearly">Yearly</option>
              </select>
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
                  stroke="#8b5cf6"
                  strokeWidth={2}
                  name="Revenue"
                />
                <Line
                  type="monotone"
                  dataKey="target"
                  stroke="#94a3b8"
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
              <h3>Verification Volume</h3>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={verificationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="KYC" fill="#8b5cf6" name="KYC" />
                <Bar dataKey="KYB" fill="#06b6d4" name="KYB" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Merchant Growth */}
          <div className="chart_container">
            <div className="chart_header">
              <h3>Merchant Growth</h3>
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
                  stroke="#8b5cf6"
                  fill="#8b5cf6"
                  fillOpacity={0.6}
                  name="Merchants"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Top Performing Merchants */}
          <div className="chart_container">
            <div className="chart_header">
              <h3>Top Performing Merchants</h3>
            </div>
            <div className="top_merchants_table">
              <div className="table_header">
                <div className="cell">Merchant</div>
                <div className="cell">Verifications</div>
                <div className="cell">Revenue</div>
                <div className="cell">Growth</div>
              </div>
              {topMerchants.map((merchant, index) => (
                <div key={index} className="table_row">
                  <div className="cell">
                    <div className="merchant_info">
                      <span className="rank">#{index + 1}</span>
                      <span>{merchant.name}</span>
                    </div>
                  </div>
                  <div className="cell">{merchant.verifications}</div>
                  <div className="cell">{merchant.revenue}</div>
                  <div className="cell">
                    <span className="growth_badge">{merchant.growth}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Export Button */}
        <div className="analytics_actions">
          <button className="export_button">
            <span className="material-symbols-outlined">download</span>
            Export Analytics Report
          </button>
        </div>
      </div>
    </>
  );
};

export default AnalyticsPage;
