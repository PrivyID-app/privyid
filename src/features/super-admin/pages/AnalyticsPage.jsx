import React, { useState, useEffect } from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import { supabase } from "../../../shared/services/supabase";
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
import { formatRevenue } from "../../../shared/utils/dashboardUtils";
import "../super-admin.css";

const AnalyticsPage = () => {
  const [dateRange, setDateRange] = useState("monthly");
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalRevenue: "₦0",
    activeMerchants: "0",
    successRate: "0.0%",
    uptime: "99.9%",
  });

  const [chartsData, setChartsData] = useState({
    revenue: [],
    volume: [],
    merchantGrowth: [],
    statusBreakdown: [],
  });

  useEffect(() => {
    fetchAnalyticsData();
  }, []);

  const fetchAnalyticsData = async () => {
    setLoading(true);
    try {
      // 1. Fetch Merchants for Growth and Active count
      const { data: merchants, error: mError } = await supabase
        .from("merchants")
        .select("created_at")
        .order("created_at", { ascending: true });

      if (mError) throw mError;

      // 2. Fetch Verifications for all other metrics
      const { data: verifications, error: vError } = await supabase
        .from("verifications")
        .select("status, created_at, verification_type");

      if (vError) throw vError;

      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const currentMonthIndex = new Date().getMonth();
      const last12Months = [];
      for (let i = 8; i >= 0; i--) {
        const d = new Date();
        d.setMonth(currentMonthIndex - i);
        last12Months.push(months[d.getMonth()]);
      }

      // Aggregate Revenue & Volume
      const revAndVol = last12Months.map((m) => ({
        month: m,
        revenue: 0,
        target: 2000000,
        KYC: 0,
        KYB: 0,
      }));

      let totalRev = 0;
      verifications.forEach((v) => {
        const date = new Date(v.created_at);
        const mName = months[date.getMonth()];
        const item = revAndVol.find((i) => i.month === mName);

        if (item) {
          // Assume ₦500 per verification for revenue calculation demo
          const price = 500;
          item.revenue += price;
          totalRev += price;

          if (v.verification_type?.toLowerCase() === "kyb") {
            item.KYB += 1;
          } else {
            item.KYC += 1;
          }
        }
      });

      // Aggregate Merchant Growth
      const growthData = last12Months.map((m) => ({ month: m, merchants: 0 }));
      let cumulativeMerchants = 0;
      // We need to account for merchants before the last 9 months too
      const startOfWindow = new Date();
      startOfWindow.setMonth(currentMonthIndex - 8);
      startOfWindow.setDate(1);

      cumulativeMerchants = merchants.filter(
        (m) => new Date(m.created_at) < startOfWindow,
      ).length;

      merchants
        .filter((m) => new Date(m.created_at) >= startOfWindow)
        .forEach((m) => {
          const date = new Date(m.created_at);
          const mName = months[date.getMonth()];
          const item = growthData.find((i) => i.month === mName);
          if (item) item.merchants += 1;
        });

      let runningTotal = cumulativeMerchants;
      growthData.forEach((g) => {
        runningTotal += g.merchants;
        g.merchants = runningTotal;
      });

      // Status Breakdown
      const statusData = [
        {
          name: "Approved",
          value: verifications.filter((v) => v.status === "approved").length,
          color: "#22c55e",
        },
        {
          name: "Pending",
          value: verifications.filter((v) =>
            ["pending", "initiated"].includes(v.status),
          ).length,
          color: "#f59e0b",
        },
        {
          name: "Rejected",
          value: verifications.filter((v) =>
            ["rejected", "failed"].includes(v.status),
          ).length,
          color: "#ef4444",
        },
      ];

      const successRate =
        verifications.length > 0
          ? (
              (verifications.filter((v) => v.status === "approved").length /
                verifications.length) *
              100
            ).toFixed(1)
          : "0.0";

      setStats({
        totalRevenue: `₦${totalRev.toLocaleString()}`,
        activeMerchants: merchants.length.toString(),
        successRate: `${successRate}%`,
        uptime: "99.9%",
      });

      setChartsData({
        revenue: revAndVol,
        volume: revAndVol,
        merchantGrowth: growthData,
        statusBreakdown: statusData,
      });
    } catch (error) {
      console.error("Error fetching analytics data:", error);
    } finally {
      setLoading(false);
    }
  };

  const dateRangeOptions = [
    { value: "monthly", label: "Monthly" },
    { value: "quarterly", label: "Quarterly" },
  ];

  const formatRevenue = (value) => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(0)}m`;
    } else if (value >= 1000) {
      return `${(value / 1000).toFixed(0)}k`;
    }
    return value;
  };

  // Status data comes from chartsData.statusBreakdown

  const metricsCards = [
    {
      icon: "tabler_currency-naira.svg",
      value: stats.totalRevenue,
      title: "Total Revenue",
      rate: "+0.0%",
      trend: "up",
    },
    {
      icon: "building-line.svg",
      value: stats.activeMerchants,
      title: "Active Merchants",
      rate: "Live",
      trend: "up",
    },
    {
      icon: "qr-scan-line.svg",
      value: stats.successRate,
      title: "Success Rate",
      rate: "+0.0%",
      trend: "up",
    },
    {
      icon: "time-line-2.svg",
      value: stats.uptime,
      title: "API Uptime",
      rate: "+0.0%",
      trend: "up",
    },
  ];

  return (
    <>
      <PageHeader
        title="Analytics"
        description="Detailed insights into platform usage"
        notificationIconRoute="/super-admin/notifications"
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
              <LineChart data={chartsData.revenue}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis tickFormatter={formatRevenue} />
                <Tooltip
                  formatter={(value, name) => [formatRevenue(value), name]}
                />
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

              <CustomSelect
                options={dateRangeOptions}
                value={dateRange}
                onSelect={setDateRange}
                className="date_range_selector"
              />
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartsData.volume}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="KYC"
                  fill="var(--state-feature-base)"
                  name="KYC"
                />
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
              <AreaChart data={chartsData.merchantGrowth}>
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
                  data={chartsData.statusBreakdown}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {chartsData.statusBreakdown.map((entry, index) => (
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
        <div className="analytics_actions"></div>
      </div>
    </>
  );
};

export default AnalyticsPage;
