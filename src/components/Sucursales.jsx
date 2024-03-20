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
        direccion: "Calle Ficticia 123, Ciudad Ficticia, Estado Ficticio, Código Postal 12345",
        horarioAtencion: "Lunes a Viernes: 9:00 am - 6:00 pm, Sábado: 9:00 am - 2:00 pm",
        telefono: "+123 456 7890",
        imagen: './sucursales/sucursal1.jpg',
    },
    {
        id: 2,
        direccion: "Avenida Imaginaria 456, Pueblo Fantástico, Provincia de los Sueños, Código Postal 54321",
        horarioAtencion: "Lunes a Jueves: 8:30 am - 5:30 pm, Viernes: 8:30 am - 4:00 pm",
        telefono: "+987 654 3210",
        imagen: './sucursales/sucursal2.jpg',
    },
    {
        id: 3,
        direccion: "Plaza de las Maravillas, Barrio Mágico, Ciudad Encantada, Código Postal 67890",
        horarioAtencion: "Lunes a Domingo: 10:00 am - 8:00 pm",
        telefono: "+456 789 0123",
        imagen: './sucursales/sucursal3.jpg',
    },
    {
        id: 4,
        direccion: "Calle de la Ilusión 789, Villa Soñada, Provincia de los Deseos, Código Postal 13579",
        horarioAtencion: "Lunes a Sábado: 9:30 am - 7:00 pm, Domingo: Cerrado",
        telefono: "+321 654 0987",
        imagen: './sucursales/sucursal4.jpg',
    },
    {
        id: 5,
        direccion: "Avenida de los Recuerdos 246, Pueblo Nostálgico, Estado de la Memoria, Código Postal 97531",
        horarioAtencion: "Lunes a Viernes: 8:00 am - 4:00 pm",
        telefono: "+789 012 3456",
        imagen: './sucursales/sucursal5.jpg',
    },
    {
        id: 6,
        direccion: "Plaza de la Esperanza, Barrio Esperanzador, Ciudad Esperanza, Código Postal 24680",
        horarioAtencion: "Lunes a Domingo: 24 horas",
        telefono: "+654 321 9870",
        imagen: './sucursales/sucursal6.jpg',
    }
];


export const Sucursales = () => {

    const [slidesPerView, setSlidesPerView] = useState(1);
    
    const [mostrarInformacion, setMostrarInformacion] = useState(Array(sucursales.length).fill(false));
    const [timeoutId, setTimeoutId] = useState(null);

    const handleMouseEnter = (index) => {
        clearTimeout(timeoutId); // Limpiar cualquier timeout pendiente
        const newMostrarInformacion = [...mostrarInformacion];
        newMostrarInformacion[index] = true;
        setMostrarInformacion(newMostrarInformacion);
    };

    const handleMouseLeave = (index) => {
        // Agregar un pequeño retraso antes de cambiar el estado
        const id = setTimeout(() => {
        const newMostrarInformacion = [...mostrarInformacion];
        newMostrarInformacion[index] = false;
        setMostrarInformacion(newMostrarInformacion);
        }, 1); // Ajusta el tiempo de espera según sea necesario
        setTimeoutId(id); // Guardar el ID del timeout para poder limpiarlo si es necesario
    };

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
                            <SwiperSlide key={index} className='' >
                                <div 
                                    className='relative h-full w-full'
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={() => handleMouseLeave(index)}
                                >
                                    <img 
                                        className='hover:opacity-[0.92]'
                                        src={sucursal.imagen} 
                                        alt={sucursal.alt}
                                    />
                                    {mostrarInformacion[index] && (
                                        <div className='absolute p-[2rem] top-0 w-full h-[90%] sm:h-[80%] md:h-[70%]  lg:h-4/5 grid grid-cols-1 '>
                                            <p className='text-2xl font-bold text-white text-start  '>
                                                Direccion: { sucursal.direccion }
                                            </p>
                                            <p className='text-2xl font-bold text-white text-start  '>
                                                Horario de atención: { sucursal.horarioAtencion }
                                            </p>
                                            <p className='text-2xl font-bold text-white text-start  '>
                                                Número de teléfono: { sucursal.telefono }
                                            </p>
                                            <button className='text-2xl font-bold text-white w-[50%] bg-blue-400'>
                                                Ver Más...
                                            </button>

                                        </div>
                                    )}
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

        </>
    )
}
