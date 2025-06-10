import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import Register from "./pages/Register";
import Chatbot from "./pages/Chatbot";
import Dashboard from "./pages/Dashboard";
import ChatbotDesc from "./pages/ChatbotDesc";
import AiDesc from "./pages/AiDesc";
import BotDesc from "./pages/BotDesc";
import FlashCard from "./pages/FlashCard";
import AnalysisChart from "./pages/Analysis"; // ⬅️ Make sure this path is correct

function App() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <FlashCard />
      <Header />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/register" element={<Register />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analysis" element={<AnalysisChart />} /> {/* ✅ New route */}
          <Route path="/chatbot-desc" element={<ChatbotDesc />} />
          <Route path="/ai-desc" element={<AiDesc />} />
          <Route path="/bot-desc" element={<BotDesc />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
