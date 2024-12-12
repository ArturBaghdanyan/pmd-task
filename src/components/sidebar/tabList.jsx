import React from 'react'
import { Link } from 'react-router-dom';
import style from "./style.module.scss";
import home from "../../assets/mainpage/sidebar_icons/tab_icons/home.svg";
import transactions from "../../assets/mainpage/sidebar_icons/tab_icons/transactions.svg";
import accounts from "../../assets/mainpage/sidebar_icons/tab_icons/account.svg";
import investments from "../../assets/mainpage/sidebar_icons/tab_icons/investments.svg";
import creditCard from "../../assets/mainpage/sidebar_icons/tab_icons/creditCard.svg";
import loan from "../../assets/mainpage/sidebar_icons/tab_icons/loan.svg";
import services from "../../assets/mainpage/sidebar_icons/tab_icons/services.svg";
import privileges from "../../assets/mainpage/sidebar_icons/tab_icons/privileges.svg";
import settings from "../../assets/mainpage/sidebar_icons/tab_icons/settings.svg";


const TabListPages = () => {
  return (
    <div className={style.sidebar_container_list}>
      <div className={style.sidebar_container_list_item}>
        <img src={home} alt="icon" />
        <Link to="/">Dashboard</Link>
      </div>
      <div className={style.sidebar_container_list_item}>
        <img src={transactions} alt="icon" />
        <Link to="/transactions">Transactions</Link>
      </div>
      <div className={style.sidebar_container_list_item}>
        <img src={accounts} alt="icon" />
        <Link to="/accounts">Accounts</Link>
      </div>
      <div className={style.sidebar_container_list_item}>
        <img src={investments} alt="icon" />
        <Link to="/investments">Investments</Link>
      </div>
      <div className={style.sidebar_container_list_item}>
        <img src={creditCard} alt="icon" />
        <Link to="/statistics">Credit Cards</Link>
      </div>
      <div className={style.sidebar_container_list_item}>
        <img src={loan} alt="icon" />
        <Link to="/loan">Loans</Link>
      </div>
      <div className={style.sidebar_container_list_item}>
        <img src={services} alt="icon" />
        <Link to="/services">Services</Link>
      </div>
      <div className={style.sidebar_container_list_item}>
        <img src={privileges} alt="icon" />
        <Link to="/privileges">My Privileges</Link>
      </div>
      <div className={style.sidebar_container_list_item}>
        <img src={settings} alt="icon" />
        <Link to="/setting">Setting</Link>
      </div>
    </div>
  )
}

export default TabListPages