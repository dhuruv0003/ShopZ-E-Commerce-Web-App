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
            id: 1,
            name: "Fjallraven - Folds",
            info: "Your perfect pack for everyday use and walks in the... ",
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            price: "758",
        },
        {
            id: 2,
            name: "Mens Casual ",
            info: `Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light... `,
            image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            price: "560",
        },
        {
            id: 3,
            name: "Mens Cotton Jacket",
            info: "The color could be slightly different between on the screen.vibrant nightlife, and .",
            image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
            price: "357",
        },
        {
            id: 4,
            name: "Solid Gold Petite",
            info: "Satisfaction Guaranteed. Return or exchange any order within 30 days. ",
            image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
            price: "1,095",
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

    return (
        <div className='py-[10rem] px-[2rem] max-w-[1000px] mx-auto flex flex-wrap justify-center gap-[5rem] bg-gradient-to-r  from-blue-100 to-purple-200  h-fit '>

            <div className="sm:w-[30%]">
                <img src={product.image} className="h-[400px] w-[350px]" />
            </div>

            <div className="flex flex-col justify-evenly gap-[2rem] sm:w-[60%] h-fit capitalize ">
                <div>
                    <p className="text-gray-700 font-bold text-3xl text-left truncate  mt-1">{product.category}</p>
                </div>
                <div>
                    <p className="text-gray-700 font-bold text-xl text-left  mt-1">{product.title}</p>
                </div>
                <div className='w-[300px] sm:w-full'>
                    <p className="text-gray-00 font-normal text-[15px] text-left  ">{product.description}</p>
                </div>

                <p className=" text-green-600 font-bold text-2xl">${product.price}</p>

                <div>
                    <p className="text-gray-700 font-bold text-xl flex gap-1 items-center text-left  mt-1">ratings : {product.rating.rate}<FaStar /> ({product.rating.count})</p>
                </div>


                <button className="text-gray-700 border-2 border-gray-700 text-lg font-bold rounded-full px-2 w-[200px] p-1" onClick={() => setProduct(product)} >Buy Now</button>


            </div>

            <div className="w-3/4 h-[400px]">
                <Slider {...settings}>
                    {
                        data.map((slide, index) => {
                            return (
                                <div key={index} className="w-[90%] mx-auto  lg:w-[24%] ">
                                    <SlideShow key={slide.id}
                                        {...slide} />

                                </div>

                            )
                        })
                    }
                </Slider>;
            </div>





        </div >

    )
}
