export default function SlideShow({ price,  info, image, name}) {

    return (
        <div className="bg-white rounded-[20%] flex flex-col justify-evenly h-fit min-h-[350px] p-2">
            <div className="font-bold">{name}</div>
            <div className=" w-full flex justify-center items-center" ><img className=" rounded-t-full h-[120px]  object-cover " src={image} alt="" /></div>
            <div className="text-green-600 font-extrabold">${price}</div>
            <div className="">{info}</div>
        </div>
    )
}