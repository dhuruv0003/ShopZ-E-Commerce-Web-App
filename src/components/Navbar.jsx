import { FaShoppingCart } from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink, Navigate } from "react-router-dom";
import logo from "../assets/download.png"
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { AppContext } from "../Context/AppContext";
import { useContext,useState } from "react";
import toast from "react-hot-toast";
import { TfiMenu } from "react-icons/tfi";

const Navbar = () => {

    const { isloggedin, setisloggedin } = useContext(AppContext)
    const { isDarkMode, setDarkMode, toggleDarkMode } = useContext(AppContext);
    const { cart } = useSelector((state) => state);

    const [hide, setHide] = useState(true)

    return (
        <div>
            <nav className="flex justify-between items-center h-24 max-[400px]:px-[0.5rem] max-w-6xl mx-auto">
           
                <NavLink to="/">
                    <div className="sm:ml-5 ">
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
                <TfiMenu onClick={()=>setHide((prev)=>!prev)}  className='xl:hidden relative font-extrabold text-4xl shadow-md  shadow-rose-950 bg-gradient-to-r from-pink-500 to-indigo-400 cursor-pointer'/>

                <div className={`${hide?"hidden":"absolute flex flex-col  items-baseline justify-evenly font-bold right-3 xl:right-[12rem] top-[4.5rem] text-white max-w-[100px] mx-auto space-x-5"} transition-translate transition-transform duration-300 translate-y-2 xl:flex xl:items-center xl:gap-3 xl:font-bold xl:justify-center `}>
                    {
                        !isloggedin &&
                        <NavLink to='/login' className="p-2 w-[90px] xl:bg-gradient-to-r xl:from-pink-100 xl:to-indigo-300  bg-gradient-to-r from-pink-500 to-indigo-400 border-[2px] rounded-lg">Login</NavLink>
                    }
                    {
                        isloggedin &&
                        <NavLink to='/' className="border-[2px] w-[90px] p-2 rounded-lg xl:bg-gradient-to-r xl:from-pink-100 xl:to-indigo-300 
                         bg-gradient-to-r from-pink-500 to-indigo-400" onClick={() => {
                            toast.error("Logged Out")
                            setisloggedin(false)
                            
                            
                        }}>LogOut</NavLink>
                    }
                    {
                        !isloggedin &&
                        <NavLink to='/signup' className="xl:bg-gradient-to-r xl:from-pink-100 xl:to-indigo-300  p-2 w-[90px] bg-gradient-to-r from-pink-500 to-indigo-400  border-[2px] rounded-lg">Signup</NavLink>
                    }


                    <NavLink to="/cart" className="xl:bg-gradient-to-r xl:from-pink-100 xl:to-indigo-300   border-[2px] w-[90px] bg-gradient-to-r from-pink-500 to-indigo-400  p-2 rounded-lg">

                        <div className="relative flex justify-center">
                            <FaShoppingCart className="text-2xl " />
                            {
                                cart.length > 0 &&
                                <span className=" absolute -top-3 bg-green-600 rounded-[100%] w-5 h-5 flex justify-center items-center font-bold animate-bounce -right-2 text-xs">{cart.length}</span>
                            }

                        </div>

                    </NavLink>

                    <div className="xl:bg-gradient-to-r xl:from-pink-100 xl:to-indigo-300  flex items-center gap-1 border-[2px] w-[90px]  bg-gradient-to-r from-pink-500 to-indigo-400  px-2 p-1 rounded-lg">
                    <DarkModeSwitch
                        className=""
                        checked={isDarkMode}
                        onChange={toggleDarkMode}
                        size={30}
                    />
                    <span className=" text-[12px]">Theme</span>
                    </div>
                </div>

            </nav>
        </div>
    )
};

export default Navbar;
