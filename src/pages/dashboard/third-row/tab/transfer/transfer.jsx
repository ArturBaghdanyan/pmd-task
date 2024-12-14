import React, {useRef, useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { transferData } from '../../../../../data/dashboard/transfer';
import arrow from "../../../../../assets/mainpage/footer_icons/tab_icons/arrow.svg";
import send from "../../../../../assets/mainpage/footer_icons/tab_icons/send.svg";

import style from "./style.module.scss";
import 'swiper/css';
import 'swiper/css/navigation'; 

const Transfer = () => {
  const swiperRef = useRef(null);
  const [list, setList] = useState(transferData);

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.slideNext) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className={style.transfer}>
      <h2>Quick Transfer</h2>
      <div className={style.transfer_list}>

        <div className={style.transfer_list_container}>
          <Swiper
            slidesPerView={3}
            autoHeight={true}
            loop={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className={style.transfer_list_container_mySwiper}
            >
            {list.map((i) => (
                <SwiperSlide key={i.id} className={style.transfer_list_container_mySwiper_row}>
                  <div className={style.transfer_list_container_mySwiper_row_item}>
                    <img src={i.icon} alt="icon" />
                    <div className={style.transfer_list_container_mySwiper_row_item_text}>
                      <span>{i.title}</span>
                      <p>{i.text}</p>
                    </div>
                  </div>
                </SwiperSlide>
            ))}
            
          </Swiper>
          <div>
            <button 
              onClick={handleNext} 
              className={style.transfer_list_container_button}
            >
              <img src={arrow} alt="arrow" />
            </button>
          </div>
        </div>

        <div className={style.transfer_list_footer}>
          <div className={style.transfer_list_footer_text}>
            <span className={style.transfer_list_footer_span}>Write Amount</span>
          </div>
          <div className={style.transfer_list_footer_input}>
            <div className={style.transfer_list_footer_input_amount}>
              <span className={style.transfer_list_footer_span}>525.50</span>
            </div>
            <div className={style.transfer_list_footer_input_send}>
              <span>Send</span>
              <img src={send} alt="send-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transfer