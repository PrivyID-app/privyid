import React, { useState, useEffect } from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import AdminDashboardTable from "../components/AdminDashboardTable";
import CustomSelect from "../../../shared/components/CustomSelect";
import AddMerchantModal from "../components/AddMerchantModal";
import { supabase } from "../../../shared/services/supabase";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import BuildingLineIcon from "../../../assets/images/building-line.svg";
import QrScanLineIcon from "../../../assets/images/qr-scan-line.svg";
import CurrencyNairaIcon from "../../../assets/images/tabler_currency-naira.svg";
import TimeLine2Icon from "../../../assets/images/time-line-2.svg";

const DashboardOverview = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activityTimeframe, setActivityTimeframe] = useState("this_month");
  const [performanceTimeframe, setPerformanceTimeframe] = useState("this_year");
  const [recentVerifications, setRecentVerifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalMerchants: "...",
    totalVerifications: "...",
    totalRevenue: "₦0",
    avgResponseTime: "0.0s",
  });

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      // 1. Fetch Total Counts
      const { count: mCount } = await supabase
        .from("merchants")
        .select("*", { count: "exact", head: true });

      const { count: vCount } = await supabase
        .from("verifications")
        .select("*", { count: "exact", head: true });

      setStats((prev) => ({
        ...prev,
        totalMerchants: mCount?.toLocaleString() || "0",
        totalVerifications: vCount?.toLocaleString() || "0",
      }));

      // 2. Fetch Recent Verifications (Last 5)
      const { data: vData, error: vError } = await supabase
        .from("verifications")
        .select(
          `
          id,
          verification_type,
          status,
          created_at,
          merchants (
            business_name
          )
        `,
        )
        .order("created_at", { ascending: false })
        .limit(5);

      if (vError) throw vError;

      const mappedData = vData.map((v) => ({
        id: v.id.substring(0, 8).toUpperCase(),
        type: v.verification_type?.toUpperCase() || "N/A",
        name: v.merchants?.business_name || "Unknown Merchant",
        status: v.status.charAt(0).toUpperCase() + v.status.slice(1),
        verifications: "1", // This row represents 1 verification
        date: new Date(v.created_at).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
        time: new Date(v.created_at).toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      }));

      setRecentVerifications(mappedData);
    } catch (error) {
      console.error("Dashboard Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const activityData = [
    { name: "Mon", verifications: 400 },
    { name: "Tue", verifications: 600 },
    { name: "Wed", verifications: 550 },
    { name: "Thu", verifications: 900 },
    { name: "Fri", verifications: 750 },
    { name: "Sat", verifications: 800 },
    { name: "Sun", verifications: 650 },
  ];

  const performanceData = [
    { name: "Approved", value: 85, fill: "#27AE60" },
    { name: "Pending", value: 10, fill: "#F2C94C" },
    { name: "Rejected", value: 5, fill: "#EB5757" },
  ];

  return (
    <div className="content_wrapper">
      <PageHeader
        title="Dashboard Overview"
        description="Monitor your verification activity and performance"
        notificationIconRoute="/super-admin/notifications"
      />

      <div className="content_area">
        <div className="quick_actions">
          <p className="section_title">Quick Actions</p>

          <div className="filter_wrapper">
            <button
              className="primary_button"
              onClick={() => setIsModalOpen(true)}
            >
              <span className="material-symbols-outlined">add</span>
              <p>Add Merchants</p>
            </button>
          </div>
        </div>

        <AddMerchantModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onRefresh={fetchDashboardData}
        />

        <div className="overview_wrapper">
          {/* Card 1: Total Merchants */}
          <div className="overview_card">
            <div className="card_top_area">
              <div className="overview_card_icon">
                <img src={BuildingLineIcon} alt="Total Merchants" />
              </div>

              <div className="card_rate">
                <span className="material-symbols-outlined up_icon">
                  arrow_upward
                </span>
                <p className="rate_value">+12.5%</p>
              </div>
            </div>

            <div className="card_content">
              <p className="card_value">{stats.totalMerchants}</p>
              <p className="card_title">Total Merchants</p>
            </div>
          </div>

          {/* Card 2: Total Verifications */}
          <div className="overview_card">
            <div className="card_top_area">
              <div className="overview_card_icon">
                <img src={QrScanLineIcon} alt="Total Verifications" />
              </div>

              <div className="card_rate">
                <span className="material-symbols-outlined up_icon">
                  arrow_upward
                </span>
                <p className="rate_value">+12.5%</p>
              </div>
            </div>

            <div className="card_content">
              <p className="card_value">{stats.totalVerifications}</p>
              <p className="card_title">Total Verifications</p>
            </div>
          </div>

          {/* Card 3: Total Revenue MDT */}
          <div className="overview_card">
            <div className="card_top_area">
              <div className="overview_card_icon">
                <img src={CurrencyNairaIcon} alt="Total Revenue MDT" />
              </div>

              <div className="card_rate">
                <span className="material-symbols-outlined up_icon">
                  arrow_upward
                </span>
                <p className="rate_value">+12.5%</p>
              </div>
            </div>

            <div className="card_content">
              <p className="card_value">₦12,550,450</p>
              <p className="card_title">Total Revenue MDT</p>
            </div>
          </div>

          {/* Card 4: Average Response Time */}
          <div className="overview_card">
            <div className="card_top_area">
              <div className="overview_card_icon">
                <img src={TimeLine2Icon} alt="Average Response Time" />
              </div>

              <div className="card_rate">
                <span className="material-symbols-outlined up_icon">
                  arrow_upward
                </span>
                <p className="rate_value">+2.5%</p>
              </div>
            </div>

            <div className="card_content">
              <p className="card_value">{stats.avgResponseTime}</p>
              <p className="card_title">Average Response Time</p>
            </div>
          </div>
        </div>

        <div className="chart_wrapper">
          <div className="verification_activity">
            <div className="top_area">
              <p className="section_title">Verification Activity</p>

              <CustomSelect
                options={[
                  { value: "this_month", label: "This Month" },
                  { value: "last_month", label: "Last Month" },
                  { value: "last_3_months", label: "Last 3 Months" },
                  { value: "last_6_months", label: "Last 6 Months" },
                  { value: "this_year", label: "This Year" },
                ]}
                value={activityTimeframe}
                onSelect={setActivityTimeframe}
                className="service_selector_custom"
                placement="bottom"
              />
            </div>

            <div className="line_chart_area">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={activityData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#E0E0E0"
                  />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#828282", fontSize: 12 }}
                    dy={10}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#828282", fontSize: 12 }}
                  />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="verifications"
                    stroke="#D32F2F"
                    strokeWidth={3}
                    dot={{ r: 4, fill: "#D32F2F", strokeWidth: 2 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="performance_summary">
            <div className="top_area">
              <p className="section_title">Performance Summary</p>

              <CustomSelect
                options={[
                  { value: "quarter1", label: "Quarter 1" },
                  { value: "quarter2", label: "Quarter 2" },
                  { value: "quarter3", label: "Quarter 3" },
                  { value: "quarter4", label: "Quarter 4" },
                  { value: "this_year", label: "This Year" },
                ]}
                value={performanceTimeframe}
                onSelect={setPerformanceTimeframe}
                className="service_selector_custom"
                placement="bottom"
              />
            </div>

            <div className="bar_chart_area">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#E0E0E0"
                  />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#828282", fontSize: 12 }}
                    dy={10}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#828282", fontSize: 12 }}
                  />
                  <Tooltip cursor={{ fill: "transparent" }} />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="recent_verifications">
          <div className="top_area">
            <p className="section_title">Recent Verifications</p>

            <a href="#" className="view_all_link">
              <p>View All</p>
              <span className="material-symbols-outlined arrow_icon">
                chevron_right
              </span>
            </a>
          </div>

          {loading ? (
            <div style={{ padding: "2rem", textAlign: "center" }}>
              Loading activity...
            </div>
          ) : (
            <AdminDashboardTable
              data={recentVerifications}
              idLabel="Verification No."
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
