
import SlideShow from "./SlideShow";


export default function Header({ posts }) {
    const sliderImages = [

        {
            url: "src/assets/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        },
        {
            url: "src/assets/71YXzeOuslL._AC_UY879_.jpg",
        },
        {
            url: "src/assets/71YXzeOuslL._AC_UY879_.jpg",
        },
        {
            url: "src/assets/71YXzeOuslL._AC_UY879_.jpg",
        },
        {
            url: "src/assets/71YXzeOuslL._AC_UY879_.jpg",
        },
        {
            url: "src/assets/71YXzeOuslL._AC_UY879_.jpg",
        },
        {
            url: "src/assets/71YXzeOuslL._AC_UY879_.jpg",
        },

    ];
    return (<div className="w-[100%] overflow-x-hidden sm:h-[80vh] flex justify-center  rounded-b-[20%] border-b-8 border-black bg-slate-600 my-[5rem] space-x-6 ">
        <div className="rounded-full flex flex-col gap-6">
            <h1 className="text-7xl text-white" >Hey GenZ Welcome To </h1>
            <h1 className="text-9xl text-white text-center">ShopZ</h1>
        </div>
        <SlideShow/>
    </div>)
}