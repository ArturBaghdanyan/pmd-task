import React from 'react'

import Dashboard from '../../pages/dashboard/index';
import OrdersPage from '../../pages/orders';
import { Routes, Route } from 'react-router-dom';
import OrderDetails from '../../pages/orders/order-details/orderDetails';

const AsidePage = ({isTab}) => {
  return (
    <aside>  
      <Routes>
        <Route path="/" element={<Dashboard isTab={isTab} />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/orderDetails" element={<OrderDetails />} />
      </Routes>
    </aside>
  )
}

export default AsidePage