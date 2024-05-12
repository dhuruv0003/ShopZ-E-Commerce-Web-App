import React from 'react'
import Loginform from './Loginform'
import frame from '../assets/frame.png'
import SignupForm from './SignupForm'
import { FcGoogle } from "react-icons/fc"

export default function Template({ title, desc, image, formtype }) {
    return (
        <div className="flex flex-wrap-reverse h-max justify-between   mt-[6rem] w-11/12 mx-auto max-w-[1160px]  py-9 gap-x-12 gap-y-8">
            <div className="Left-Section mx-auto flex-col w-11/12 max-w-[450px]">
                <h1 className='text-black font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>
                <p className='flex flex-col text-[1.125rem] leading-[1.625rem] mt-4'>{desc}</p>
                {
                    formtype === "signup" ? (<SignupForm />) : (<Loginform />)
                }
                <div className="flex mx-auto w-full items-center my-4 gap-x-2">
                    <div className="h-[1px] w-full bg-slate-800 "></div>
                    <p className="font-medium leading-[1.375rem]"> OR </p>
                    <div className="h-[1px] w-full bg-slate-800 "></div>
                </div>

                <button className="w-full rounded-[8px] font-medium border border-slate-900 px-[12px] py-[8px] gap-x-2 mt-6 flex items-center justify-center">
                    <FcGoogle />Sign in With Google
                </button>

            </div>
            <div className="md:mt-[1.5rem] relative transition-all duration-150 mx-auto w-11/12 max-w-[450px]">
                <img src={frame} alt="" width={558}
                    height={504}
                    loading='lazy' />
                <img src={image} alt="" width={558}
                    
                    loading='lazy'
                    className="rounded-md absolute -top-3 right-3 h-[410px] w-[450px] mx-auto" />
            </div>

        </div>
    )
}
