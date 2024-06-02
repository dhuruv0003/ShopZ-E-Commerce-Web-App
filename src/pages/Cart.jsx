import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link} from "react-router-dom";
import CartItem from "../components/CartItem";
import { AppContext } from "../Context/AppContext";
import { NavLink } from 'react-router-dom';
import { IoMdHeart } from 'react-icons/io';
import { AiFillGithub } from "react-icons/ai";

const Cart = () => {
  const { cart } = useSelector((state) => state);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  const { isDarkMode, hide, setHide } = useContext(AppContext)

  return (

    <div onClick={() => setHide(true)} className={`${isDarkMode ? "bg-gradient-to-r  from-slate-500 text-white to-black " : "bg-gradient-to-r from-blue-100  to-purple-100"} max-[400px]:px-[0.5rem]  pt-[7rem]`}>
      {cart.length > 0 ? (
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center ">
          <div className="w-[100%] md:w-[60%] flex flex-col p-2">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="w-[100%] md:w-[40%] mb-24 flex flex-col mx-3 justify-between">
            <div className="flex flex-col p-5 gap-5 my-14 h-[100%] ">
              <div className=" flex flex-col gap-5 ">
                <div className="font-semibold text-xl text-green-800">Your Cart</div>
                <div className=" font-semibold text-5xl text-green-700  -mt-5">Summary</div>
                <p className="text-xl">
                  <span className="font-semibold text-xl">Total Items: {cart.length}</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col">
              <p className="text-xl font-bold"><span className="font-semibold">Total Amount:</span> ${totalAmount}</p>
              <button className="bg-[#5f154c] hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-purple-800 font-bold hover:text-green-700 p-3 text-xl">CheckOut Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[70vh] flex flex-col items-center justify-center">
          <h1 className=" font-semibold text-xl text-slate-500 mb-2">
            Your cart is empty!
          </h1>
          <Link to={"/"}>
            <button className="uppercase bg-[#5f154c] hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-purple-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider ">
              Shop Now
            </button>
          </Link>
        </div>
      )}
       <footer className={`${isDarkMode ? 'bg-gradient-to-r from-slate-400 to-slate-950 shadow-slate-900 shadow-lg text-white z-50 w-full ' : 'bg-gradient-to-r from-pink-100 to-indigo-500 shadow-black shadow-lg  z-50 w-full '}max-[600px]:py-6 py-6 mt-10 max-[600px]:flex sm:flex sm:flex-col gap-5 `}>
        <div className="max-[600px]:flex max-[600px]:flex-col  flex justify-center  max-[600px]:gap-1 gap-5 items-center max-[600px]:text-lg sm:text-xl px-8 font-extrabold ">
          <NavLink to='/'>
            Home
          </NavLink>
          <NavLink to='/login'>
            Login
          </NavLink>
          <NavLink to='/signup'>
            Sign up
          </NavLink>
          <NavLink to='/contact'>
            Contact 
          </NavLink>
          <NavLink to='/cart'>
            Cart
          </NavLink>
        </div>
        <div className="flex justify-center items-center gap-x-2 font-bold ">
          Made With<IoMdHeart className="text-[red] max-[600]:text-5xl mr-4 text-2xl flex " />by Dhuruv Kumar <NavLink className='text-2xl' to='https://github.com/dhuruv0003/ShopZ-E-Commerce-Web-App'><AiFillGithub /></NavLink>
        </div>
      </footer>
    </div>
  );
};

export default Cart;
