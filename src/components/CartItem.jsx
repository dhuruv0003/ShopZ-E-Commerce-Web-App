
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
    <div className="w-3/4 flex flex-col justify-between items-center  ">
      <div className="">
        <div className="h-[180px]">
          <img className="h-full" src={item.image} />
        </div>
        <div className="text-justify">
          <h1 className="">{item.title.split(" ").slice(0,6).join(" ")+".."}</h1>
          <h1 className="">{item.description.split(" ").slice(0,7).join(" ")+"..."}</h1>
          <div className="">
            <p className="">{item.price}</p>
            <div className=""
            onClick={removeFromCart}>
              <AiFillDelete/>
            </div>
          </div>
          <div className="w-full h-1 my-4 bg-black"></div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
