import React, { useState, useEffect } from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import AdminVerificationsTable from "../components/AdminVerificationsTable";
import { supabase } from "../../../shared/services/supabase";
import BuildingLineIcon from "../../../assets/images/building-line.svg";
import QrScanLineIcon from "../../../assets/images/qr-scan-line.svg";
import CurrencyNairaIcon from "../../../assets/images/tabler_currency-naira.svg";
import TimeLine2Icon from "../../../assets/images/time-line-2.svg";
import "../super-admin.css";

const VerificationsPage = () => {
  const [stats, setStats] = useState({
    totalMerchants: "...",
    totalVerifications: "...",
    totalRevenue: "₦0",
    avgResponseTime: "0.0s",
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const { count: mCount } = await supabase
        .from("merchants")
        .select("*", { count: "exact", head: true });

      const { data: vData, error: vError } = await supabase
        .from("verifications")
        .select("status");

      if (vError) throw vError;

      const vCount = vData?.length || 0;
      const totalRevenue = vCount * 500; // Assuming 500 per verification

      setStats((prev) => ({
        ...prev,
        totalMerchants: mCount?.toLocaleString() || "0",
        totalVerifications: vCount.toLocaleString(),
        totalRevenue: `₦${totalRevenue.toLocaleString()}`,
        avgResponseTime: "0.2s",
      }));
    } catch (error) {
      console.error("Error fetching verification stats:", error);
    }
  };

  const overviewCards = [
    {
      icon: BuildingLineIcon,
      value: stats.totalMerchants,
      title: "Total Merchants",
      rate: "Live",
      trend: "up",
    },
    {
      icon: QrScanLineIcon,
      value: stats.totalVerifications,
      title: "Total Verifications",
      rate: "+0.0%",
      trend: "up",
    },
    {
      icon: CurrencyNairaIcon,
      value: stats.totalRevenue,
      title: "Total Revenue MDT",
      rate: "+0.0%",
      trend: "up",
    },
    {
      icon: TimeLine2Icon,
      value: stats.avgResponseTime,
      title: "Average Response Time",
      rate: "+0.0%",
      trend: "up",
    },
  ];

  return (
    <>
      <PageHeader
        title="Verifications"
        description="Review and manage global verification requests"
        notificationIconRoute="/super-admin/notifications"
      />

      <div className="content_area">
        <div className="overview_wrapper">
          {overviewCards.map((card, index) => (
            <div key={index} className="overview_card">
              <div className="card_top_area">
                <div className="overview_card_icon">
                  <img
                    src={card.icon}
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

        <div className="recent_verifications">
          <div className="top_area">
            <p className="section_title">Recent Verifications</p>

            {/* <a href="#" className="view_all_link">
              <p>View All</p>
              <span className="material-symbols-outlined arrow_icon">
                chevron_right
              </span>
            </a> */}

            <button
              className="primary_button"
              onClick={() => setIsModalOpen(true)}
            >
              <span className="material-symbols-outlined">add</span>
              <p>Add Merchant</p>
            </button>
          </div>

          <AdminVerificationsTable />
        </div>
      </div>
    </>
  );
};

export default VerificationsPage;
