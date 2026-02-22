import React, { useState, useEffect } from "react";
import { supabase } from "../../../shared/services/supabase";
import { useNavigate, useParams } from "react-router-dom";
import PageHeader from "../../../components/PageHeader/PageHeader";
import CustomSelect from "../../../shared/components/CustomSelect";
import VerificationTable from "../../../shared/components/VerificationTable";
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

import {
  aggregateMonthlyData,
  calculateStats,
} from "../../../shared/utils/dashboardUtils";

import FileTextIcon from "../../../assets/images/file-text-line.svg";
import FileCheckIcon from "../../../assets/images/file-check-fill.svg";
import TimeLineIcon from "../../../assets/images/time-line.svg";
import ErrorWarningIcon from "../../../assets/images/error-warning-line.svg";

import "../../../shared/styles/extra-pages.css";

const DashboardOverview = () => {
  const navigate = useNavigate();
  const { merchantId: urlMerchantId } = useParams();
  const [timeframe, setTimeframe] = useState("this_month");
  const [performanceQuarter, setPerformanceQuarter] = useState("this_year");
  const [loading, setLoading] = useState(true);
  const [recentVerifications, setRecentVerifications] = useState([]);
  const [lineChartData, setLineChartData] = useState([]);
  const [merchantId, setMerchantId] = useState(null);
  const [stats, setStats] = useState({
    total: 0,
    approved: 0,
    pending: 0,
    rejected: 0,
  });

  const [viewingAsMerchant] = useState(
    localStorage.getItem("admin_viewing_merchant_id"),
  );

  useEffect(() => {
    fetchDashboardData();
  }, [viewingAsMerchant, urlMerchantId]);

  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      const mId = urlMerchantId || viewingAsMerchant || session?.user?.id;
      if (!mId) return;

      setMerchantId(mId);

      // 1. Fetch All Verifications for Stats and Chart (Combined)
      const { data: vAll, error: sError } = await supabase
        .from("verifications")
        .select("*")
        .eq("merchant_id", mId);

      if (sError) throw sError;

      setStats(calculateStats(vAll));
      setLineChartData(aggregateMonthlyData(vAll));
      console.log(
        `[Combined Dashboard] Fetched ${vAll?.length || 0} total records for merchant:`,
        mId,
      );

      // 2. Fetch Recent Verifications
      const { data: vRecent, error: vError } = await supabase
        .from("verifications")
        .select("*")
        .eq("merchant_id", mId)
        .order("created_at", { ascending: false })
        .limit(10);

      if (vError) throw vError;

      const mappedData = (vRecent || []).map((v) => ({
        id: v.id.substring(0, 8).toUpperCase(),
        type:
          v.metadata?.id_type || v.verification_type?.toUpperCase() || "N/A",
        name:
          v.metadata?.full_name ||
          v.customer_name ||
          v.user_identifier ||
          "Unknown",
        status: v.status.charAt(0).toUpperCase() + v.status.slice(1),
        batch:
          v.metadata?.batch_no || (v.source === "batch" ? "#BATCH" : "#SINGLE"),
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
      console.error("Combined Dashboard Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleReturnToAdmin = () => {
    localStorage.removeItem("admin_viewing_merchant_id");
    navigate("/super-admin");
  };

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

  const barChartData = [
    { name: "Approved", value: stats.approved },
    { name: "Pending", value: stats.pending },
    { name: "Rejected", value: stats.rejected },
  ];

  return (
    <>
      <PageHeader
        title="Combined Dashboard Overview"
        description="Monitor both KYC and KYB verification activity"
        notificationIconRoute={
          merchantId ? `/m/${merchantId}/combined/notifications` : null
        }
      />

      <div className="content_area">
        {viewingAsMerchant && (
          <div className="admin_view_banner">
            <div className="banner_info">
              <span className="material-symbols-outlined">visibility</span>
              <p>
                Viewing Dashboard as Merchant ID:{" "}
                <strong>{viewingAsMerchant}</strong>
              </p>
            </div>
            <button
              className="primary_button btn-sm"
              onClick={handleReturnToAdmin}
            >
              Return to Admin Panel
            </button>
          </div>
        )}

        {/* Quick Actions */}
        <div className="quick_actions">
          <p className="section_title">Quick Actions</p>

          <div className="filter_wrapper">
            <button
              className="secondary_button"
              onClick={() =>
                navigate(`/m/${merchantId}/combined/single-verification`)
              }
            >
              <span className="material-symbols-outlined">add</span>
              <p>Single Verification</p>
            </button>

            <button
              className="secondary_button"
              onClick={() =>
                navigate(`/m/${merchantId}/combined/single-business`)
              }
            >
              <span className="material-symbols-outlined">add</span>
              <p>Single Business</p>
            </button>

            <button
              className="secondary_button"
              onClick={() => navigate(`/m/${merchantId}/combined/api`)}
            >
              <span className="material-symbols-outlined">code</span>
              <p>API Integration</p>
            </button>

            <button
              className="primary_button"
              onClick={() =>
                navigate(`/m/${merchantId}/combined/batch-verification`)
              }
            >
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
              <p className="card_value">{stats.total.toLocaleString()}</p>
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
              <p className="card_value">{stats.approved.toLocaleString()}</p>
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
              <p className="card_value">{stats.pending.toLocaleString()}</p>
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
              <p className="card_value">{stats.rejected.toLocaleString()}</p>
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
            <a href="/merchant-combined/history" className="view_all_link">
              <p>View All</p>
              <span className="material-symbols-outlined arrow_icon">
                chevron_right
              </span>
            </a>
          </div>

          {loading ? (
            <div className="no_data_message">Loading verifications...</div>
          ) : recentVerifications.length > 0 ? (
            <VerificationTable data={recentVerifications} />
          ) : (
            <div className="no_data_message">
              No recent verifications found.
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DashboardOverview;
