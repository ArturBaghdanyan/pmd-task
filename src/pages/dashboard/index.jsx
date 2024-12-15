import React from 'react'
import Products from './first-row/products/products';
import RecentOrders from './first-row/recentOrders/orders';
import Activity from '../../pages/dashboard/sec-row/activity/activity';
import Statistics from '../../pages/dashboard/sec-row/statistics/statistics';
import ThirdComp from '../../pages/dashboard/third-row/index';
import style from "./style.module.scss";
import Header from '../../components/header';

const Dashboard = ({isTab}) => {
 
  return (
    <>
      <Header />
      <div className={style.aside}>
          <div className={style.aside_asideOne}>
            <section className={`${style.aside_asideOne_content}`}>
              <Products isTab={isTab} />
              <RecentOrders isTab={isTab} />
            </section>
        </div>

        <div className={style.aside_asideTwo}>
          <div className="container_spacing">
            <section className={style.aside_asideTwo_content}>
              <Activity />
              <Statistics />
            </section>
            
          </div>

        </div>
        <div className={style.aside_asideThree}>
          <div className="container_spacing">
            <ThirdComp isTab={isTab} />
          </div>
          
        </div>
      </div>
    </>

  )
}

export default Dashboard