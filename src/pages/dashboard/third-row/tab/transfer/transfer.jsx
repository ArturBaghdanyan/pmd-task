import React, {useRef, useState} from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
import style from "./style.module.scss";
// import 'swiper/css';
// import "swiper/css/pagination";

const Transfer = () => {
  // const swiperRef = useRef(null);
  const [list, setList] = useState([
    {
      id: 1,
      icon: '',
      title: "Livia Bator",
      text: "CEO"
    },
    {
      id: 2,
      icon: '',
      title: "Randy Press",
      text: "Director"
    },
    {
      id: 3,
      icon: '',
      title: "Workman",
      text: "Designer"
    },
    {
      id: 4,
      title: "Workman",
      text: "Designer"
    },
    {
      id: 5,
      title: "Workman",
      text: "Designer"
    },
  ])

  return (
    <div className={style.transfer}>
      <h2>Quick Transfer</h2>
      <div className={style.transfer_list}>
         {/* <Swiper
        spaceBetween={20}
        slidesPerView={4}
        autoHeight={true}
        loop={false}
        navigation
        pagination
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className={style.orders_mySwiper_swiperList}
    >
      <SwiperSlide>
        <div>
          <img src="" alt="" />
          <span></span>
          <p></p>
        </div>
        
      </SwiperSlide>
        </Swiper> */}
        {list.map(i => (
          <div key={i.id} className={style.transfer_list_item}>
            <img src={i.icon} alt="" />
            <span>{i.title}</span>
            <p>{i.text}</p>
          </div>
        ))}
        <div></div>
      </div>
    </div>
  )
}

export default Transfer