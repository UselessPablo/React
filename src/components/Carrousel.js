
import React from 'react';

import fondo from '../assets/img/fondo.webp'
import fondo1 from '../assets/img/fondo1.webp'
import fondo2 from '../assets/img/fondoprod.webp'
import '../../node_modules/swiper/swiper-element'
import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css'
import { EffectFade } from 'swiper';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

const Carrousel = () => {
    return (
        <Swiper modules={[EffectFade, Autoplay]} effect="fade"
            autoplay={{delay: 1800}}
            data-swiper-autoplay="2000"
            loop={true}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide><img className='fondo' src={fondo} alt='fondo' />
</SwiperSlide>
            <SwiperSlide ><img className='fondo' src={fondo1} alt='fondo' />
</SwiperSlide>
            <SwiperSlide ><img className='fondo' src={fondo2} alt='fondo' />
</SwiperSlide>

            
        </Swiper>
    );
};
export default Carrousel;

