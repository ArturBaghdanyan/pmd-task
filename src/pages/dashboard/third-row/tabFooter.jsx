import React from 'react'
import Balance from './tab/balance/balance'
import Transfer from './tab/transfer/transfer'
import style from "./style.module.scss";

const TabFooter = () => {
  return (
    <div style={{marginTop: '25px'}} className={`${style.footer} ${style.tabFooter}`}>
      <Transfer />
      <Balance />
    </div>
  )
}

export default TabFooter