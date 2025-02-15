import React, { useEffect, useRef } from "react";
import Chatbot from "react-chatbot-kit";
import config from "../chatbot/config";
import MessageParser from "../chatbot/MessageParser";
import ActionProvider from "../chatbot/ActionProvider";
import "../chatbot/chatbotStyles.css"; // Import custom styles

const ChatbotComponent = () => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Function to scroll to the latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, []); // Runs once on load

  return (
    <div className="chat-container">
      <div className="chat-messages">
        <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
        <div ref={messagesEndRef} /> {/* Invisible div to auto-scroll */}
      </div>
      <div className="chat-input-container">
        <input type="text" placeholder="Type your message..." className="chat-input" />
        <button className="send-button">📩</button>
      </div>
    </div>
  );
};

export default ChatbotComponent;
