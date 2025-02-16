import React from "react";
import ChatbotComponent from "./components/Chatbot";
import AcademicRequirements from "./UIganggang/AcademicRequirement";

const App: React.FC = () => {
  return (
    <div>
      <h1>Welcome to My Chatbot</h1>
      <AcademicRequirements />
    </div>
  );
};

export default App;
