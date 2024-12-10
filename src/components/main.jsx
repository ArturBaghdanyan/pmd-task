import React from 'react';
import AsidePage from './aside/index'
import SideBar from './sidebar/index';
import style from "./style.module.scss";
import Header from './header/index';

const MainPage = () => {
  return (
    <div className={style.forms}>
    <div className={style.forms}>
        <SideBar />
        <div className={style.column}>
          <Header />
          <AsidePage />
        </div>
    </div>
  )
}

export default MainPage