import React from 'react'
import style from "./style.module.scss";
import { productsData } from "../../../../data/products";

const Products = () => {
  return (
    <div className={style.aside_asideOne_content_piece}>
    <h2>Most selling products</h2>
      <table className={style.aside_asideOne_content_piece_table}>
      {productsData.map(i => (
        <div className={style.aside_asideOne_content_piece_table_row}>
        <thead key={i.id} className={style.aside_asideOne_content_piece_table_row_head}>
          <tr>
            <th>{i.title}</th>
          </tr>
        </thead>
        <div style={{borderTop: "1px solid rgba(244, 245, 247, 1)", width: "100%"}}></div>
      
        <tbody className={style.aside_asideOne_content_piece_table_row_body}>
          {i.menu.map((j, index) => (
            <tr key={index}>
              <td>{j}</td>
            </tr>
          ))}
        </tbody>
        </div>
      ))}
    </table>
  </div>
  )
}

export default Products