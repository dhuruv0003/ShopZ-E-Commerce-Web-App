
import SlideShow from "./SlideShow";

import { useState } from "react";

export default function Header({ data }) {



    return (
        <div className="w-[100%] overflow-x-hidden sm:h-[100vh] flex justify-center  rounded-b-[20%] border-b-8 border-black bg-slate-600 my-[5rem] space-x-6 px-8">
            <div className="rounded-full flex flex-col gap-6  max-w-[1200px] mx-auto justify-evenly items-center">
                <div className=" h-fit flex-col bg-white rounded-full text-slate-800 w-full p-5 flex gap-4">
                    <h1 className=" text-center text-3xl " >Hey GenZ Welcome To </h1>
                    <h1 className="text-8xl  text-center">ShopZ</h1></div>
                <div className="text-center flex flex-wrap  text-black gap-3">

                    {
                        data.map((slide) => {
                            return (
                                <div className="w-[100%] lg:w-[24%]"><SlideShow key={slide.id}
                                    {...slide} /></div>


                            )
                        })
                    }

                </div>
            </div>


        </div>)
}