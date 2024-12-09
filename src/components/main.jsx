import React from 'react';
import AsidePage from './aside/index'
import SideBar from './sidebar/index';
import style from "./style.module.scss";

const MainPage = () => {
  return (
    <div className={style.forms}>
        <SideBar />
        <div className={style.column}>
          <AsidePage />
        </div>
    </div>
  )
}

export default MainPage