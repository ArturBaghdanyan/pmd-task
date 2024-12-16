import React from 'react'
import style from "./style.module.scss";
import settings from "../../assets/mainpage/header_images/settings.svg";
import notification from "../../assets/mainpage/header_images/notification.svg";
import morillo from "../../assets/mainpage/header_images/morillo.svg";
import search from "../../assets/mainpage/header_images/search.svg";
import menu from "../../assets/mainpage/header_images/menu.svg";
import { useLocation } from 'react-router-dom';

const Header = () => {
  const {pathname} = useLocation()

  return (
    <header className={style.header}>
      <div className={`${style.header_container} container_spacing`}>
        
        <div className={style.header_container_right}>
          <div className={style.header_container_right_menu}>
            <img src={menu} alt="menu-icon" />
          </div>
          <div className={style.header_container_right_overview}>
          {pathname === 'Orders' ? (
              <span>Orders</span>
            ) : pathname === "ordersDetails" ? (
              <span>Orders</span>
            ) : pathname === 'Products' ? (
              <span>Products</span>
            ) : pathname === 'Reviews' ? (
              <span>Reviews</span>
            ) : (
              <span>Overview</span>
            )}
          </div>
          <div className={style.header_container_right_inputs}>
            <div className={style.header_container_right_inputs_search}>
              <img src={search} alt="search" />
              <input type="search" placeholder='Search for something'/>
            </div>
            <div className={style.header_container_right_inputs_images}>
              <img src={settings} alt="seetings" />
              <img src={notification} alt="notification" />
              <img src={morillo} alt="morillo" />
            </div>
          </div>
        </div>
        <div className={style.header_container_search}>
          <img src={search} alt="search" />
          <input type="search" placeholder='Search for something'/>
        </div>
      </div>

    </header>
  )
}

export default Header