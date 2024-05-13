import { useContext } from "react"
import { AppContext } from "../Context/AppContext"
import { NavLink } from "react-router-dom"; 
import { useDispatch, useSelector } from "react-redux";
import { add,remove } from "../redux/Slices/CartSlice";
export default function SlideShow({ slide }) {

    const { product, setProduct } = useContext(AppContext);
    const {cart} = useSelector(state=>state);
    const dispatch = useDispatch();
    

    return (
        <div className="bg-white p-6 h-[450px] flex flex-col justify-evenly items-center  transition-all duration-300 rounded-3xl md:rounded-full ease-in-out ">
            <div className="font-bold text-center">{`${slide.title.substring(0,30)}...`}</div>
            <div className=" w-full flex justify-center items-center" ><img className=" rounded-t-full h-[120px]  object-cover " src={slide.image} alt="" /></div>
            <div className="text-center text-green-600 font-extrabold">${slide.price}</div>
            <div className=" w-[70%] mx-auto text-justify">{slide.description.substring(0,120)}</div>
            <div className="flex gap-3">
            <NavLink to="/productItem">
                
                <button
                    className = "text-gray-700 border-2 border-gray-700  font-bold rounded-full px-1 w-[100px] p-1 " onClick={() => {
                        setProduct(slide)
    
                    }} >Buy now
                </button>
               
                </NavLink>
              {cart.some((it)=>it.id===slide.id)?(
                 <button
                 className="text-gray-700 border-2 border-gray-700  font-bold rounded-full px-1 w-[120px] p-1 " onClick={() => {
                     dispatch(remove(slide.id));
                 
 
                 }} >Remove Cart
             </button>
                ):(
                    <button
                    className="text-gray-700 border-2 border-gray-700  font-bold rounded-full px-1 w-[120px] p-1 " onClick={() => {
                        dispatch(add(slide));
                    
    
                    }} >Add to Cart</button>
               )
}

            </div>
            
        </div>
    )
}