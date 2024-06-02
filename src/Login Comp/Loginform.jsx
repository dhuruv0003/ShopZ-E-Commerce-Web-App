import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import { Link } from 'react-router-dom';

export default function Loginform() {
  const { isloggedin, setloggedin } = useContext(AppContext)
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "", password: ""
  })

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => (
      // return an object to formdata
      {
        ...prevData,
        [event.target.name]: event.target.value
      }
    ))
  }

  function submitHandler(event) {
    event.preventDefault();
    setloggedin(true)
    toast.success("Logged in")
    navigate("/")
  }



  return (
    <div>
      <form className="flex flex-col w-full gap-y-4 mt-6" onSubmit={submitHandler}>
        <label className="w-full" htmlFor="">
          <p className="text-[0.875rem] text-black mb-1 leading-[1.375rem]">Email Address</p>
          <input type="email"
            className="text-[black] placeholder:text-slate-500 bg-[#f1dcff] bg-rounded-[0.5rem] w-full p-[9px] rounded-lg "
            placeholder='Enter Your Email'
            name='email'
            value={formData.email}
            required
            onChange={changeHandler}
          />
        </label>

        <div className="flex
                gap-x-4">
          <label className="relative w-full" htmlFor="">
            <p className="text-[0.875rem] text-black mb-1 leading-[1.375rem]">Create Password</p>
            <input type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              name="password"
              className="text-[black] placeholder:text-slate-500 bg-[#f1dcff] rounded-[0.5rem] w-full p-[9px]"
              onChange={changeHandler}
              value={formData.password}
            />
            <span className="absolute right-3 top-[40px] cursor-pointer" onClick={() =>
              setShowPassword(prev => !prev)}>
              {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
            </span>
         
          <Link to="#">
            <p className=" text-sm mt-1 text-blue-500 text-right">Forgot Password?</p>
          </Link>
        </label>
        </div>

        <button className='
                <button className="w-full mt-4 bg-[#5f154c] rounded-[8px] font-medium py-2 text-[#e6e6e6]'>
          Login
        </button>
      </form>
    </div>
  )
}
