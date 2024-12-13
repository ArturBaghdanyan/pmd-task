import React from 'react'
import style from "./style.module.scss";

const List = ({icon, title, text, price}) => {
  return (
  <div className={style.orders_list_item}>
    <div className={style.orders_list_item_icon}>
      <img src={icon} alt="business-icon" />
    </div>
    <div className={style.orders_list_item_text}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
    <div className={style.orders_list_item_price}>
      <span className={style.orders_list_item_price_number}>
        {`-$${price}`}
      </span>
    </div>
  </div>
  )
}

export default List