import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="mt-[7rem] w-[100vw] h-fit mx-auto" >
      {cart.length > 0 ? (
        <div className="flex items-center justify-evenly w-[100vw]">
          <div className="">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="flex flex-col items-center justify-around min-h-[100%]">
            <div className="">
              <div className=" ">
                <div className="">Your Cart</div>
                <div className=" uppercase font-extrabold text-green-600 text-3xl">Summary</div>
                <p className="">
                  <span className="">Total Items: {cart.length}</span>
                </p>
              </div>
            </div>

            <div className="">
              <p className=""><span className="">Total Amount:</span> ${totalAmount}</p>
              <button className="">CheckOut Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-2 h-[500px]">
          <h1 className="text-xl font-bold text-blue-900">
            Your cart is empty!
          </h1>
          <Link to={"/"}>
            <button className="text-gray-700 border-2 border-gray-700  rounded-full bg-white hover:bg-green-600 p-1 px-3 transition duration-300 ease-in-out hover:text-white text-lg font-bold  ">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
