import React from 'react'
import whiteChip from "../../../../../assets/mainpage/cards_icons/whiteChip.png";
import blackChip from "../../../../../assets/mainpage/cards_icons/blackChip.png";
import imgLight from "../../../../../assets/mainpage/cards_icons/showBlack.svg";
import imgDark from "../../../../../assets/mainpage/cards_icons/show.svg";
import style from "./style.module.scss";

export const Card = ({ style: customStyle, spanStyle, pStyle }) => {

  const isLightBackground = 
  customStyle?.background?.includes('linear-gradient(rgba(76, 73, 237, 1), rgba(10, 6, 244, 1))') ||
  customStyle?.background?.includes('rgba(255, 255, 255, 1)');

  return (
    <div className={style.cards_body_card} style={customStyle}>
      <div className={style.cards_body_card_row}>
        <div className={style.cards_body_card_row_balance}>
          <span style={spanStyle}>Balance</span>
          <p style={pStyle}>$5,756</p>
        </div>
        <div className={style.cards_body_card_row_icon}>
          <img src={isLightBackground ? whiteChip : blackChip} alt="chip-card" />
        </div>
      </div>
      <div className={`${style.cards_body_card_row} ${style.cards_body_card_item}`}>
        <div className={style.cards_body_card_row_text}>
          <span style={spanStyle}>CARD HOLDER</span>
          <p style={pStyle}>Eddy Cusuma</p>
        </div>
        <div className={style.cards_body_card_row_text}>
          <span style={spanStyle}>VALID THRU</span>
          <p style={pStyle}>12/22</p>
        </div>
      </div>
      <div className={`${style.cards_body_card_row} ${style.cards_body_card_el}`}>
        <div className={style.cards_body_card_row_number}>
          <span style={spanStyle}>3778 **** **** 1234</span>
        </div>
        <div className={style.cards_body_card_row_icon}>
          <img src={isLightBackground ? imgLight : imgDark} alt="show" />
        </div>
      </div>
  </div>
  )
}
