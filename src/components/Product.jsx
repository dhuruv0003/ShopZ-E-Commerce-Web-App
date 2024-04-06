import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {add ,remove} from "../redux/Slices/CartSlice";

const Product = ({post}) => {

  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  }

  return (
    <div className="flex flex-col items-center justify-between hover:shadow-[0_20px_50px_rgba(8,_100,_104,_0.2)] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 hover:scale-105 ">
      <div>
        <p className="text-gray-700 font-bold text-lg text-left truncate w-40 mt-1">{post.title}</p>
      </div>
      <div>
        <p className="w-40 text-gray-600 font-normal text-[14px] text-left  ">{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
      </div>
      <div className="h-[180px]">
        <img src={post.image} className="h-full w-full" />
      </div>

      <div className="">
        <div>
          <p className="">${post.price}</p>
        </div>
        
        {
          cart.some((p) => p.id == post.id) ?
          (<button
          className=""
          onClick={removeFromCart}>
            Remove Item
          </button>) :
          (<button
          className=""
          onClick={addToCart}>
            Add to Cart
          </button>)
        }
      </div>
     

    </div>
  );
};

export default Product;
