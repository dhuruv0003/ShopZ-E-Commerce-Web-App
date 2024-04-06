
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
        <div className="">
          <h1 className="">{item.title}</h1>
          <h1 className="">{item.description}</h1>
          <div className="">
            <p className="">{item.price}</p>
            <div className=""
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
