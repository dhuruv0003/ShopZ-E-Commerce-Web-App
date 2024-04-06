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
    <div className="">
      <div>
        <p className="">{post.title}</p>
      </div>
      <div>
        <p className="">{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>
      <div className="">
        <img src={post.image} className="" />
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
