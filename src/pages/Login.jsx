import React from 'react'
import Template from '../Login Comp/Template'
import loginimg from "../assets/download.png"
export default function Login() {
  return (
    <div className='bg-gradient-to-r  from-blue-200 to-purple-100 h-[screen] py-[4rem]'>
      <Template
        title="Welcome TO shopz"
        desc="Shop For Your Loved Ones"
        formtype="login"
        image={loginimg}
      />
    </div>
  )
}
