import React from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import AdminMerchantsTable from "../components/AdminMerchantsTable";
import "../super-admin.css";

const MerchantsPage = () => {
  const overviewCards = [
    {
      icon: "building-line.svg",
      value: "1,250",
      title: "Total Merchants",
      rate: "+12.5%",
      trend: "up",
    },
    {
      icon: "qr-scan-line.svg",
      value: "12,250",
      title: "Total Verifications",
      rate: "+12.5%",
      trend: "up",
    },
    {
      icon: "tabler_currency-naira.svg",
      value: "₦12,550,450",
      title: "Total Revenue",
      rate: "+12.5%",
      trend: "up",
    },
    {
      icon: "time-line-2.svg",
      value: "98.5%",
      title: "Active Merchants",
      rate: "+2.5%",
      trend: "up",
    },
  ];

  return (
    <>
      <PageHeader
        title="Merchants"
        description="Manage registered merchants and their accounts"
      />

      <div className="content_area">
        <div className="overview_wrapper">
          {overviewCards.map((card, index) => (
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

        <div className="recent_verifications">
          <div className="top_area">
            <p className="section_title">All Merchants</p>

            <div className="filter_actions">
              <button className="secondary_button">
                <span className="material-symbols-outlined">filter_list</span>
                Filter Records
              </button>
              <button className="primary_button">
                <span className="material-symbols-outlined">download</span>
                Export as CSV
              </button>
            </div>
          </div>

          <AdminMerchantsTable />
        </div>
      </div>
    </>
  );
};

export default MerchantsPage;
