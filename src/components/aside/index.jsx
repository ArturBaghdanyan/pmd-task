import React from 'react'

import Dashboard from '../../pages/dashboard/index';
import OrdersPage from '../../pages/orders';
import { Routes, Route } from 'react-router-dom';
import OrderDetails from '../../pages/orders/order-details/orderDetails';
import ProductPage from '../../pages/products';
import Statistics from '../../pages/statistics';
import ProductDetails from '../../pages/products/productDetails';

const AsidePage = ({isTab}) => {
  return (
    <aside>  
      <Routes>
        <Route path="/" element={<Dashboard isTab={isTab} />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/orderDetails" element={<OrderDetails />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/productDetails" element={<ProductDetails />} />

        <Route path="/statistics" element={<Statistics />} />

      </Routes>
    </aside>
  )
}

export default AsidePage