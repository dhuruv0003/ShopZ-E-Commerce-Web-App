import { FaShoppingCart } from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"
import { useState } from "react";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Navbar = ({isDarkMode,setDarkMode,toggleDarkMode}) => {
    
    
    const { cart } = useSelector((state) => state);

    return (
        <div>
            <nav className="flex justify-between items-center h-24 max-w-6xl mx-auto">

                <NavLink to="/">
                    <div className="ml-5 ">
                        <img src={logo} className="shadow-slate-900 shadow-md  h-[80px] w-[130px] rounded-es-3xl rounded-se-3xl " />
                    </div>
                </NavLink>

                <div className="flex items-center font-bold text-white  mr-5 space-x-6">
                    <NavLink to="/">
                        <p>Home</p>
                    </NavLink>

                    <NavLink to="/cart">
                        <div className="relative">
                            <FaShoppingCart className="text-2xl" />
                            {
                                cart.length > 0 &&
                                <span className=" absolute -top-3 bg-green-600 rounded-[100%] w-5 h-5 flex justify-center items-center font-bold animate-bounce -right-2 text-xs">{cart.length}</span>
                            }

                        </div>
                    </NavLink>
                    <DarkModeSwitch
                       
                        checked={isDarkMode}
                        onChange={toggleDarkMode}
                        size={30}
                    />
                </div>

            </nav>
        </div>
    )
};

export default Navbar;
