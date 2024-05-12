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

  console.log(isloggedin);

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

        <label htmlFor="">
          <p className="text-[0.875rem] text-black mb-1 leading-[1.375rem]">
            Password <sup className="text-[red]">*</sup>
          </p>
          <input type={showPassword ? "text" : "password"}
            className="text-[black] placeholder:text-slate-500 bg-[#f1dcff] bg-rounded-[0.5rem] w-full p-[9px] rounded-lg"
            placeholder='abcd@123'
            name='password'
            value={formData.password}
            onChange={changeHandler}
            required
          />

          <span className="absolute right-3 top-[40px] cursor-pointer"
            // Jaise hi eye par click kere password visible ho jaye and eye par slash aa jaye, and vice versa for next click
            onClick={() =>
              setShowPassword((prev) => (!prev))
            }
          >
            {
              showPassword ?
                (<AiOutlineEyeInvisible fontSize={24} />) :
                (<AiOutlineEye fontSize={24} />)
            }
          </span>
          <Link to="#">
            <p className=" text-sm mt-1 text-blue-500 text-right">Forgot Password?</p>
          </Link>
        </label>

        <button className='
                <button className="w-full mt-4 bg-[#5f154c] rounded-[8px] font-medium py-2 text-[#e6e6e6]'>
          Login
        </button>
      </form>
    </div>
  )
}
