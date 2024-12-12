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
             <SwiperList data={orderData} />  
          </div>
        </div>
        
      </div>
    </>

  )
}

export default OrdersPage