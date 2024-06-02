import { useState, useEffect, useContext } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import Headers from "../components/Header";
import data from "./data";
import Category from "../components/Category";
import { NavLink } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { IoMdHeart } from "react-icons/io";


const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const { isDarkMode,setHide, setDarkMode, category, toggleDarkMode } = useContext(AppContext)

  async function fetchProductData() {
    setLoading(true);

    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    }
    catch (error) {
      console.log("Error aagya ji");
      setPosts([]);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchProductData();
  }, [])



  function getCategory() {
    if (category === "All") {
      return posts;
    }
    else {
      return posts.filter((item) => item.category === category)
    }
  }

  return (
    <div onClick={()=>setHide(true)} className={`${isDarkMode ? "bg-gradient-to-r from-slate-500 to-black transition-all duration-500" : "bg-gradient-to-r from-blue-100  to-purple-100"}max-[400px]:px-[0.5rem]`}>
     
        <div className={`${isDarkMode ? "bg-gradient-to-r from-slate-500 to-black" : "bg-gradient-to-r from-blue-100 to-purple-300"} `}>
          <Category />
        </div>
        <Headers data={data} />
      
      <div className="w-[70%]  mb-6 mx-auto h-1 bg-purple-300 rounded-full shadow-black shadow-md">
      </div>

      {
        loading ? <Spinner /> :
          posts.length > 0 ?
            (<div className=" transition-all duration-300 ease-in-out grid grid-cols-1 w-[90%] sm-grid-cols-2 md:grid-cols-3  lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 md:space-x-5 md:px-5">

              {
                getCategory().map((post) => (
                  <Product key={post.id} post={post} />

                ))
              }
            </div>) :
            <div className="flex justify-center items-center">
              <p>No Data Found</p>
            </div>
      }
      
      <footer className={`${isDarkMode ? 'bg-gradient-to-r from-slate-400 to-slate-950 shadow-slate-900 shadow-lg text-white z-50 w-full fixed top-0' : 'bg-gradient-to-r from-pink-100 to-indigo-500 shadow-black shadow-lg  z-50 w-full '}max-[600px]:py-6 py-6 mt-10 flex flex-col gap-5 `}>
        <div className="max-[600px]:flex max-[600px]:flex-col  flex justify-center max-[600px]:gap-1 gap-5 items-center text-xl px-10 font-extrabold ">
          <NavLink to='/'>
            Home
          </NavLink>
          <NavLink to='/login'>
            Login
          </NavLink>
          <NavLink to='/signup'>
            Sign Up
          </NavLink>
          <NavLink to='/contact'>
            Contact Us
          </NavLink>
          <NavLink to='/cart'>
            Cart
          </NavLink>
        </div>
        <span className="flex justify-center items-center gap-2 font-bold ">
          Made With <IoMdHeart className="text-[red]" /> by Dhuruv Kumar
        </span>
      </footer>

    </div>
  );
};

export default Home;
