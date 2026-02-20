import React, { useState, useEffect, useRef } from "react";
import { supabase } from "../services/supabase";
import { useGlobal } from "../../app/GlobalContext";
import styles from "./TicketConversation.module.css";

const TicketConversation = ({ ticketId, onBack }) => {
  const { showToast } = useGlobal();
  const [ticket, setTicket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    fetchTicketDetails();
    const subscription = supabase
      .channel("public:ticket_messages")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "ticket_messages",
          filter: `ticket_id=eq.${ticketId}`,
        },
        (payload) => {
          if (payload && payload.new) {
            setMessages((prev) => [...prev, payload.new]);
          }
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, [ticketId]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const fetchTicketDetails = async () => {
    setLoading(true);
    try {
      // Fetch ticket header
      const { data: ticketData, error: tError } = await supabase
        .from("tickets")
        .select("*")
        .eq("id", ticketId)
        .single();

      if (tError) throw tError;
      setTicket(ticketData);

      // Fetch messages
      const { data: messagesData, error: mError } = await supabase
        .from("ticket_messages")
        .select("*")
        .eq("ticket_id", ticketId)
        .order("created_at", { ascending: true });

      if (mError) throw mError;
      setMessages(messagesData || []);
    } catch (error) {
      showToast(error.message || "Failed to fetch ticket details.", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    setSending(true);
    try {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData?.user) throw new Error("Not logged in");

      const { error } = await supabase.from("ticket_messages").insert([
        {
          ticket_id: ticketId,
          sender_id: userData.user.id,
          sender_type: "merchant",
          message: newMessage.trim(),
        },
      ]);

      if (error) throw error;
      setNewMessage("");
    } catch (error) {
      showToast(error.message || "Failed to send message.", "error");
    } finally {
      setSending(false);
    }
  };

  if (loading)
    return <div className={styles.loading}>Loading conversation...</div>;
  if (!ticket) return <div className={styles.error}>Ticket not found.</div>;

  return (
    <div className={styles.conversation_container}>
      <div className={styles.header}>
        <button className={styles.back_btn} onClick={onBack}>
          <span className="material-symbols-outlined">arrow_back</span>
          Back
        </button>
        <div className={styles.ticket_info}>
          <h3 className={styles.subject}>{ticket.subject}</h3>
          <p className={styles.id}>
            Ticket ID: #{ticket.id.split("-")[0].toUpperCase()}
          </p>
        </div>
        <div className={styles.status_badge}>
          <span className={`${styles.status} ${styles[ticket.status]}`}>
            {ticket.status}
          </span>
        </div>
      </div>

      <div className={styles.messages_area}>
        <div className={styles.initial_message}>
          <div className={styles.message_header}>
            <span className={styles.sender_name}>You (Merchant)</span>
            <span className={styles.time}>
              {new Date(ticket.created_at).toLocaleString()}
            </span>
          </div>
          <div className={styles.message_body}>{ticket.message}</div>
        </div>

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`${styles.message} ${msg.sender_type === "admin" ? styles.admin : styles.merchant}`}
          >
            <div className={styles.message_header}>
              <span className={styles.sender_name}>
                {msg.sender_type === "admin" ? "Support Team" : "You"}
              </span>
              <span className={styles.time}>
                {new Date(msg.created_at).toLocaleString()}
              </span>
            </div>
            <div className={styles.message_body}>{msg.message}</div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form className={styles.input_area} onSubmit={handleSendMessage}>
        <textarea
          placeholder="Type your message here..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSendMessage(e);
            }
          }}
        />
        <button
          type="submit"
          disabled={sending || !newMessage.trim()}
          className="primary_button"
        >
          <span className="material-symbols-outlined">send</span>
          {sending ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default TicketConversation;
