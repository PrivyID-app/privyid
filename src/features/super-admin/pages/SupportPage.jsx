import React, { useState, useEffect, useRef } from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import TicketList from "../components/support/TicketList";
import CustomSelect from "../../../shared/components/CustomSelect";
import { supabase } from "../../../shared/services/supabase";
import "../super-admin.css";

const SupportPage = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [response, setResponse] = useState("");
  const [loadingMessages, setLoadingMessages] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (selectedTicket) {
      fetchTicketMessages(selectedTicket.id);

      const subscription = supabase
        .channel(`public:ticket_messages:ticket_id=eq.${selectedTicket.id}`)
        .on(
          "postgres_changes",
          {
            event: "INSERT",
            schema: "public",
            table: "ticket_messages",
            filter: `ticket_id=eq.${selectedTicket.id}`,
          },
          (payload) => {
            setMessages((prev) => [...prev, payload.new]);
          },
        )
        .subscribe();

      return () => {
        supabase.removeChannel(subscription);
      };
    }
  }, [selectedTicket]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const fetchTicketMessages = async (ticketId) => {
    setLoadingMessages(true);
    try {
      const { data, error } = await supabase
        .from("ticket_messages")
        .select("*")
        .eq("ticket_id", ticketId)
        .order("created_at", { ascending: true });

      if (error) throw error;
      setMessages(data || []);
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setLoadingMessages(false);
    }
  };

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

  const statusOptions = [
    { value: "open", label: "Open" },
    { value: "in_progress", label: "In Progress" },
    { value: "resolved", label: "Resolved" },
    { value: "closed", label: "Closed" },
  ];

  const assignOptions = [
    { value: "Unassigned", label: "Unassigned" },
    { value: "Emma Wright", label: "Emma Wright" },
    { value: "John Doe", label: "John Doe" },
    { value: "Sarah Johnson", label: "Sarah Johnson" },
    { value: "Michael Chen", label: "Michael Chen" },
  ];

  const handleAssignTicket = async (ticketId, adminName) => {
    try {
      const { error } = await supabase
        .from("tickets")
        .update({ assigned_to: adminName })
        .eq("id", ticketId);

      if (error) throw error;
      setSelectedTicket((prev) => ({ ...prev, assigned_to: adminName }));
    } catch (error) {
      console.error("Error assigning ticket:", error);
    }
  };

  const handleUpdateStatus = async (ticketId, newStatus) => {
    try {
      const { error } = await supabase
        .from("tickets")
        .update({ status: newStatus })
        .eq("id", ticketId);

      if (error) throw error;
      setSelectedTicket((prev) => ({ ...prev, status: newStatus }));
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleSendResponse = async () => {
    if (selectedTicket && response.trim()) {
      try {
        const { data: userData } = await supabase.auth.getUser();
        if (!userData?.user) throw new Error("Not logged in");

        const { error } = await supabase.from("ticket_messages").insert([
          {
            ticket_id: selectedTicket.id,
            sender_id: userData.user.id,
            sender_type: "admin",
            message: response.trim(),
          },
        ]);

        if (error) throw error;
        setResponse("");
      } catch (error) {
        console.error("Error sending response:", error);
      }
    }
  };

  return (
    <>
      <PageHeader
        title="Support"
        description="Manage merchant support tickets and queries"
        notificationIconRoute="/super-admin/notifications"
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
                className="back_button for_ticket_table"
                onClick={() => setSelectedTicket(null)}
              >
                <span className="material-symbols-outlined">arrow_back</span>
                Back to Tickets
              </button>

              <div className="ticket_header">
                <div>
                  <h2>{selectedTicket.subject}</h2>
                  <p className="ticket_meta">
                    Ticket ID: #{selectedTicket.id.split("-")[0].toUpperCase()}{" "}
                    | Created:{" "}
                    {new Date(selectedTicket.created_at).toLocaleString()}
                  </p>
                </div>
                <div className="ticket_actions">
                  <CustomSelect
                    options={statusOptions}
                    value={selectedTicket.status}
                    onSelect={(value) =>
                      handleUpdateStatus(selectedTicket.id, value)
                    }
                    className="status_select"
                  />
                  <CustomSelect
                    options={assignOptions}
                    value={selectedTicket.assigned_to || "Unassigned"}
                    onSelect={(value) =>
                      handleAssignTicket(selectedTicket.id, value)
                    }
                    className="assign_select"
                  />
                </div>
              </div>

              <div className="ticket_info_grid">
                <div className="info_item">
                  <label>Merchant</label>
                  <p>{selectedTicket.merchants?.company_name || "N/A"}</p>
                </div>
                <div className="info_item">
                  <label>Priority</label>
                  <p>{selectedTicket.priority?.toUpperCase()}</p>
                </div>
                <div className="info_item">
                  <label>Assigned To</label>
                  <p>{selectedTicket.assigned_to || "Unassigned"}</p>
                </div>
                <div className="info_item">
                  <label>Last Updated</label>
                  <p>
                    {new Date(selectedTicket.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="ticket_conversation">
                <h3>Conversation</h3>
                <div className="conversation_thread">
                  {/* Initial Message */}
                  <div className="message merchant_message">
                    <div className="message_header">
                      <strong>{selectedTicket.merchants?.company_name}</strong>
                      <span className="message_time">
                        {new Date(selectedTicket.created_at).toLocaleString()}
                      </span>
                    </div>
                    <p>{selectedTicket.message}</p>
                  </div>

                  {/* Reply Thread */}
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`message ${msg.sender_type === "admin" ? "admin_message" : "merchant_message"}`}
                    >
                      <div className="message_header">
                        <strong>
                          {msg.sender_type === "admin"
                            ? "Support Agent"
                            : selectedTicket.merchants?.company_name}
                        </strong>
                        <span className="message_time">
                          {new Date(msg.created_at).toLocaleString()}
                        </span>
                      </div>
                      <p>{msg.message}</p>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
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
                  <button className="secondary_button">
                    <span className="material-symbols-outlined">
                      attach_file
                    </span>
                    Attach File
                  </button>

                  <button
                    className="primary_button"
                    onClick={handleSendResponse}
                  >
                    <span className="material-symbols-outlined">send</span>
                    Send Response
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
