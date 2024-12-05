import React from 'react'
import style from "./style.module.scss";
import Products from './products/products';
import Orders from './orders/orders';

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
        
        <div></div>
        one
      </div>
      <div className={`${style.aside_asideTwo} ${style.aside_sec}`}>two</div>
      <div className={`${style.aside_asideThree} ${style.aside_third}`}>three</div>
    </aside>
  )
}

export default AsidePage