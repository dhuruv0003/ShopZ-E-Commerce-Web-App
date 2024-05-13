import React, { useContext, useState } from 'react'
import { AppContext } from '../Context/AppContext'
import { TfiMenu } from "react-icons/tfi";

export default function Category() {
  const { filterData, category, setCategory } = useContext(AppContext)
  const [hide,setHide]=useState(true)
  return (
    <div className=" mt-[6rem] relative pt-[4rem] sm:flex-col max-w-[800px] mx-auto flex justify-evenly items-center md:-left-[4rem]">
      <div onClick={()=>setHide((prev)=>!prev)} className="absolute md:left-[2rem] left-[1rem] text-2xl  flex  items-center gap-3  text-[#ffffff] cursor-pointer ">

        <TfiMenu  className='font-extrabold text-4xl shadow-md  shadow-rose-950 bg-gradient-to-r from-pink-500 to-indigo-400 '/> <p className=' text-3xl font-bold bg-gradient-to-r from-pink-500 to-indigo-400 p-2 inline-block text-transparent bg-clip-text'>Category</p>
      </div>
      <div className={`${hide?"hidden":"sm:flex flex  top-[6.2rem] flex-col absolute z-10 transition-all duration-300   transition- gap-5 sm:justify-evenly sm:item-center left-6"}`}>

        {
          filterData.map((categ, index) => (
            <button className={` ${category === categ.title ? " border-[3px] p-2  border-solid rounded-lg  border-black  shadow-lg bg-gradient-to-r  from-blue-300 to-purple-200  capitalize px-5" : "  p-2  rounded-lg  border-black  shadow-lg bg-gradient-to-r  from-blue-200 to-purple-100 capitalize px-5"}  ` } key={index} onClick={() => setCategory(categ.title)} >{categ.title}</button>
          ))
        }
      </div>
    </div>

  )
}
