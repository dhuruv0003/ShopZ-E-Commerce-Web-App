import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"

import { AppContext } from "./Context/AppContext";
import { useContext } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductItem from "./components/ProductItem";
const App = () => {
  const { isDarkMode, setDarkMode, toggleDarkMode }=useContext(AppContext);
  return (<div>
    <div className={`${isDarkMode ?'bg-gradient-to-r from-slate-100 to-blue-950 shadow-black shadow-lg  z-50 w-full fixed top-0': 'bg-gradient-to-r from-pink-100 to-indigo-500 shadow-black shadow-lg  z-50 w-full fixed top-0'}`}>
      <Navbar />
    </div>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path="/productItem" element={<ProductItem/>}></Route>
    </Routes>
  </div>
  )
};

export default App;
