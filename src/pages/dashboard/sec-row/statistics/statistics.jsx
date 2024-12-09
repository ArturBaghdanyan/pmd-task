import React from 'react'
import style from "./style.module.scss";
import expense from "../../../../assets/mainpage/statistics_images/expense.svg";

const Statistics = () => {

  return (
    <section className={style.statistics}>
      <h2>Expense Statistics</h2>
      <div className={style.statistics_content}>
        <div className={style.statistics_content_first}>
          <span>
            30% <br /> 
            Entertainment
          </span>
        </div>
        <div className={style.statistics_content_sec}>
          <span>
            15% <br/>
            Bill Expense
          </span>
        </div>
        <div className={style.statistics_content_third}>
          <span>
            20% <br />
            Investment
          </span>
        </div>
        <div className={style.statistics_content_fourth}>
          <span>
            35% <br />
            Others
          </span>
        </div>
        <div>
          <img src={expense} alt="expense" />
        </div>
      </div>
    </section>
  )
}

export default Statistics