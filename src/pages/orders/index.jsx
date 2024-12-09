import React, {useState} from 'react'
import style from "./style.module.scss";
import { orderData } from '../../data/orders/orderList';
import { SwiperList } from './swiperClick';
import Header from '../../components/header';

const OrdersPage = () => {
  const [currentPage, setCurrentPage] = useState('Orders');

  return (
    <>
      <Header isHomePage={currentPage} />
      <div className={style.orders}>
        <div className='container_spacing'>
          <h2>Order list</h2>
          <div className={style.orders_list}>
            <div className={style.orders_list_column}>

            {orderData.map(item => (
              <div key={item.id} className={style.orders_list_column_list}>
              <h3>{item.title}</h3>
              <div className={style.orders_list_column_list_item}>
                <div className={style.orders_list_column_list_item_text}>
                  {item.column.text &&
                    item.column.text.map((text, index) =>
                    item.column.id === 7 ? ( 
                      <button key={`${item.id}-${index}`}>{text}</button>
                    ) : (
                      <span key={`${item.id}-${index}`}>{text}</span>
                    )
                  )}
                </div>
              </div>
            </div>
            ))}
            </div>
          </div>
        </div>
        <SwiperList />
      </div>
    </>

  )
}

export default OrdersPage