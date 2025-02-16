import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatbotComponent from "./components/Chatbot";
import Login from "./UIganggang/Login";
import SignUp from "./UIganggang/SignUp";

const App: React.FC = () => {
  return (
    <Router>
      <div>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/chatbot" element={<ChatbotComponent />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
