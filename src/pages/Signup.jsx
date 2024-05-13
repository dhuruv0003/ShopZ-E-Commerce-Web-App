import React, { useContext } from 'react'
import Template from '../Login Comp/Template'
import loginimg from "../assets/download.png"
import { AppContext } from '../Context/AppContext'

export default function Signup() {
  const {isDarkMode} = useContext(AppContext)
   return (
    <div className={`${is}`}>
      <Template
      title="Welcome TO shopz"
      desc="Shop For Your Loved Ones"
      formtype="signup"
      image={loginimg}
      
    />
    </div>
  )
}
