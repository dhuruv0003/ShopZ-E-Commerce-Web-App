import { FaShoppingCart } from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"

const Navbar = () => {

    const { cart } = useSelector((state) => state);

    return (
        <div >
            <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">

                <NavLink to="/">
                    <div className="ml-5">
                        <img src={logo} className="h-14" />
                    </div>
                </NavLink>

                <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
                    <NavLink to="/">
                        <p>Home</p>
                    </NavLink>

                    <NavLink to="/cart">
                        <div className="relative">
                            <FaShoppingCart className="text-2xl"/>
                            {
                                cart.length > 0 &&
                                <span className=" absolute -top-3 bg-green-600 rounded-[100%] w-5 h-5 flex justify-center items-center font-bold animate-bounce -right-2 text-xs">{cart.length}</span>
                            }

                        </div>
                    </NavLink>

                </div>
            </nav>
        </div>
    )
};

export default Navbar;
