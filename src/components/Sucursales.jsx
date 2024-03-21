import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';

const sucursales = [
    {
        id: 1,
        nombre: "Sucursal A",
        direccion: "Calle Ficticia 123, Código Postal 123",
        horarioAtencionLV: "Lunes a Viernes: 9:00 am - 6:00 pm",
        horarioAtencionS: "Sábado: 9:00 am - 2:00 pm",
        telefono: "+123 456 7890",
        imagen: './sucursales/sucursal1.jpg',
    },
    {
        id: 2,
        nombre: "Sucursal B",
        direccion: "Calle Ficticia 123, Código Postal 456",
        horarioAtencionLV: "Lunes a Viernes: 8:30 am - 5:30 pm",
        horarioAtencionS: "Sábado: 9:00 am - 2:00 pm",
        telefono: "+987 654 3210",
        imagen: './sucursales/sucursal2.jpg',
    },
    {
        id: 3,
        nombre: "Sucursal C",
        direccion: "Calle Ficticia 123, Código Postal 789",
        horarioAtencionLV: "Lunes a Viernes: 10:00 am - 8:00 pm",
        horarioAtencionS: "Sábado: 9:00 am - 2:00 pm",
        telefono: "+456 789 0123",
        imagen: './sucursales/sucursal3.jpg',
    },
    {
        id: 4,
        nombre: "Sucursal D",
        direccion: "Calle Ficticia 123, Código Postal 101",
        horarioAtencionLV: "Lunes a Viernes: 9:30 am - 7:00 pm",
        horarioAtencionS: "Sábado: 9:00 am - 2:00 pm",
        telefono: "+321 654 0987",
        imagen: './sucursales/sucursal4.jpg',
    },
    {
        id: 5,
        nombre: "Sucursal E",
        direccion: "Calle Ficticia 123, Código Postal 265",
        horarioAtencionLV: "Lunes a Viernes: 8:00 am - 4:00 pm",
        horarioAtencionS: "Sábado: 9:00 am - 2:00 pm",
        telefono: "+789 012 3456",
        imagen: './sucursales/sucursal5.jpg',
    },
    {
        id: 6,
        nombre: "Sucursal F",
        direccion: "Calle Ficticia 123, Código Postal 761",
        horarioAtencionLV: "Lunes a Domingo: 24 horas",
        horarioAtencionS: "Sábado: 9:00 am - 2:00 pm",
        telefono: "+654 321 9870",
        imagen: './sucursales/sucursal6.jpg',
    }
];


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
            <div className='color4 pt-[2rem] pb-[4rem]'>

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
                                        <button
                                            className='absolute bottom-[3rem] right-[1.5rem] text-white text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] bg-black py-1 px-3 hover:bg-gray-800'
                                        >
                                            Ver Más...
                                        </button>
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
