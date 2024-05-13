import React, { useContext } from 'react'
import Template from '../Login Comp/Template'
import loginimg from "../assets/download.png"
import { AppContext } from '../Context/AppContext';
export default function Login() {
  const {isDarkMode} = useContext(AppContext);

  return (
    <div className={`${isDarkMode?"bg-black":"bg-gradient-to-r  from-blue-200 to-purple-100 h-[screen] py-[4rem]"}`}>
      <Template
        title="Welcome TO shopz"
        desc="Shop For Your Loved Ones"
        formtype="login"
        image={loginimg} 
      />
    </div>
  )
}
