import React from 'react'
import style from "./style.module.scss";
import Products from './first-row/products/products';
import Orders from './first-row/orders/orders';
import Activity from './sec-row/activity/activity';
import Statistics from './sec-row/statistics/statistics';
import Footer from './third-row/footer';

const AsidePage = () => {
  return (
    <aside className={style.aside}>

      <div className={style.aside_asideOne}>
        <div className="container_spacing">
          <div className={style.aside_asideOne_content}>
            <Products />
            <Orders />
          </div>
        </div>
      </div>

      <div className={style.aside_asideTwo}>
        <div className="container_spacing">
          <div className={style.aside_asideTwo_content}>
            <Activity />
            <Statistics />
          </div>
          
        </div>

      </div>
      <div className={`${style.aside_asideThree} ${style.aside_third}`}>
        <div className="container_spacing">
          <Footer />
        </div>
        
      </div>
    </aside>
  )
}

export default AsidePage