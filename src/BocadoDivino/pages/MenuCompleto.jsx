import { useEffect, useState, useRef } from "react";
import { allPlatillos } from "../data/allPlatillos";
import { NavBar } from "../components/NavBar";
import { NavBarMenuPlatillos } from "../components/NavBarMenuPlatillos";
import { NavLink } from "react-router-dom";

const obtenerCategoriasUnicas = () => {
    const categorias = new Set();
    allPlatillos.forEach((platillo) => {
        categorias.add(platillo.Categoria);
    });
    return Array.from(categorias);
};

const categoriasUnicas = obtenerCategoriasUnicas();

export const MenuCompleto = () => {
    const primerPlatilloRef = useRef(null);

    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

    const onFiltrarPlatillos = (e, categoria) => {
        setCategoriaSeleccionada(categoria);
       
        window.scrollTo({
            top: primerPlatilloRef.current.offsetTop - 200,
            behavior: 'smooth',
        });
    };
    

    const platillosFiltrados = categoriaSeleccionada
        ? allPlatillos.filter((platillo) => platillo.Categoria === categoriaSeleccionada)
        : allPlatillos;

    const onResetFiltros = () => {
        setCategoriaSeleccionada(null);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <NavBarMenuPlatillos />
            <div className="py-[5rem] color1">
                <div className="mx-auto w-[90%] max-w-[120rem]">
                    <div className=" separador">
                        <div className="categorias mt-[3rem]">
                            <p className="text-blue-500 font-bold text-[1.3rem] my-8"> Busca por Categorías 👇 </p>
                            {categoriaSeleccionada ? (
                                <button
                                    className="font-bold text-[1.5rem] text-white bg-orange-500 cursor-pointer p-2 mb-6 w-full hover:bg-orange-600"
                                    onClick={onResetFiltros}
                                >
                                    {" "}
                                    Limpiar Busqueda{" "}
                                </button>
                            ) : (
                                <></>
                            )}
                            {categoriasUnicas.map((categoria, index) => (
                                <div key={index}>
                                    <p
                                        className="font-bold text-[1.5rem] text-white cursor-pointer hover:text-orange-400 "
                                        onClick={(e) => onFiltrarPlatillos(e, categoria)}
                                    >
                                        {" "}
                                        {categoria}{" "}
                                    </p>
                                    <hr className="h-[0.2rem] my-4 cursor-pointer" />
                                </div>
                            ))}
                        </div>

                        <div>
                            <h2 className="text-white font-bold text-[2rem] lg:text-[3rem] text-center mb-[2rem]"> Consulta Nuestros Platillos <span className="hidden lg:inline-block"> 🍴🍷 </span> </h2>
                            <div className="platillosSegunCategoria grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem]">
                                {platillosFiltrados.map((platillo, index) => (
                                    <div className="relative py-5 px-2 mx-auto color3 cursor-pointer" key={index} title="Ver más Información" ref={index === 0 ? primerPlatilloRef : null}>
                                        <NavLink to={`/platilloInfo/${platillo.id}`}>
                                            <img src={platillo.src} alt={platillo.alt} className=" object-cover mx-auto my-1 h-[200px]" />
                                            <h2 className="text-white my-1 text-center font-bold text-[2rem]">{platillo.titulo}</h2>
                                            <p className="text-green-600 my-1 text-center font-bold">$ {platillo.Precio} MXN</p>
                                            <p className="text-white mt-2 mb-[3rem] text-[1.3rem] text-start px-4">{platillo.Descripcion}</p>
                                            <div className="px-4">
                                                <button className="absolute bottom-4 text-white text-[0.9rem] px-[0.6rem] py-1  border border-blue-400">{platillo.Categoria}</button>
                                            </div>
                                        </NavLink>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
