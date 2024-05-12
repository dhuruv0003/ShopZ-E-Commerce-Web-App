export default function SlideShow({ price,  info, image, name}) {

    return (
        <div className="bg-white p-6 h-[450px] flex flex-col justify-evenly   transition-all duration-300 rounded-3xl md:rounded-full ease-in-out ">
            <div className="font-bold text-center">{name}</div>
            <div className=" w-full flex justify-center items-center" ><img className=" rounded-t-full h-[120px]  object-cover " src={image} alt="" /></div>
            <div className="text-center text-green-600 font-extrabold">${price}</div>
            <div className=" w-[70%] mx-auto text-justify">{info}</div>
        </div>
    )
}