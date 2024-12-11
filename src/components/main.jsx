import React, { useState, useEffect } from 'react';
import AsidePage from './aside/index'
import SideBar from './sidebar/index';
import style from "./style.module.scss";

const MainPage = () => {
  const [isTab, setIsTab] = useState(() => window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => setIsTab(window.innerWidth <= 1024);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={style.forms}>

      <SideBar isTab={isTab} />

      <div className={style.column}>
        <AsidePage isTab={isTab} />
      </div>

    </div>
  )
}

export default MainPage