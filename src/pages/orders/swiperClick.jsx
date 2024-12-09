import { useRef } from 'react';
import left from '../../assets/orders-page/left.svg';
import right from '../../assets/orders-page/right.svg';
import style from "./style.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/pagination";

export function SwiperList() {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };


  return (
    <div className={style.orders_mySwiper}>

      <button onClick={handlePrev}>
        <img src={left} alt="left" />
        <span>Previous</span>
      </button>

      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        autoHeight={true}
        loop={false}
        navigation
        pagination
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className={style.orders_mySwiper_swiperList}
    >
      <SwiperSlide style={{width: '40px !important'}}>1</SwiperSlide>
      <SwiperSlide style={{width: '40px !important'}}>2</SwiperSlide>
      <SwiperSlide style={{width: '40px !important'}}>3</SwiperSlide>
      <SwiperSlide style={{width: '40px !important'}}>4</SwiperSlide>
    </Swiper>

      <button onClick={handleNext}>
        <span>Next</span>
        <img src={right} alt="right" />
      </button>

    </div>
  );
}
