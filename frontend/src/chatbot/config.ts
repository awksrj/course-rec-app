import { createChatBotMessage } from "react-chatbot-kit";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";

const botName = "AI Chatbot";

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(`Hi! How can I assist you?`, { delay: 500 }),
  ],
  actionProvider: ActionProvider,
  messageParser: MessageParser,
};

export default config;
