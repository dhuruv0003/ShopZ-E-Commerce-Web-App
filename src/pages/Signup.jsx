import React from 'react'
import Template from '../Login Comp/Template'
import loginimg from "../assets/download.png"

export default function Signup() {
  return (
    <div className="bg-gradient-to-r  from-blue-200 to-purple-100 py-[3rem]">
      <Template
      title="Welcome TO shopz"
      desc="Shop For Your Loved Ones"
      formtype="signup"
      image={loginimg}
      
    />
    </div>
  )
}
