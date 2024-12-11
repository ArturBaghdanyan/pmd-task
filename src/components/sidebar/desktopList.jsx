import React from 'react'
import { Link } from 'react-router-dom';
import style from "./style.module.scss";
import home from "../../assets/mainpage/sidebar_icons/desktop_icons/home.svg";
import transfer from "../../assets/mainpage/sidebar_icons/desktop_icons/transfer.svg";
import products from "../../assets/mainpage/sidebar_icons/desktop_icons/products.svg";
import reviews from "../../assets/mainpage/sidebar_icons/desktop_icons/reviews.svg";
import creditCard from "../../assets/mainpage/sidebar_icons/desktop_icons/creditCard.svg";
import loan from "../../assets/mainpage/sidebar_icons/desktop_icons/loan.svg";
import settings from "../../assets/mainpage/sidebar_icons/desktop_icons/settings.svg";

const DesktopListPages = () => {
  return (
    <div className={style.sidebar_container_list}>
      <div className={style.sidebar_container_list_item}>
        <img src={home} alt="icon" />
        <Link to="/">Dashboard</Link>
      </div>
      <div className={style.sidebar_container_list_item}>
        <img src={transfer} alt="icon" />
        <Link to="/orders">Orders</Link>
      </div>
      <div className={style.sidebar_container_list_item}>
        <img src={products} alt="icon" />
        <Link to="/products">Products</Link>
      </div>
      <div className={style.sidebar_container_list_item}>
        <img src={reviews} alt="icon" />
        <Link to="/reviews">Reviews</Link>
      </div>
      <div className={style.sidebar_container_list_item}>
        <img src={creditCard} alt="icon" />
        <Link to="/statistics">Statistics</Link>
      </div>
      <div className={style.sidebar_container_list_item}>
        <img src={loan} alt="icon" />
        <Link to="/currencies">Currencies</Link>
      </div>
      <div className={style.sidebar_container_list_item}>
        <img src={settings} alt="icon" />
        <Link to="/setting">Setting</Link>
      </div>
    </div>
  )
}

export default DesktopListPages