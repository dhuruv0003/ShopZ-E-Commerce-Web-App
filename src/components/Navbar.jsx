import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const {cart} = useSelector((state) => state);

  return (
    <div >
      <nav className="">

        <NavLink to="/">
          <div className="">
          <img src="../logo.png" className=""/>
          </div>
        </NavLink>

          <div className="">
            <NavLink to="/">
              <p>Home</p>
            </NavLink>

            <NavLink to="/cart">
              <div className="">
                  <FaShoppingCart className=""/>
                  {
                    cart.length > 0 &&
                    <span
                    className="" 
                    >{cart.length}</span>
                  }
                  
              </div>
            </NavLink>
            
          </div>
      </nav>
    </div>
  )
};

export default Navbar;
