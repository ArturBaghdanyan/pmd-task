import React from 'react'
import style from "./style.module.scss";
import settings from "../../assets/mainpage/header_images/settings.svg";
import notification from "../../assets/mainpage/header_images/notification.svg";
import morillo from "../../assets/mainpage/header_images/morillo.svg";
import search from "../../assets/mainpage/header_images/search.svg";

const Header = ({isHomePage}) => {

  return (
    <header className={style.header}>
      <div className={`${style.header_container} container_spacing`}>
        
        <div className={style.header_container_right}>
          <div className={style.header_container_right_overview}>
          {isHomePage === 'Orders' ? (
              <span>Orders</span>
            ) : isHomePage === 'Products' ? (
              <span>Products</span>
            ) : isHomePage === 'Reviews' ? (
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
      </div>

    </header>
  )
}

export default Header