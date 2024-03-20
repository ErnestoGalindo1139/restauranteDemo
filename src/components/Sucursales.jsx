import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const Sucursales = () => {
    return (
        <>
            <div className='color4 pt-[2rem] pb-[4rem]'>

                <h1 className='text-[3rem] text-center font-bold text-white mb-[2rem]'>Sucursales</h1>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src="./sucursales/sucursal1.jpg" alt="sucursal1.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="./sucursales/sucursal2.jpg" alt="sucursal2.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="./sucursales/sucursal3.jpg" alt="sucursal3.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="./sucursales/sucursal4.jpg" alt="sucursal4.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="./sucursales/sucursal5.jpg" alt="sucursal5.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="./sucursales/sucursal6.jpg" alt="sucursal6.jpg" /></SwiperSlide>
                </Swiper>
            </div>

        </>
    )
}
