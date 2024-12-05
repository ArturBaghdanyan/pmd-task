import React from 'react'
import { Link } from 'react-router-dom';
import style from "./style.module.scss";

const ListPages = ({icon, name}) => {
  return (
    <div className={style.sidebar_list_item}>
        <img src={icon} alt="icon" />
        <Link to="/">{name}</Link>
    </div>
  )
}

export default ListPages