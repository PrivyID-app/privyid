import React, { useState } from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import TicketList from "../components/support/TicketList";
import "../super-admin.css";

const SupportPage = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [response, setResponse] = useState("");

  const supportStats = [
    {
      icon: "headphones",
      value: "42",
      title: "Open Tickets",
      rate: "+5",
      trend: "up",
    },
    {
      icon: "schedule",
      value: "2.5h",
      title: "Avg Response Time",
      rate: "-0.5h",
      trend: "up",
    },
    {
      icon: "check_circle",
      value: "95%",
      title: "Resolution Rate",
      rate: "+3%",
      trend: "up",
    },
    {
      icon: "star",
      value: "4.8/5",
      title: "Satisfaction Score",
      rate: "+0.2",
      trend: "up",
    },
  ];

  const handleAssignTicket = (ticketId, adminName) => {
    console.log(`Assigning ticket ${ticketId} to ${adminName}`);
  };

  const handleUpdateStatus = (ticketId, newStatus) => {
    console.log(`Updating ticket ${ticketId} status to ${newStatus}`);
  };

  const handleSendResponse = () => {
    if (selectedTicket && response) {
      console.log(`Sending response to ticket ${selectedTicket.id}:`, response);
      setResponse("");
    }
  };

  return (
    <>
      <PageHeader
        title="Support"
        description="Manage merchant support tickets and queries"
      />

      <div className="content_area">
        {/* Support Statistics */}
        <div className="overview_wrapper">
          {supportStats.map((stat, index) => (
            <div key={index} className="overview_card">
              <div className="card_top_area">
                <div className="overview_card_icon">
                  <span className="material-symbols-outlined">{stat.icon}</span>
                </div>
                <div className="card_rate">
                  <span
                    className={`material-symbols-outlined ${stat.trend}_icon`}
                  >
                    {stat.trend === "up" ? "arrow_upward" : "arrow_downward"}
                  </span>
                  <p className="rate_value">{stat.rate}</p>
                </div>
              </div>
              <div className="card_content">
                <p className="card_value">{stat.value}</p>
                <p className="card_title">{stat.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Ticket Management */}
        <div className="support_content">
          {!selectedTicket ? (
            <TicketList onSelectTicket={setSelectedTicket} />
          ) : (
            <div className="ticket_details">
              <button
                className="back_button"
                onClick={() => setSelectedTicket(null)}
              >
                <span className="material-symbols-outlined">arrow_back</span>
                Back to Tickets
              </button>

              <div className="ticket_header">
                <div>
                  <h2>{selectedTicket.subject}</h2>
                  <p className="ticket_meta">
                    Ticket ID: {selectedTicket.id} | Created:{" "}
                    {selectedTicket.created}
                  </p>
                </div>
                <div className="ticket_actions">
                  <select
                    defaultValue={selectedTicket.status}
                    onChange={(e) =>
                      handleUpdateStatus(selectedTicket.id, e.target.value)
                    }
                    className="status_select"
                  >
                    <option value="open">Open</option>
                    <option value="in_progress">In Progress</option>
                    <option value="resolved">Resolved</option>
                    <option value="closed">Closed</option>
                  </select>
                  <select
                    defaultValue={selectedTicket.assignedTo}
                    onChange={(e) =>
                      handleAssignTicket(selectedTicket.id, e.target.value)
                    }
                    className="assign_select"
                  >
                    <option value="Unassigned">Unassigned</option>
                    <option value="Emma Wright">Emma Wright</option>
                    <option value="John Doe">John Doe</option>
                    <option value="Sarah Johnson">Sarah Johnson</option>
                    <option value="Michael Chen">Michael Chen</option>
                  </select>
                </div>
              </div>

              <div className="ticket_info_grid">
                <div className="info_item">
                  <label>Merchant</label>
                  <p>{selectedTicket.merchant}</p>
                </div>
                <div className="info_item">
                  <label>Priority</label>
                  <p>{selectedTicket.priority}</p>
                </div>
                <div className="info_item">
                  <label>Assigned To</label>
                  <p>{selectedTicket.assignedTo}</p>
                </div>
                <div className="info_item">
                  <label>Last Updated</label>
                  <p>{selectedTicket.lastUpdate}</p>
                </div>
              </div>

              <div className="ticket_conversation">
                <h3>Conversation</h3>
                <div className="conversation_thread">
                  <div className="message merchant_message">
                    <div className="message_header">
                      <strong>{selectedTicket.merchant}</strong>
                      <span className="message_time">
                        {selectedTicket.created}
                      </span>
                    </div>
                    <p>
                      I'm experiencing issues with the API integration. The
                      webhook endpoints are not receiving the verification
                      completion events. Can you please help?
                    </p>
                  </div>
                </div>
              </div>

              <div className="response_composer">
                <h3>Send Response</h3>
                <textarea
                  value={response}
                  onChange={(e) => setResponse(e.target.value)}
                  placeholder="Type your response here..."
                  rows="6"
                  className="response_textarea"
                />
                <div className="composer_actions">
                  <button className="save_button" onClick={handleSendResponse}>
                    <span className="material-symbols-outlined">send</span>
                    Send Response
                  </button>
                  <button className="secondary_button">
                    <span className="material-symbols-outlined">
                      attach_file
                    </span>
                    Attach File
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SupportPage;
