import React from 'react'
import style from "./style.module.scss";
import Products from './first-row/products/products';
import Orders from './first-row/orders/orders';
import Activity from './sec-row/activity/activity';
import Statistics from './sec-row/statistics/statistics';

const AsidePage = () => {
  return (
    <aside className={`${style.aside} ${style.item2} `}>

      <div className={`${style.aside_asideOne} ${style.aside_first}`}>
        <div className="container_spacing">
          <div className={`${style.aside_asideOne_content}`}>
            <Products />
            <Orders />
          </div>
        </div>
      </div>

      <div className={`${style.aside_asideTwo} ${style.aside_sec}`}>
        <div className="container_spacing">
          <div className={style.aside_asideTwo_content}>
            <Activity />
            <Statistics />
          </div>
          
        </div>

      </div>
      <div className={`${style.aside_asideThree} ${style.aside_third}`}>three</div>
    </aside>
  )
}

export default AsidePage