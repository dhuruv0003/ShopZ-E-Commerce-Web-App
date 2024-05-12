export default function SlideShow({ price,  info, image, name}) {

    return (
        <div className="bg-white  p-6 h-[450px] flex flex-col justify-evenly border-[3px] shadow-md shadow-slate-800  min-h-[350px] transition-all duration-300 ease-in-out ">
            <div className="font-bold">{name}</div>
            <div className=" w-full flex justify-center items-center" ><img className=" rounded-t-full h-[120px]  object-cover " src={image} alt="" /></div>
            <div className="text-green-600 font-extrabold">${price}</div>
            <div className="">{info}</div>
        </div>
    )
}