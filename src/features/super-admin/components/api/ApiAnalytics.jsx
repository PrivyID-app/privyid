import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "../../super-admin.css";

const ApiAnalytics = () => {
  const requestVolumeData = [
    { day: "Mon", requests: 4200, errors: 45 },
    { day: "Tue", requests: 3800, errors: 32 },
    { day: "Wed", requests: 5100, errors: 58 },
    { day: "Thu", requests: 4600, errors: 41 },
    { day: "Fri", requests: 5800, errors: 62 },
    { day: "Sat", requests: 3200, errors: 28 },
    { day: "Sun", requests: 2900, errors: 25 },
  ];

  const endpointData = [
    { endpoint: "/verify/kyc", requests: 12450 },
    { endpoint: "/verify/kyb", requests: 8320 },
    { endpoint: "/merchant/create", requests: 1250 },
    { endpoint: "/webhook/status", requests: 5680 },
    { endpoint: "/token/generate", requests: 3450 },
  ];

  const topConsumers = [
    { merchant: "Ironclad Systems", requests: "12,450", percentage: "22%" },
    { merchant: "Quantum Dynamics", requests: "15,230", percentage: "27%" },
    { merchant: "NexGen Technologies", requests: "18,560", percentage: "33%" },
    { merchant: "TechFlow Solutions", requests: "8,320", percentage: "15%" },
    { merchant: "BlueWave Corp", requests: "7,890", percentage: "14%" },
  ];

  return (
    <div className="api_analytics">
      {/* Request Volume Chart */}
      <div className="chart_container">
        <div className="chart_header">
          <h3>API Request Volume (Last 7 Days)</h3>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={requestVolumeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="requests"
              stroke="#8b5cf6"
              strokeWidth={2}
              name="Requests"
            />
            <Line
              type="monotone"
              dataKey="errors"
              stroke="#ef4444"
              strokeWidth={2}
              name="Errors"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Endpoint Usage Chart */}
      <div className="chart_container">
        <div className="chart_header">
          <h3>Top Endpoints</h3>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={endpointData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="endpoint" type="category" width={150} />
            <Tooltip />
            <Bar dataKey="requests" fill="#8b5cf6" name="Requests" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Top Consumers Table */}
      <div className="chart_container">
        <div className="chart_header">
          <h3>Top API Consumers</h3>
        </div>
        <div className="top_consumers_table">
          <div className="table_header">
            <div className="cell">Merchant</div>
            <div className="cell">Requests</div>
            <div className="cell">Percentage</div>
          </div>
          {topConsumers.map((consumer, index) => (
            <div key={index} className="table_row">
              <div className="cell">
                <div className="merchant_info">
                  <span className="rank">#{index + 1}</span>
                  <span>{consumer.merchant}</span>
                </div>
              </div>
              <div className="cell">{consumer.requests}</div>
              <div className="cell">
                <div className="progress_bar">
                  <div
                    className="progress_fill"
                    style={{ width: consumer.percentage }}
                  ></div>
                  <span className="percentage_label">
                    {consumer.percentage}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApiAnalytics;
