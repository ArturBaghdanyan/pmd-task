import React from 'react'
import Products from './first-row/products/products';
import RecentOrders from './first-row/recentOrders/orders';
import Activity from '../../pages/dashboard/sec-row/activity/activity';
import Statistics from '../../pages/dashboard/sec-row/statistics/statistics';
import Footer from '../../pages/dashboard/third-row/footer';
import style from "./style.module.scss";
import Header from '../../components/header';

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className={`${style.aside}`}>
          <div className={`${style.aside_asideOne}`}>
          <div className="container_spacing">
            <div className={`${style.aside_asideOne_content}`}>
              <Products />
              <RecentOrders />
            </div>
          </div>
        </div>

        <div className={`${style.aside_asideTwo}`}>
          <div className="container_spacing">
            <div className={style.aside_asideTwo_content}>
              <Activity />
              <Statistics />
            </div>
            
          </div>

        </div>
        <div className={`${style.aside_asideThree}`}>
          <div className="container_spacing">
            <Footer />
          </div>
          
        </div>
      </div>
    </>

  )
}

export default Dashboard