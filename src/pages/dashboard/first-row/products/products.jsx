import React from 'react'
import DesktopProduct from './desktopProduct';
import TabProduct from './tab-product/tabProduct';
import style from "./style.module.scss";

const Products = ({isTab}) => {

  return (
    <section className={style.aside_asideOne_content_piece}>
      {isTab ? <TabProduct /> : <DesktopProduct />}
    </section>
  )
}

export default Products