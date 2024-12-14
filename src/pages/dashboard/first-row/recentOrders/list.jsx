import React from 'react'
import style from "./style.module.scss";

const List = ({icon, title, text, price}) => {
  // const [count, setCount] = useState(850);

  return (
  <div className={style.orders_list_column_item}>
    <div className={style.orders_list_column_item_icon}>
      <img src={icon} alt="business-icon" />
    </div>
    <div className={style.orders_list_column_item_text}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
    <div className={style.orders_list_column_item_price}>
      {price >= 850 && price <= 2000 ? (
        <span className={`
          ${style.orders_list_column_item_price_number} 
          ${style.orders_list_column_item_price_decrement}
        `}>
          {`-$${price}`}
        </span>
        ) : (
        <span className={`
          ${style.orders_list_column_item_price_number}
          ${style.orders_list_column_item_price_increment}
        `}>
          {`+$${price}`}
        </span>
      )}
    </div>
  </div>
  )
}

export default List