import React from "react";
import { Route, Routes } from "react-router-dom";
import Credits from "./pages/Credits";
import Chatbot from "./components/Chatbot";
import Community from "./pages/Community";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <>
      <div className='dark:bg-gradient-to-b from-[#241240] to-[#000000] dark:text-white'>
        <div className="flex h-screen w-screen">
          <Sidebar/>
          <Routes>
            <Route path="/credits" element={<Credits />} />
            <Route path="/" element={<Chatbot />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
