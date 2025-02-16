const API_URL = "http://localhost:5000/api/chatbot"; // Update if backend is deployed

class ActionProvider {
  createChatBotMessage: any;
  setState: any;

  constructor(createChatBotMessage: any, setStateFunc: any) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  async sendMessageToChatbot(userMessage: string) {
    console.log("🔵 Sending to backend:", userMessage);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();
      console.log("🟢 Received from backend:", data);

      if (data.error) {
        console.error("🔴 Backend Error:", data.error);
        return "⚠️ Error: Unable to get a response.";
      }

      return data.reply;
    } catch (error) {
      console.error("🔴 Error connecting to chatbot:", error);
      return "⚠️ Error: Unable to connect to chatbot.";
    }
  }

  async handleUserMessage(userMessage: string) {
    console.log("👤 User input:", userMessage);

    const userChatMessage = this.createChatBotMessage(userMessage, { delay: 300 });
    this.addMessageToState(userChatMessage);

    const botReply = await this.sendMessageToChatbot(userMessage);

    console.log("🤖 Bot response:", botReply);

    const botChatMessage = this.createChatBotMessage(botReply, { delay: 500 });
    this.addMessageToState(botChatMessage);
  }

  addMessageToState = (message: any) => {
    console.log("📩 Adding message to state:", message);
    this.setState((prevState: any) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
