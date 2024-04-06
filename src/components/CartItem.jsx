
import {AiFillDelete} from "react-icons/ai"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className=" ">
      <div className="">
        <div className="">
          <img className="" src={item.image} />
        </div>
        <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
          <h1 className="text-xl text-slate-700 font-semibold">{item.title}</h1>
          <h1 className="text-base text-slate-700 font-medium">{item.description}</h1>
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-green-600">{item.price}</p>
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
