import React from 'react'
import style from "./style.module.scss";
import logo from "../../assets/mainpage/header_images/logo.svg";
import ListPages from './list';

const SideBar = () => {

  return (
    <div className={style.sidebar}>
        <div className={style.sidebar_logo}>
          <img src={logo} alt="logo" />
        </div>
        <ListPages />      
    </div>
  )
}

export default SideBar