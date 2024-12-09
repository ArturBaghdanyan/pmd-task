import { useSwiper } from 'swiper/react';

import left from '../../assets/orders-page/left.svg';
import right from '../../assets/orders-page/right.svg';
import style from "./style.module.scss";
import SwiperList from './swiper';

export function Swiper() {
  const swiper = useSwiper();

  return (
    <div className={style.orders_mySwiper}>

      <button onClick={() => swiper.slidePrev()}>
        <img src={left} alt="left" />
        <span>Previous</span>
      </button>

      <SwiperList />

      <button onClick={() => swiper.slideNext()}>
        <span>Next</span>
        <img src={right} alt="right" />
      </button>

    </div>
  );
}
