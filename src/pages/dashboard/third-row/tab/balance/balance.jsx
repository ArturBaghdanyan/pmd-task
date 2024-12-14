import React from 'react'
import style from './style.module.scss';
import IncomeChart from './chart';

const Balance = () => {
  return (
    <div className={style.balance}>
      <h2>Balance History</h2>
      <div className={style.balance_container}>
        <IncomeChart />
      </div>
    </div>
  )
}

export default Balance