import React from 'react'
import style from "./style.module.scss";
import PolarAreaChart from './polarChart';

const Statistics = () => {

  return (
    <section className={style.statistics}>
      <h2>Expense Statistics</h2>
      <div className={style.statistics_content}>
        {/* <div className={style.statistics_content_first}>
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
        </div> */}
        <PolarAreaChart />
      </div>
    </section>
  )
}

export default Statistics