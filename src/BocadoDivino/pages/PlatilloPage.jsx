import { useParams } from "react-router-dom"
import { allPlatillos } from "../data/allPlatillos";
import { NavBarMenuPlatillos } from "../components/NavBarMenuPlatillos";
import { useEffect } from "react";

export const PlatilloPage = () => {

    const params = useParams();
    const { id } = params;

    const platillo = allPlatillos.find( platillo => platillo.id == id );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <NavBarMenuPlatillos />
            <div className="flex flex-col lg:flex-row mt-[10rem] max-w-[100rem] mx-auto gap-[6rem]">    
                <img 
                    src={ platillo.src }
                    alt={ platillo.alt }
                    className="w-[100%] lg:w-[60%] px-[1rem] lg:px-0 lg:mx-auto"
                />

                <div className="mx-5">
                    <h1 className="text-white text-[3rem]">{ platillo.titulo }</h1>
                    <div className="flex gap-2 mt-1 border-b-2 pb-3">
                        <p className="bg-white p-1 rounded-md text-[1rem] font-bold">{ platillo.Categoria }</p>
                        <p className="bg-[#16a34a] p-1 rounded-md text-[1rem] text-white font-bold">{ platillo.Precio } MX</p>
                    </div>
                    <div>
                        <p className="text-white mt-3 text-[1.2rem] text-justify">{ platillo.Descripcion }</p>
                    </div>
                </div>
                
            </div>
        </>
    )
}
