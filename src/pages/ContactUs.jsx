import React, { useState } from 'react'
import toast from 'react-hot-toast';

export const ContactUs = () => {

    const[formData,setFormData] = useState({
        name1:"",phoneno:"" ,email:"",message:""
    });
function changeHandler(event){
    setFormData((prevData)=>({
        ...prevData,
        [event.target.name]:event.target.value
    }))
}
    function submitHandler(event){
        event.preventDefault();
        toast.success("Message send");
    }
  return (
    <div className=' flex justify-center items-center h-screen'>
        <form onSubmit = {submitHandler} action = "" >
            <label className='flex flex-col'>Enter your Name
                <input required type = "text" placeholder='Gungun Saluja' onChange={changeHandler} name = "name1"></input>
            </label>
            <label className='flex flex-col'>Enter  Phone number 
                <input required type = "number" placeholder='999999999' onChange= {changeHandler} name = "phoneno"></input>
            </label>
            <label className='flex flex-col'>Enter your email
                <input required type = "email" placeholder='gundhuruv@7469.com' onChange={changeHandler} name = "email"></input>
            </label>
            <label className='flex flex-col'>Enter your message
                <textarea name = "message">message daal do </textarea>
            </label>
            <button type = "submit" >Submit</button>
            </form>
    </div>
  )
}
