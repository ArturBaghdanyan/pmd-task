import React from 'react'
import DesktopProduct from './desktopProduct';
import TabProduct from './tab-product/tabProduct';
import style from "./style.module.scss";

const Products = ({isTab}) => {

  return (
    <div className={style.aside_asideOne_content_piece}>
      {isTab ? <TabProduct /> : <DesktopProduct />}
    </div>
  )
}

export default Products