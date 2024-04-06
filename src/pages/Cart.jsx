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
    <div className="mt-[7rem]" >
      {cart.length > 0 ? (
        <div className="">
          <div className="">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="">
            <div className="">
            <div className=" ">
            <div className="">Your Cart</div>
              <div className="">Summary</div>
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
        <div className="">
          <h1 className="">
            Your cart is empty!
          </h1>
          <Link to={"/"}>
            <button className="">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
