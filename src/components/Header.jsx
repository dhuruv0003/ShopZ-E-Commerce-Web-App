
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
        class: "name"

    };

    const { isDarkMode} = useContext(AppContext)
    return (
        <div className={`${isDarkMode ? "bg-gradient-to-r border-b-8  border-purple-400 from-slate-500 to-black" : "bg-gradient-to-r border-b-8 border-black from-blue-100 to-purple-300"} w-[100%] overflow-hidden flex justify-center  rounded-b-[20%] mb-[2rem] space-x-6 px-8`} >
            <div className="rounded-full flex flex-col gap-6  max-w-[1200px] mx-auto justify-evenly items-center" >


                <div className="w-[400px] sm:w-[400px] md:w-[600px] my-[2rem] lg:w-[700px] xl:w-[900px] p-6 bg-transparent ">
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
                    </Slider>
                </div>

            </div>


        </div>)
}