import React from 'react'
import List from './list';
import { orderList } from '../../../data/orderList';
import style from "./style.module.scss";

const Orders = () => {
  return (
    <div className={style.orders}>
        <h2>Recent Orders</h2>
        <div className={style.orders_list}>
			{orderList.map(item => 
				<List 
					key={item.id} 
					icon={item.icon} 
					title={item.title} 
					text={item.text} 
					price={item.price} 
				/>
			)}
          
        </div>
    </div>
  )
}

export default Orders