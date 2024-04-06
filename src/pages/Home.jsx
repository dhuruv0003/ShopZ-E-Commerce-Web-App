import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);

    try{
      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data);
    }
    catch(error) {
      console.log("Error aagya ji");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect( () => {
    fetchProductData();
  },[])

  return (
    <div className="mt-[7rem]">
      {
        loading ? <Spinner />  :
        posts.length > 0 ? 
        (<div className=" grid grid-cols-1 md:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 md:space-x-5 md:px-5">
          {
            posts.map( (post) => (
            <Product key = {post.id} post={post}/>
          ) )
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
