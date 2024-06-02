import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { AppContext } from '../Context/AppContext'

export default function SignupForm() {

  const { isloggedin, setloggedin } = useContext(AppContext)

  const [formData, setFormData] = useState({
    firstname: "", lastname: "",
    email: "", password: "", confirmpass: ""
  })

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value
    }))
  }

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false)

  const [showConfPassword, setShowConfPassword] = useState(false)

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmpass) {
      toast.error("Password do not match")
    }
    else {
      toast.success("Successfull created account");
      setloggedin(true);
      navigate("/");
    }
  }
  return (
    <div>
      <form onSubmit={submitHandler} className='mt-4 flex flex-col gap-y-3' action="">
        <label className='w-full relative' htmlFor="">
          <p className='text-[0.875rem] text-black mb-1 leading-[1.375rem]'>Enter FirstName</p>
          <input type="text"
            className="text-[black] placeholder:text-slate-500 bg-[#f1dcff] rounded-[0.5rem] w-full p-[9px]"
            required
            placeholder='Raju'
            name='firstname'
            value={formData.firstname}
            onChange={changeHandler}
          />
        </label>

        <label className="w-full relative" htmlFor="">
          <p className="text-[0.875rem] text-black mb-1 leading-[1.375rem]">Enter LastName</p>
          <input type="text"
            className='text-[black]  rounded-[0.5rem] placeholder:text-slate-500 bg-[#f1dcff] w-full p-[9px]'
            required
            placeholder='kumar'
            name='lastname'
            value={formData.lastname}
            onChange={changeHandler}
          />
        </label>

        <label htmlFor="w-full ">
          <p className='text-[0.875rem] text-black mb-1 leading-[1.375rem]'>Enter Email</p>
          <input type="email"
            onChange={changeHandler}
            value={formData.email}
            name="email"
            placeholder="Enter email address"
            required
            className="text-[black] placeholder:text-slate-500 bg-[#f1dcff] rounded-[0.5rem] w-full  p-[9px]"
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
          </label>
        </div>

        <label className='relative w-full' htmlFor="">
          <p className="text-[0.875rem] text-black mb-1 leading-[1.375rem]">Confirm Password</p>
          <input type={showConfPassword ? "text" : "password"}
            placeholder="Enter Password"
            name="confirmpass"
            className="text-[black] placeholder:text-slate-500 bg-[#f1dcff] bg-rounded-[0.5rem] w-full p-[9px] "
            onChange={changeHandler}
            value={formData.confirmpass}
          />
          <span className="absolute right-3 top-[40px] cursor-pointer" onClick={() =>
            setShowConfPassword(prev => !prev)}>
            {showConfPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
          </span>
        </label>
        <button className='
               w-full mt-4 bg-[#5f154c] rounded-[8px] font-medium py-2 text-[#e6e6e6]'>Create Account</button>

      </form>

    </div>
  )
}
