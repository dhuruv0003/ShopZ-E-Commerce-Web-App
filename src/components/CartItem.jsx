
import {AiFillDelete} from "react-icons/ai"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

import { FaStar } from "react-icons/fa";

const CartItem = ({item, itemIndex}) => {
  // const {cart} = useContext(state=>state);
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className=" flex items-center p-2 md:p-5 justify-between shadow-[0_3px_10px_rgb(0,0,0,0.2)]  mt-2 mb-2 md:mx-5 ">
     
      <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">
        <div className="w-[30%]">
          <img className="object-cover hover:scale-110 transition-all duration-300" src={item.image} />
        </div>
        <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
          <h1 className="text-xl font-semibold">{item.title.split(" ").slice(0,6).join(" ")+".."}</h1>
          <h1 className="text-base  font-medium">{item.description.split(" ").join(" ")+""}</h1>
          <div>
                        <p className=" font-bold text-xl flex gap-1 items-center text-left  mt-1">ratings : {item.rating.rate}<FaStar /> ({item.rating.count})</p>
                    </div>
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-green-600 ">${item.price}</p>
            <div className="text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
            onClick={removeFromCart}>
              <AiFillDelete/>
            </div>
          </div>
        </div> 
      </div>

    </div>
  );
};

export default CartItem;
