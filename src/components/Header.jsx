
import { useDispatch, useSelector } from "react-redux";
import SlideShow from "./SlideShow";
import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Header({ data }) {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        lazyLoad: true,
       class:"name"
       
    };

    const { isDarkMode, setDarkMode, toggleDarkMode } = useContext(AppContext)
    return (
        <div className={`${isDarkMode ? "bg-gradient-to-r border-b-8  border-purple-400 from-slate-500 to-black" : "bg-gradient-to-r border-b-8 border-black from-blue-100 to-purple-300"} w-[100%] overflow-hidden flex justify-center  rounded-b-[20%] my-[6rem] space-x-6 px-8`} >
            <div className="rounded-full flex flex-col gap-6  max-w-[1200px] mx-auto justify-evenly items-center" >
                <div className=" h-fit flex-col shadow-black shadow-lg bg-white   w-full p-14 flex gap-4 my-5 bg-cover bg-no-repeat transition-all duration-300 ease-in-out bg-fixed gradient-border " id="box" style={{ backgroundImage: `url(${"https://tailwindcomponents.com/gradient-generator/assets/header.a6837f08.webp"})` }}>
                    <h1 className=" text-center text-3xl font-bold bg-gradient-to-r from-red-200 to-purple-100 text-transparent bg-clip-text" >Hey GenZ Welcome To SHOPZ</h1>
                    <h1 className="text-5xl  text-center text-white font-bold">The Only Solution for Your needs</h1>
                </div>


                <div className="w-[300px] sm:w-[400px] md:w-[600px] lg:w-[700px]  ">
                    <Slider {...settings}>
                        {
                            data.map((slide, index) => {
                                return (
                                    <div key={index} className="w-[90%] mx-auto  lg:w-[24%] ">
                                        <SlideShow key={slide.id}
                                            {...slide} />

                                    </div>

                                )
                            })
                        }
                    </Slider>;
                </div>

            </div>


        </div>)
}