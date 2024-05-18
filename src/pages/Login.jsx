import React, { useContext } from 'react'
import Template from '../Login Comp/Template'
import loginimg from "../assets/download.png"
import { AppContext } from '../Context/AppContext';
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
    </div>
  )
}
