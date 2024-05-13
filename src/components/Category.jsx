import React, { useContext, useState } from 'react'
import { AppContext } from '../Context/AppContext'
import { TfiMenu } from "react-icons/tfi";

export default function Category() {
  const { filterData, category, setCategory } = useContext(AppContext)
  const [hide,setHide]=useState(true)
  return (
    <div className=" mt-[6rem] relative py-7 sm:flex-col max-w-[800px] mx-auto flex justify-evenly items-center md:-left-[4rem]">
      <div onClick={()=>setHide((prev)=>!prev)} className="absolute left-[1rem] text-3xl cursor-pointer">
        <TfiMenu />
      </div>
      <div className={`${hide?"hidden":"sm:flex flex  top-[4rem] flex-col absolute z-10 transition-all duration-300   transition- gap-5 sm:justify-evenly sm:item-center left-2"}`}>

        {
          filterData.map((categ, index) => (
            <button className={` ${category === categ.title ? " border-[3px] p-2  border-solid rounded-lg  border-black  shadow-lg bg-gradient-to-r  from-blue-300 to-purple-200  capitalize px-5" : "  p-2  rounded-lg  border-black  shadow-lg bg-gradient-to-r  from-blue-200 to-purple-100 capitalize px-5"}  ` } key={index} onClick={() => setCategory(categ.title)} >{categ.title}</button>
          ))
        }
      </div>
    </div>

  )
}
