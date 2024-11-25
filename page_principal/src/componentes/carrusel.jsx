import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; 

import 'swiper/css'; 
import 'swiper/css/pagination';
import '../App.css'; 


const Carrusel = () => {
  const swiperRef = useRef(null);
  return (
   

      <div className="images">
        <Swiper
          ref={swiperRef}
          className="mySwiper"
          spaceBetween={20} 
          slidesPerView={3} 
          centeredSlides={true}
          loop={true} 
          grabCursor={true} 
          navigation={false}
          
        >
          
          <SwiperSlide>
            <img
              src="https://www.ytuqueplanes.com/imagenes/fotos/novedades/YTQP-Nevado-de-Huaguruncho.jpg"
              alt="Sierra"
            />
            <h3>Sierra</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://sky-cms-prod.s3.amazonaws.com/Landing_TEMPORADA_WEB_44d69484b7.jpg"
              alt="Selva"
            />
            <h3>Selva</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://trekkingperuano.com/wp-content/uploads/2024/07/oasis-huacachina-1024x576.jpg"
              alt="Costa"
            />
            <h3>Costa</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.ytuqueplanes.com/imagenes/fotos/novedades/YTQP-Nevado-de-Huaguruncho.jpg"
              alt="Sierra"
            />
            <h3>Sierra</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://sky-cms-prod.s3.amazonaws.com/Landing_TEMPORADA_WEB_44d69484b7.jpg"
              alt="Selva"
            />
            <h3>Selva</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://trekkingperuano.com/wp-content/uploads/2024/07/oasis-huacachina-1024x576.jpg"
              alt="Costa"
            />
            <h3>Costa</h3>
          </SwiperSlide>
        </Swiper>
        <div>
          <button className="swiper-button-prev" onClick={() => swiperRef.current.swiper.slidePrev()}>‹</button>
          <button className="swiper-button-next" onClick={() => swiperRef.current.swiper.slideNext()}>›</button>
        </div>
       </div>
       
  );


};

export default Carrusel;