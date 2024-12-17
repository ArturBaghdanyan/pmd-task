import React, {useState} from 'react'
import style from "./style.module.scss";
import Header from '../../components/header';
import { Card } from '../card';
import Expense from './sec-row/expense/expense';
import CardList from './sec-row/list/list';
import {statisticsData} from '../../data/statistics/statisticsData';

const Statistics = () => {
  const [isStatisticsList, setIsStatisticsList] = useState(statisticsData);
  return (
    <>
      <Header />
      <div className={style.statistics}>
        <div className='container_spacing'>
          <div className={style.statistics_content}>
            <h2>My cards</h2>
            <div className={style.statistics_content_cards}>
            <Card style={{
                background: 'linear-gradient(rgba(45, 96, 255, 1), rgba(83, 155, 255, 1)',
                }}
                />
              <Card style={{
                background: 'linear-gradient(rgba(76, 73, 237, 1), rgba(10, 6, 244, 1))',
                }}
                />
              <Card 
                style={{
                  background: 'rgba(255, 255, 255, 1)',
                }}
                spanStyle={{
                  color: "rgba(113, 142, 191, 1)",
                }}
                pStyle={{
                  color: "rgba(52, 60, 106, 1)"
                }}
              />
            </div>
            <Expense />
            <CardList data={isStatisticsList} />
          </div>
        </div>
      </div>
    </>

  )
}

export default Statistics