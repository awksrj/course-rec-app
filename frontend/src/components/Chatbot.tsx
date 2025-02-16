import React, { useEffect, useRef, useState } from "react";
import Chatbot from "react-chatbot-kit";
import config from "../chatbot/config";
import MessageParser from "../chatbot/MessageParser";
import ActionProvider from "../chatbot/ActionProvider";
import "../chatbot/chatbotStyles.css"; // Import custom styles

const ChatbotComponent: React.FC = () => {
  const [userInput, setUserInput] = useState(""); // Stores user input
  const messagesEndRef = useRef<HTMLDivElement>(null); // Ref for scrolling

  // Scroll to the latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom(); // Scroll on component mount
  }, []);

  // Handle user input submission
  const handleSendMessage = () => {
    if (userInput.trim() === "") return; // Ignore empty messages

    // Find chatbot instance and call ActionProvider's method
    const chatbotContainer = document.querySelector(".react-chatbot-kit-chat-container");
    if (chatbotContainer) {
      const chatbotInstance: any = (chatbotContainer as any).__REACT_CHATBOT_INSTANCE__;
      chatbotInstance?.actionProvider?.handleUserMessage(userInput);
    }

    setUserInput(""); // Clear input after sending
    scrollToBottom(); // Scroll to the bottom after sending
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
        <div ref={messagesEndRef} /> {/* Invisible div to auto-scroll */}
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
