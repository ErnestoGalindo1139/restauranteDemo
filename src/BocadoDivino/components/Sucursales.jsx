import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import { sucursales } from '../data/sucursales';

export const Sucursales = () => {

    const [slidesPerView, setSlidesPerView] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            // Ajustar slidesPerView según el ancho de la ventana
            if (window.innerWidth >= 1140) {
                setSlidesPerView(3);
            } else if (window.innerWidth >= 720) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(1);
            }
        };

        // Configurar el evento de cambio de tamaño de la ventana
        window.addEventListener('resize', handleResize);

        // Llamar a handleResize cuando el componente se monta
        handleResize();

        // Limpiar el evento al desmontar el componente
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div id='sucursales' className='color4 pt-[2rem] pb-[4rem]'>

                <h1 className='text-[3rem] text-center font-bold text-white mb-[2rem]'>Sucursales</h1>

                <Swiper
                    slidesPerView={ slidesPerView }
                    spaceBetween={40}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        sucursales.map((sucursal, index) => (
                            
                            <SwiperSlide key={index} className='rounded-3xl'>
                                <div className="relative h-full">
                                    <img
                                        className="rounded-2xl object-cover absolute w-full h-full opacity-100 transition-opacity duration-300 object-left-top"
                                        src={sucursal.imagen}
                                        alt=""
                                    />
                                    <div className="rounded-2xl absolute px-4 w-full h-full bg-[#00000067] opacity-0 hover:opacity-100 transition-opacity duration-300 text-white font-bold text-4xl text-start">
                                        <h1 className="absolute top-[2.5rem] border p-1">{sucursal.nombre}</h1>
                                        <p className="absolute top-[10.5rem] text-white text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] mr-[3rem]">{sucursal.direccion}</p>
                                        <p className="absolute top-[12.5rem] text-white text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] mr-[3rem]">{sucursal.horarioAtencionLV}</p>
                                        <p className="absolute top-[14.5rem] text-white text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] mr-[3rem]">{sucursal.horarioAtencionS}</p>
                                        <p className="absolute top-[16.5rem] text-white text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] mr-[3rem]">{sucursal.telefono}</p>
                                        {/* <button
                                            className='absolute bottom-[3rem] right-[1.5rem] text-white text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] bg-black py-1 px-3 hover:bg-gray-800'
                                        >
                                            Ver Más...
                                        </button> */}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

        </>
    )
}
