class MessageParser {
    actionProvider: any;
    
    constructor(actionProvider: any) {
      this.actionProvider = actionProvider;
    }
  
    parse(message: string) {
      if (message.includes("hello")) {
        this.actionProvider.handleHello();
      } else {
        this.actionProvider.handleDefault(message);
      }
    }
  }
  
  export default MessageParser;
  