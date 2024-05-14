import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { AppContext } from '../Context/AppContext';


export const ContactUs = () => {

    const { isDarkMode, setDarkMode, category, toggleDarkMode } = useContext(AppContext)

    const [formData, setFormData] = useState({
        name1: "", phoneno: "", email: "", message: ""
    });
    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }))
    }
    function submitHandler(event) {
        event.preventDefault();
        toast.success("Message send");
    }
    return (
        <div className={`${isDarkMode?"bg-gradient-to-r from-slate-400 to-slate-950 shadow-slate-900 300 py-[8rem] h-fit md:w-screen max-[400px]:px-[0.5rem]":'bg-gradient-to-r from-blue-100 to-purple-300 py-[8rem]  h-fit  md:w-screen max-[400px]:px-[0.5rem] '}`}>

            <form className='mt-4 max-w-[550px] mx-auto flex flex-col gap-y-3' onSubmit={submitHandler} action="" >
                <h1 className='text-center text-white text-3xl font-bold rounded-se-2xl rounded-ls-2xl  bg-purple-900 bg-rounded-[0.5rem] p-[19px] w-full '>Please Enter Your Queries</h1>
                <label className='w-full relative'>
                    <p className="text-[0.875rem] text-black mb-1 leading-[1.375rem]">Enter your Name</p>
                    <input required type="text" placeholder='Mr xyz' className="text-[black] placeholder:text-slate-500 bg-[#f9f0ff] bg-rounded-[0.5rem] w-full p-[9px] rounded-lg " onChange={changeHandler} value={formData.name1} name="name1"></input>
                </label>
                <label className='w-full relative'>
                    <p className="text-[0.875rem] text-black mb-1 leading-[1.375rem]">Enter  Phone number </p>
                    <input required type="number" placeholder='+91 9874487551' onChange={changeHandler} className="text-[black] placeholder:text-slate-500 bg-[#f9f0ff]  bg-rounded-[0.5rem] w-full p-[9px] rounded-lg " value={formData.phoneno} name="phoneno"></input>
                </label>
                <label className='w-full relative'>
                    <p className="text-[0.875rem] text-black mb-1 leading-[1.375rem]">Enter Your Email </p>
                    <input required type="email" placeholder='abcd@gmail.com' onChange={changeHandler} className="text-[black] placeholder:text-slate-500 bg-[#f9f0ff]  bg-rounded-[0.5rem] w-full p-[9px] rounded-lg " value={formData.email} name="email"></input>
                </label>
                <label className='w-full relative'>
                    <p className="text-[0.875rem] text-black mb-1 leading-[1.375rem]">Enter Your Message </p>
                    <textarea placeholder='Enter Message' className="text-[black] placeholder:text-slate-500 bg-[#f9f0ff]  bg-rounded-[0.5rem] w-full p-[9px] rounded-lg" rows={10} cols={50} value={formData.message} name="message" />
                </label>
                <button className='
               w-full mt-4 bg-[#5f154c] rounded-[8px] font-medium py-2 text-[#e6e6e6]' type="submit" >Submit</button>
            </form>
        </div>
    )
}
