import React, { useState } from 'react'
import style from "./style.module.scss";
import logo from "../../assets/mainpage/header_images/logo.svg";
import ListPages from './list';
import { pagesList } from '../../data/pages';

const SideBar = () => {
  const [list, setList] = useState(pagesList);

  return (
    <div className={`${style.sidebar} ${style.item3}`}>
      <div className='container_spacing'>
        <div className={style.sidebar_logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={style.sidebar_list}>
          {list.map(i => (
            <ListPages key={i.id} icon={i.icon} name={i.name} />
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default SideBar