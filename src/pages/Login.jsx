import React, { useContext } from 'react'
import Template from '../Login Comp/Template'
import loginimg from "../assets/download.png"
import { AppContext } from '../Context/AppContext';
import { NavLink     } from 'react-router-dom';
import { IoMdHeart } from 'react-icons/io';

export default function Login() {
  const {isDarkMode,setHide} = useContext(AppContext);

  return (
    <div onClick={()=>setHide(true)} className={`${isDarkMode ? "bg-gradient-to-r from-slate-500 text-white to-black" : "bg-gradient-to-r from-blue-100  to-purple-100"} lg:h-screen max-[400px]:px-[0.5rem] h-fit` }>
      <Template
        title="Welcome TO shopz"
        desc="Shop For Your Loved Ones"
        formtype="login"
        image={loginimg} 
      />
      <footer  className={`${isDarkMode ?'bg-gradient-to-r from-slate-400 to-slate-950 shadow-slate-900 shadow-lg text-white z-50 w-full fixed top-0': 'bg-gradient-to-r from-pink-100 to-indigo-500 shadow-black shadow-lg  z-50 w-full '}py-6 mt-10 flex flex-col gap-5 ` }>
        <div className="flex justify-center gap-5 items-center text-xl px-10 font-extrabold ">
          <NavLink to='/'>
              Home
          </NavLink>
          <NavLink to='/login'>
              Login
          </NavLink>
          <NavLink to='/signup'>
              Sign Up
          </NavLink>
          <NavLink to='/contact'>
              Contact Us
          </NavLink>
          <NavLink to='/cart'>
              Cart
          </NavLink>
        </div>
        <span className="flex justify-center items-center gap-2 font-bold ">
          Made With <IoMdHeart className="text-[red]"/> by Dhuruv Kumar
        </span>
</footer>
    </div>
  )
}
