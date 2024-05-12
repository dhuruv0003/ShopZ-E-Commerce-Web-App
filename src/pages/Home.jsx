import { useState, useEffect, useContext } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import Headers from "../components/Header";
import data from "./data";
import Category from "../components/Category";
import { AppContext } from "../Context/AppContext";
const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const { isDarkMode, setDarkMode, category, toggleDarkMode } = useContext(AppContext)

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
    else{
      return posts.filter((item)=>item.category===category)
    }
  }

  return (
    <div className={`${isDarkMode ? "bg-gradient-to-r from-slate-500 to-black transition-all duration-500" : "bg-gradient-to-r from-blue-100 to-purple-100"}`}>
      <Headers data={data} />
      <div className="w-[70%]  mb-6 mx-auto h-1 bg-purple-300 rounded-full shadow-black shadow-md"></div>
      <div className=" ">
        <Category />
      </div>
      {
        loading ? <Spinner /> :
          posts.length > 0 ?
            (<div className=" transition-all duration-300 ease-in-out grid grid-cols-1 sm-grid-cols-2 md:grid-cols-3  lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 md:space-x-5 md:px-5">

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
    </div>
  );
};

export default Home;
