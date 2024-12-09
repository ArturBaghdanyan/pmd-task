import React from 'react'
import style from "./style.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';

const SwiperList = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
      autoHeight
      className={style.orders_mySwiper_swiperList}
    >
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide>3</SwiperSlide>
        <SwiperSlide>4</SwiperSlide>
    </Swiper>
  )
}

export default SwiperList