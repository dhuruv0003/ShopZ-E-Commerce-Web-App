import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import { FaStar } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideShow from './SlideShow';

export default function ProductItem() {
    const { product, setProduct } = useContext(AppContext)


    const data = [
        {
            "id": 1,
            "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price": 109.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            "rating": {
                "rate": 3.9,
                "count": 120
            }
        },
        {
            "id": 2,
            "title": "Mens Casual Premium Slim Fit T-Shirts ",
            "price": 22.3,
            "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            "rating": {
                "rate": 4.1,
                "count": 259
            }
        },
        {
            "id": 3,
            "title": "Mens Cotton Jacket",
            "price": 55.99,
            "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
            "rating": {
                "rate": 4.7,
                "count": 500
            }
        },
        {
            "id": 4,
            "title": "Mens Casual Slim Fit",
            "price": 15.99,
            "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
            "rating": {
                "rate": 2.1,
                "count": 430
            }
        },
        {
            "id": 5,
            "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
            "price": 695,
            "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
            "category": "jewelery",
            "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
            "rating": {
                "rate": 4.6,
                "count": 400
            }
        },
        {
            "id": 6,
            "title": "Solid Gold Petite Micropave ",
            "price": 168,
            "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
            "category": "jewelery",
            "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
            "rating": {
                "rate": 3.9,
                "count": 70
            }
        },
        {
            "id": 7,
            "title": "White Gold Plated Princess",
            "price": 9.99,
            "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
            "category": "jewelery",
            "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
            "rating": {
                "rate": 3,
                "count": 400
            }
        },
        {
            "id": 8,
            "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
            "price": 10.99,
            "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
            "category": "jewelery",
            "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
            "rating": {
                "rate": 1.9,
                "count": 100
            }
        },
        {
            "id": 9,
            "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
            "price": 64,
            "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
            "category": "electronics",
            "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
            "rating": {
                "rate": 3.3,
                "count": 203
            }
        },
        {
            "id": 10,
            "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
            "price": 109,
            "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
            "category": "electronics",
            "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
            "rating": {
                "rate": 2.9,
                "count": 470
            }
        },
       

    ];
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true

    };

    const {isDarkMode,setHide} =useContext(AppContext);

    return (
        <div onClick={()=>setHide(true)} className={`${isDarkMode ? "bg-gradient-to-r  from-slate-500 text-white to-black" : "bg-gradient-to-r from-blue-100  to-purple-100"}  max-[400px]:px-[0.5rem] min-h-screen h-full py-[10rem]` }>
            <div  className={` max-w-[1000px]  mx-auto flex flex-wrap justify-center gap-[5rem] bg-transparent min-h-max`}>

                <div className="sm:w-[30%] ">
                    <img src={product.image} className="h-[400px] w-[350px]" />
                </div>

                <div className="flex flex-col justify-evenly gap-[2rem] sm:w-[60%] h-fit capitalize ">
                    <div>
                        <p className={`${isDarkMode?"text-white":"text-gray-700"} font-bold text-3xl text-left truncate  mt-1`}>{product.category}</p>
                    </div>
                    <div>
                        <p className={`${isDarkMode?"text-white":"text-gray-700"} font-bold text-xl text-left  mt-1`}>{product.title}</p>
                    </div>
                    <div className='w-[300px] sm:w-full'>
                        <p className={`${isDarkMode?"text-white":"text-gray-700"}font-normal text-[15px] text-left  `}>{product.description}</p>
                    </div>

                    <p className=" text-green-600 font-bold text-2xl">${product.price}</p>

                    <div>
                        <p className={`${isDarkMode?"text-white":"text-gray-700"}font-bold text-xl flex gap-1 items-center text-left  mt-1`}>ratings : {product.rating.rate}<FaStar /> ({product.rating.count})</p>
                    </div>


                    <button className={`${isDarkMode?"text-white border-gray-100 ":"text-gray-700"}border-2 border-gray-700 text-lg font-bold rounded-full px-2 w-[200px] p-1`} onClick={() => setProduct(product)} >Buy Now</button>


                </div>
                <h1 className='text-3xl font-extrabold'>Items You may Also Like</h1>
                <div className="w-3/4 h-[400px] bg">
                    <Slider {...settings}>
                        {
                            data.map((slide, index) => {
                                return (
                                    <div key={index} className="w-[90%]  mx-auto  lg:w-[24%] ">
                                        <SlideShow key={slide.id}
                                            slide={slide} />

                                    </div>

                                )
                            })
                        }
                    </Slider>
                </div>





            </div >
            <footer className={`${isDarkMode ? 'bg-gradient-to-r from-slate-400 to-slate-950 shadow-slate-900 shadow-lg text-white z-50 w-full ' : 'bg-gradient-to-r from-pink-100 to-indigo-500 shadow-black shadow-lg  z-50 w-full '} py-8 mt-10  flex flex-col gap-7 `}>
        <div className=" flex justify-center gap-5 items-center max-[600px]:text-lg sm:text-xl px-8 font-extrabold ">
          <NavLink to='/'>
            Home
          </NavLink>
          <NavLink to='/login'>
            Login
          </NavLink>
          <NavLink to='/signup'>
            Signup
          </NavLink >
          <NavLink to='/contact'>
            Contact 
          </NavLink>
          <NavLink to='/cart'>
            Cart
          </NavLink>
        </div>
        <div className="flex justify-center items-center gap-x-2 font-bold ">
          Made With<IoMdHeart className="text-[red] text-2xl flex " />by Dhuruv Kumar <NavLink className='text-2xl' to='https://github.com/dhuruv0003/ShopZ-E-Commerce-Web-App'><AiFillGithub /></NavLink>
        </div>
      </footer>
        </div>

    )
}
