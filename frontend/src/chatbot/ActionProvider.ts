const API_URL = "http://localhost:5000/api/chatbot"; // Update if backend is deployed

class ActionProvider {
  createChatBotMessage: any;
  setState: any;

  constructor(createChatBotMessage: any, setStateFunc: any) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  // Function to send message to backend
  async sendMessageToChatbot(userMessage: string) {
    console.log("🔵 Sending to backend:", userMessage); // ✅ Debugging

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();
      console.log("🟢 Received from backend:", data); // ✅ Debugging

      return data.reply;
    } catch (error) {
      console.error("🔴 Error connecting to chatbot:", error);
      return "⚠️ Error: Unable to connect to chatbot.";
    }
  }

  // Handle user messages by sending them to backend
  async handleUserMessage(userMessage: string) {
    console.log("👤 User input:", userMessage); // ✅ Debugging

    // Show user message in chat
    const userChatMessage = this.createChatBotMessage(userMessage, { delay: 300 });
    this.addMessageToState(userChatMessage);

    // Get bot response from backend
    const botReply = await this.sendMessageToChatbot(userMessage);

    console.log("🤖 Bot response:", botReply); // ✅ Debugging

    // Show chatbot's response in chat
    const botChatMessage = this.createChatBotMessage(botReply, { delay: 500 });
    this.addMessageToState(botChatMessage);
  }

  // Add messages to chatbot state
  addMessageToState = (message: any) => {
    console.log("📩 Adding message to state:", message); // ✅ Debugging
    this.setState((prevState: any) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
