import React from 'react';
import Header from './header/index';
import AsidePage from './aside/index'
import SideBar from './sidebar/index';
import style from "./style.module.scss";

const MainPage = () => {
  return (
    <div className={style.container}>
        <Header />
        <AsidePage />
        <SideBar />
    </div>
  )
}

export default MainPage