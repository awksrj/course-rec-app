class ActionProvider {
    createChatBotMessage: any;
    setState: any;
  
    constructor(createChatBotMessage: any, setStateFunc: any) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    handleHello = () => {
      const message = this.createChatBotMessage("Hi there! How can I assist?");
      this.addMessageToState(message);
    };
  
    handleDefault = (message: string) => {
      const response = this.createChatBotMessage(`You said: "${message}". I'm still learning.`);
      this.addMessageToState(response);
    };
  
    addMessageToState = (message: any) => {
      this.setState((prevState: any) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    };
  }
  
  export default ActionProvider;
  