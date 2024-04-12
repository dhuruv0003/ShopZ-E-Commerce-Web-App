import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"

const App = () => {
  return (<div>
    <div className="bg-gradient-to-r from-pink-100 to-indigo-500 shadow-black shadow-lg  z-50 w-full fixed top-0">
      <Navbar />
    </div>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </div>)
};

export default App;
