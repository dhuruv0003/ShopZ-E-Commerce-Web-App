
import { useDispatch, useSelector } from "react-redux";
import SlideShow from "./SlideShow";

import { useState } from "react";

export default function Header({ data }) {


    return (
        <div className="w-[100%] overflow-x-hidden sm:h-[100vh] flex justify-center  rounded-b-[20%] border-b-8 border-black  bg-gradient-to-r from-red-200 to-purple-400  my-[6rem] space-x-6 px-8">
            <div className="rounded-full flex flex-col gap-6  max-w-[1200px] mx-auto justify-evenly items-center" >
                <div className=" h-fit flex-col shadow-black shadow-lg bg-white   w-full p-14 flex gap-4 my-5 bg-cover bg-no-repeat transition-all duration-300 ease-in-out " style={{ backgroundImage: `url(${"https://tailwindcomponents.com/gradient-generator/assets/header.a6837f08.webp"})` }}>
                    <h1 className=" text-center text-3xl font-bold bg-gradient-to-r from-red-200 to-purple-100 text-transparent bg-clip-text" >Hey GenZ Welcome To SHOPZ</h1>
                    <h1 className="text-5xl  text-center text-white font-bold">The Only Solution for Your needs</h1></div>

                <div className="text-center flex flex-wrap  text-black gap-3">

                    {
                        data.map((slide) => {
                            return (
                                <div className="w-[90%] mx-auto lg:w-[24%] "><SlideShow key={slide.id}
                                    {...slide} />
                                    
                                </div>

                            )
                        })
                    }

                </div>
            </div>


        </div>)
}