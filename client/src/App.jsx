import React from "react";
import { Route, Routes } from "react-router-dom";
import Credits from "./pages/Credits";
import Chatbot from "./components/Chatbot";
import Community from "./pages/Community";
import Sidebar from "./components/Sidebar";
import { assets } from "./assets/assets";

const App = () => {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <>
{!isMenuOpen && (
  <img
    src={assets.menu_icon}
    onClick={() => setIsMenuOpen(true)}
    className="absolute top-3 left-3 w-8 h-8 cursor-pointer md:hidden invert dark:invert-0"
    alt="menu"
  />
)}



      <div className='dark:bg-gradient-to-b from-[#241240] to-[#000000] dark:text-white'>
        <div className="flex h-screen w-screen">
          <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
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
