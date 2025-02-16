import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Chatbot from "react-chatbot-kit";
import config from "../chatbot/config";
import MessageParser from "../chatbot/MessageParser";
import ActionProvider from "../chatbot/ActionProvider";
import "../chatbot/chatbotStyles.css";

const ChatbotComponent: React.FC = () => {
  const navigate = useNavigate(); // ✅ Add useNavigate
  const [userInput, setUserInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  const handleSendMessage = () => {
    if (userInput.trim() === "") return;

    setUserInput("");
    scrollToBottom();
  };

  return (
    <div className="chat-container">
      <button className="back-button" onClick={() => navigate("/")}>⬅ Back to Login</button>
      <div className="chat-messages">
        <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
        <div ref={messagesEndRef} />
      </div>
      <div className="chat-input-container">
        <input
          type="text"
          placeholder="Type your message..."
          className="chat-input"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button className="send-button" onClick={handleSendMessage}>📩</button>
      </div>
    </div>
  );
};

export default ChatbotComponent;
