
import React from 'react';
import fondo from '../assets/img/fondo.webp'
import fondo1 from '../assets/img/fondo1.webp'
import fondo2 from '../assets/img/fondoprod.webp'
import fondovio from '../assets/img/fondoVioleta.png'
import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css'
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

const Carrousel = () => {
    return (
        <Swiper modules={[ Autoplay]} effect="fade"
            autoplay={{delay: 1200}}
            data-swiper-autoplay="2000"
            loop={false}
            slidesPerView={1}
           
        >
            <SwiperSlide><img className='fondo' src={fondo} alt='' />
</SwiperSlide>
            <SwiperSlide ><img className='fondo' src={fondo1} alt='' />
</SwiperSlide>
            <SwiperSlide ><img className='fondo' src={fondo2} alt='' />
</SwiperSlide>  
            
        </Swiper>
    );
};

export default Carrousel;
