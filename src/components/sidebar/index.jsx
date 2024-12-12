import React from 'react'
import style from "./style.module.scss";
import logo from "../../assets/mainpage/header_images/logo.svg";
import DesktopListPages from './desktopList';
import TabListPages from './tabList';

const SideBar = ({isTab}) => {

  return (
    <div className={style.sidebar}>
      <div className={style.sidebar_container}>

        <div className={style.sidebar_container_logo}>
          {isTab ? (
            <div className={style.sidebar_container_logo_text}>
              <img src={logo} alt="logo" />
              <h3>BankDash.</h3>
            </div>
          ) : <img src={logo} alt="logo" />}
        </div>

        {isTab ? <TabListPages /> : <DesktopListPages /> }
    
      </div>
    </div>
  )
}

export default SideBar