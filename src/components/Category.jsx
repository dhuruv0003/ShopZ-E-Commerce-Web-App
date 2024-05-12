import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

export default function Category() {
  const {filterData,category,setCategory}=useContext(AppContext)
  return (
    <div className="mt-[5rem] max-w-[800px] mx-auto flex justify-evenly items-center">
      {
        filterData.map((categ,index)=>(
          <button className={` ${category===categ.title?" border-[3px] p-2  border-solid rounded-lg  border-black  shadow-lg bg-gradient-to-r  from-blue-300 to-purple-500  capitalize px-5":"  p-2  rounded-lg  border-black  shadow-lg bg-gradient-to-r  from-blue-200 to-purple-100 capitalize px-5"}`} key={index}onClick={()=>setCategory(categ.title)} >{categ.title}</button>
        ))
      }
    </div>
  )
}
