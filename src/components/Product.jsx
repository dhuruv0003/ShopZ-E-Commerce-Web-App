import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";
import { Route, Routes, useNavigate } from "react-router-dom";

import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
const Product = ({ post }) => {

  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const {setProduct}=useContext(AppContext)

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  }


  return (
    <div className="flex flex-col items-center justify-between bg-gradient-to-r from-pink-100 to-indigo-100 hover:shadow-[0_20px_50px_rgba(8,_100,_104,_0.2)] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl transition duration-300 ease-in-out  gap-3 p-4 mt-10 mx-2 hover:scale-105">
      <div>
        <p className="text-gray-700 font-bold text-lg text-left truncate w-40 mt-1">{post.title}</p>
      </div>
      <div>
        <p className="w-40 text-gray-600 font-normal text-[14px] text-left  ">{post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
      </div>
      <div className=" w-[230px]  h-[180px]  flex justify-center items-center" >
                <img className=" h-full w-full rounded-full object-contain" loading="lazy" src={post.image} alt="" />
            </div>
      <p className=" text-green-600 font-bold text-2xl">${post.price}</p>

      <div className="flex justify-between gap-7 ">
        <div>
          <NavLink to="/productItem">
            <button className="text-gray-700 border-2 border-gray-700 font-bold rounded-full max-[600px]:text-md md:text-xs bg-white p-2 hover:bg-gradient-to-r  hover:from-purple-500 hover:to-purple-800 hover:text-gray-100" onClick={()=>setProduct(post)} >Buy Now</button>
          </NavLink>
        </div>

        {
          cart.some((p) => p.id === post.id) ?
            (<button
              className="text-gray-700 border-2 border-gray-700  rounded-full bg-white hover:bg-black max-[600px]:text-md px-3 p-2 transition duration-300 md:text-xs  ease-in-out hover:text-white  font-bold   "
              onClick={removeFromCart}>
              Remove Item
            </button>) :
            (<button
              className="text-gray-700 border-2 border-gray-700 max-[600px]:text-md px-3 p-2 md:text-xs  font-bold rounded-full bg-white hover:bg-gradient-to-r  hover:from-purple-500 hover:to-purple-800 hover:text-gray-100 " 
              onClick={addToCart}>
              Add to Cart
            </button>)
        }
      </div>


    </div>
  );
};

export default Product;
