import React from 'react'
import DesktopProduct from './desktopProduct';
import TabProduct from './tabProduct';

const Products = ({isTab}) => {

  return (
    <section>
      {isTab ? <TabProduct /> : <DesktopProduct />}
    </section>
  )
}

export default Products