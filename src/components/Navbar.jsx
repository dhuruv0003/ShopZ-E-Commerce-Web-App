import { FaShoppingCart } from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../assets/download.png"
import { useState } from "react";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { AppContext } from "../Context/AppContext";
import { useContext } from "react";
import toast from "react-hot-toast";
const Navbar = () => {

    const { isloggedin, setisloggedin } = useContext(AppContext)
    const { isDarkMode, setDarkMode, toggleDarkMode } = useContext(AppContext);
    const { cart } = useSelector((state) => state);

    return (
        <div>
            <nav className="flex justify-between items-center h-24 max-w-6xl mx-auto">

                <NavLink to="/">
                    <div className="ml-5 ">
                        <img src={logo} className="shadow-slate-900 shadow-md  h-[80px] w-[130px] rounded-es-3xl rounded-se-3xl " />
                    </div>
                </NavLink>

                <div className="flex items-center font-bold text-white space-x-5">
                    <NavLink to="/">
                        <p>Home</p>
                    </NavLink>

                    <NavLink to="/contactus">
                        Contact Us
                    </NavLink>
                    </div>
                    <div className="flex items-center font-bold text-white space-x-5">
                    {
                        !isloggedin &&
                         <NavLink to='/login' className="px-2 border-[2px] p-1 rounded-lg">Login</NavLink>
                    }
                    {
                        isloggedin &&
                        <NavLink to='/login' className="border-[2px] px-2 p-1 rounded-lg" onClick={() => {
                            setisloggedin(false)
                            toast.error("Logged Out")
                        }}>LogOut</NavLink>
                    }
                    {
                        !isloggedin &&
                        <NavLink to='/signup' className="border-[2px] px-2 p-1 rounded-lg">Signup</NavLink>
                    }


                    <NavLink to="/cart" className="border-[2px] px-2 p-1 rounded-lg">

                        <div className="relative">
                            <FaShoppingCart className="text-2xl" />
                            {
                                cart.length > 0 &&
                                <span className=" absolute -top-3 bg-green-600 rounded-[100%] w-5 h-5 flex justify-center items-center font-bold animate-bounce -right-2 text-xs">{cart.length}</span>
                            }

                        </div>

                    </NavLink>

                    <DarkModeSwitch
                    className=" p-1 rounded-lg"
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
