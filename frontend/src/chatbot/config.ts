import { createChatBotMessage } from "react-chatbot-kit";

const botName = "AI Chatbot";

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(`Hi!  How can I help?`, {
      delay: 500, 
    }),
  ],
};

export default config;
