import React, {useState} from 'react'
import style from "./style.module.scss";
import { orderData } from '../../data/orders/orderList';
// import { SwiperList } from './swiperClick';
import Header from '../../components/header';
import { Link } from 'react-router-dom';

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
              <div key={item.id}>
                <div className={style.orders_list_column_list}>
                  {item.title && item.title.map((text, index) => (
                    <div key={`${item.id}-${index}`} 
                    className={style.orders_list_column_list_title}
                    >
                      <h3>{text}</h3>
                    </div>
                  ))}
                </div>
                <div className={style.orders_list_column_list_item}>
                  {item.column &&
                    item.column.map((i) => (
                      <div key={`column-${i.id}`}
                      className={style.orders_list_column_list_item_row}>
                        <span>{i.text}</span>
                        <span>{i.orderId}</span>
                        <span>{i.type}</span>
                        <span>{i.userId}</span>
                        <span>{i.date}</span>
                        <span>{i.amount}</span>
                        <Link to="/orderDetails">
                          <button>{i.action}</button>
                        </Link>
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
        {/* <SwiperList /> */}
      </div>
    </>

  )
}

export default OrdersPage