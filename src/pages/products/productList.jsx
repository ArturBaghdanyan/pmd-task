import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import "swiper/css/pagination";
import style from "./style.module.scss";
import left from '../../assets/orders-page/left.svg';
import right from '../../assets/orders-page/right.svg';

const ProductList = ({data}) => {

    const [pages, setPages] = useState([1,2,3,4,5])
    const [isActive, setIsActive] = useState(0)
        
      const swiperRef = useRef(null);
    
      const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.slidePrev) {
          swiperRef.current.slidePrev();
        }
      };
    
      const handleNext = () => {
        if (swiperRef.current && swiperRef.current.slideNext) {
          swiperRef.current.slideNext();
        }
      };
        const goToSlide = (index) => {
        if (swiperRef.current) swiperRef.current.slideTo(index);
      };
    
        const buttonStyles = {
            width: "40px",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
            color: "rgba(255, 255, 255, 1)",
            background: "rgba(24, 20, 243, 1)",
            border: "none"
        }

  return (
    <>
    <div className={style.products_list_column}>
      <Swiper
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
		    onSlideChange={(swiper) => setIsActive(swiper.realIndex)}
        className={style.products_list_column_mySwiper}
      >
        {data.map((item) => (
  <div key={item.id}>
    <SwiperSlide className={style.products_list_column_mySwiper_list}>
      <div className={style.products_list_column_mySwiper_list_header}>
        {item.title &&
          item.title.map((text, index) => (
            <div
              key={`${item.id}-${index}`}
              className={style.products_list_column_mySwiper_list_header_title}
            >
              <h3>{text}</h3>
            </div>
          ))}
      </div>
      <div className={style.products_list_column_mySwiper_list_body}>
        {item.column &&
          item.column.map((i, index) => (
            <div
              key={`${i.id}-${index}`}
              className={style.products_list_column_mySwiper_list_body_row}
            >
              <span>{i.text}</span>
              <span>{i.productId}</span>
              <span>{i.type}</span>
              <span>{i.userId}</span>
              <span>{i.date}</span>
              <span>{i.amount}</span>
              <Link to="/productDetails">
                <button>{i.action}</button>
              </Link>
            </div>
          ))}
      </div>
    </SwiperSlide>
  </div>
))}

      </Swiper>
    </div>
     <div className={style.products_list_column_mySwiper_controls}>
     	<button 
			onClick={handlePrev} 
			className={style.products_list_column_mySwiper_controls_button}
		>
       <img src={left} alt="Previous" />
       <span>Previous</span>
     </button>
			<div className={style.products_list_column_mySwiper_controls_pagination}>
				{pages.map((_, index) => (
					<button 
						style={isActive === index ? buttonStyles : undefined}
						className={isActive === index
							? style.products_list_column_mySwiper_controls_pagination_button_active
							: style.products_list_column_mySwiper_controls_pagination_button
						}
					>  
						<span
							key={index}
							onClick={() => goToSlide(index)}
						>
							{index + 1}
						</span>
					</button>
					))}
			</div>
			<button 
				onClick={handleNext} 
				className={style.products_list_column_mySwiper_controls_button}
			>
				<span>Next</span>
				<img src={right} alt="Next" />
			</button>
   	</div>
   </>
  )
}

export default ProductList