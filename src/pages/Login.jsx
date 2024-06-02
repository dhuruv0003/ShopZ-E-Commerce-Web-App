import React, { useContext } from 'react'
import Template from '../Login Comp/Template'
import loginimg from "../assets/download.png"
import { AppContext } from '../Context/AppContext';
import { NavLink } from 'react-router-dom';
import { IoMdHeart } from 'react-icons/io';
import { AiFillGithub } from "react-icons/ai";


export default function Login() {
  const { isDarkMode, setHide } = useContext(AppContext);

  return (
    <div onClick={() => setHide(true)} className={`${isDarkMode ? "bg-gradient-to-r from-slate-500 text-white to-black" : "bg-gradient-to-r from-blue-100  to-purple-100"} lg:h-full h-full`}>
      <Template
        title="Welcome TO shopz"
        desc="Shop For Your Loved Ones"
        formtype="login"
        image={loginimg}
      />
      <footer className={`${isDarkMode ? 'bg-gradient-to-r from-slate-400 to-slate-950 shadow-slate-900 shadow-lg text-white z-50 w-full ' : 'bg-gradient-to-r from-pink-100 to-indigo-500 shadow-black shadow-lg  z-50 w-full '} py-8 mt-10  flex flex-col gap-7 `}>
        <div className=" flex justify-center gap-5 items-center max-[600px]:text-lg sm:text-xl px-8 font-extrabold ">
          <NavLink to='/'>
            Home
          </NavLink>
          <NavLink to='/login'>
            Login
          </NavLink>
          <NavLink to='/signup'>
            Signup
          </NavLink>
          <NavLink to='/contact'>
            Contact 
          </NavLink>
          <NavLink to='/cart'>
            Cart
          </NavLink>
        </div>
        <div className="flex justify-center items-center gap-x-2 font-bold ">
          Made With<IoMdHeart className="text-[red] text-2xl flex " />by Dhuruv Kumar <NavLink className='text-2xl' to='https://github.com/dhuruv0003/ShopZ-E-Commerce-Web-App'><AiFillGithub /></NavLink>
        </div>
      </footer>
    </div>
  )
}
