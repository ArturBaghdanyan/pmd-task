import React, {useState, useEffect} from 'react'
import { Card } from '../../../../card';
import style from "../style.module.scss";
import {Swiper, SwiperSlide} from 'swiper/react';

const TabProduct = () => {
  const [color, setColor] = useState(true)
const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 400);
const [activeIndex, setActiveIndex] = useState(0)
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 400);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={style.cards}>
      <div className={style.cards_header}>
        <h2>My Cards</h2>
        <span>See All</span>
      </div>

      {isMobile ? (
        color && (
          <Swiper 
            autoHeight={true}
            slidesPerView={1.4}
            loop={true}
            className={style.cards_body}
          >
            <SwiperSlide className={style.cards_body_slide}>
              <Card style={{
                background: 'linear-gradient(rgba(76, 73, 237, 1), rgba(10, 6, 244, 1))',
                }}
              />
              
            </SwiperSlide>
            
            <SwiperSlide className={style.cards_body_slide}>
              <Card 
                style={{
                  background: 'rgba(255, 255, 255, 1)',
                }}
                spanStyle={{
                  color: "rgba(113, 142, 191, 1)",
                }}
                pStyle={{
                  color: "rgba(52, 60, 106, 1)"
                }}
              />
            </SwiperSlide>
          </Swiper>
          )
      ) : (
        color && (
          <div className={style.cards_body}>
            <Card style={{
              background: 'linear-gradient(rgba(76, 73, 237, 1), rgba(10, 6, 244, 1))',  
              }}
            />
            <Card 
              style={{
                background: 'rgba(255, 255, 255, 1)'
              }}
              spanStyle={{
                color: "rgba(113, 142, 191, 1)"
              }}
              pStyle={{
                color: "rgba(52, 60, 106, 1)"
              }}
            />
          </div>
          )
      )}
      
    </div>
  )
}

export default TabProduct