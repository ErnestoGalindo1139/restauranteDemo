import { Link } from "react-router-dom"
import { platillos } from "../data/platillos"

export const Platillos = () => {

    return (
        <>
            <div id="menu" className="color2 pt-[3rem] pb-[6rem] ">
                <h2 className="text-white font-bold text-2xl lg:text-5xl text-center mb-[4rem]"> Conoce Nuestros Platillos </h2>
                <Link to="/menuCompleto">
                    <p className="text-end text-white mr-[3rem] mb-[1rem] underline text-xl">Ver menu completo</p>
                </Link>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1rem] mx-auto w-[90%] max-w-[120rem]">
                    
                    {
                        platillos.map( (imagen, index) => (
                            <img key={ index } src={ imagen.src } alt={ imagen.alt } className="h-full object-cover" />
                        ))
                    }

                </div>
            </div>
        </>
    )
}
