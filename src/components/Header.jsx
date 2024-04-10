
import SimpleImageSlider from "react-simple-image-slider"

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
    return (<div className="w-[100%] overflow-x-hidden sm:h-[80vh] flex justify-center items-center rounded-b-[20%] border-b-8 border-black bg-slate-600 my-[5rem] space-x-6 ">

        <div className="rounded-full ">
            <SimpleImageSlider 
                width={500}
                height={450}
                images={sliderImages}
                showNavs={true}
                autoPlay={true}
                showBullets={true}
                style={{ borderRadius : "2rem" }}
            />
        </div>
       
    </div>)
}
