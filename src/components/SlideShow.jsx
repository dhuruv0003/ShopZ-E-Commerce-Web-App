import { useContext } from "react"
import { AppContext } from "../Context/AppContext"
import { NavLink } from "react-router-dom"; 
export default function SlideShow({ slide }) {

    const { product, setProduct } = useContext(AppContext);

    return (
        <div className="bg-white p-6 h-[450px] flex flex-col justify-evenly items-center  transition-all duration-300 rounded-3xl md:rounded-full ease-in-out ">
            <div className="font-bold text-center">{`${slide.title.substring(0,30)}...`}</div>
            <div className=" w-full flex justify-center items-center" ><img className=" rounded-t-full h-[120px]  object-cover " src={slide.image} alt="" /></div>
            <div className="text-center text-green-600 font-extrabold">${slide.price}</div>
            <div className=" w-[70%] mx-auto text-justify">{slide.description.substring(0,120)}</div>
            <NavLink to="/productItem">
            <button
                className="text-gray-700 border-2 border-gray-700 text-lg font-bold rounded-full px-2 w-[100px] p-1 " onClick={() => {
                    setProduct(slide)

                }} >Buy now
            </button>
            </NavLink>
        </div>
    )
}