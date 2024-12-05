import React from 'react'
import products from "../../../assets/mainpage/footer_icons/products.svg";
import orders from "../../../assets/mainpage/footer_icons/orders.svg";
import revenue from "../../../assets/mainpage/footer_icons/revenue.svg";
import total from "../../../assets/mainpage/footer_icons/total.svg";
import style from "./style.module.scss";

const Footer = () => {
  return (
    <div className={style.footer}>
        <div className={style.footer_item}>
            <div className={style.footer_item_icon}>
                <img src={products} alt="products" />
            </div>
            <div className={style.footer_item_text}>
                <h4>Products</h4>
                <p>2,300,300</p>
            </div>
        </div>
        <div className={style.footer_item}>
            <div className={style.footer_item_icon}>
                <img src={orders} alt="orders" />
            </div>
            <div className={style.footer_item_text}>
                <h4>Orders</h4>
                <p>3,000</p>
            </div>
        </div>
        <div className={style.footer_item}>
            <div className={style.footer_item_icon}>
                <img src={revenue} alt="revenue" />
            </div>
            <div className={style.footer_item_text}>
                <h4>Revenue</h4>
                <p>$3,460</p>
            </div>
        </div>
        <div className={style.footer_item}>
            <div className={style.footer_item_icon}>
                <img src={total} alt="total" />
            </div>
            <div className={style.footer_item_text}>
                <h4>Total Saving</h4>
                <p>$7,920</p>
            </div>
        </div>
    </div>
  )
}

export default Footer