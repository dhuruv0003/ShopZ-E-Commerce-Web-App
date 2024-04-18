import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import { useState } from "react";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
const App = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  function toggleDarkMode() {
    setDarkMode(!isDarkMode)
}
  return (<div>
    <div className="bg-gradient-to-r from-pink-100 to-indigo-500 shadow-black shadow-lg  z-50 w-full fixed top-0">
      <Navbar isDarkMode={isDarkMode} setDarkMode={setDarkMode} toggleDarkMode={toggleDarkMode}/>
    </div>
    
    <Routes>
      <Route path="/" element={<Home  isDarkMode={isDarkMode} setDarkMode={setDarkMode} toggleDarkMode={toggleDarkMode}/>} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </div>
  )
};

export default App;
