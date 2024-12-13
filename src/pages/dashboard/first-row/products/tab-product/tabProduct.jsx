import React, {useState} from 'react'
import { Card } from './card';
import style from "./style.module.scss";

const TabProduct = () => {
  const [color, setColor] = useState(true)

  return (
    <div className={style.cards}>
      <div className={style.cards_header}>
        <h2>My Cards</h2>
        <span>See All</span>
      </div>

      <div className={style.cards_body}>
        {color && (
          <>
            <Card style={{
              background: 'linear-gradient(rgba(76, 73, 237, 1), rgba(10, 6, 244, 1))',  
              }}
            />
            <Card 
              style={{
                background: 'rgba(255, 255, 255, 1)'
              }}
              spanStyle={{
                color: "rgba(113, 142, 191, 1)"
              }}
              pStyle={{
                color: "rgba(52, 60, 106, 1)"
              }}
            />
          </>
          )}
      </div>
    </div>
  )
}

export default TabProduct