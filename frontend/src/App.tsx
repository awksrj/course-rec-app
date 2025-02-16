import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatbotComponent from "./components/Chatbot";
import Login from "./UIganggang/Login";
import SignUp from "./UIganggang/SignUp";
import SignIn from "./UIganggang/SignIn";
import AcademicRequirements from "./UIganggang/AcademicRequirement";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/chatbot" element={<ChatbotComponent />} />
          <Route path="/academic-requirement" element={<AcademicRequirements/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
