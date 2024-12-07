import React from 'react'
import style from "./style.module.scss";
import { productsData } from "../../../../data/products";

const Products = () => {
  return (
    <section className={style.aside_asideOne_content_piece}>
    <h2>Most selling products</h2>
      <menu className={style.aside_asideOne_content_piece_table}>
      {productsData.map(i => (
        <div key={i.id} className={style.aside_asideOne_content_piece_table_row}>
          <div className={style.aside_asideOne_content_piece_table_row_head}>
            <span>{i.title}</span>
          </div>

          <div style={{borderTop: "1px solid rgba(244, 245, 247, 1)", width: "100%"}}></div>
        
          <div className={style.aside_asideOne_content_piece_table_row_body}>
            {i.menu.item.map((j, index) => (
              <span key={`${i.id}-${index}`}>{j}</span>
            ))}
          </div>
        </div>
      ))}
    </menu>
  </section>
  )
}

export default Products