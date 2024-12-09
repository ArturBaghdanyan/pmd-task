import React from 'react'

import Dashboard from '../../pages/dashboard/index';
import OrdersPage from '../../pages/orders';
import { Routes, Route } from 'react-router-dom';

const AsidePage = () => {
  return (
    <aside>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<OrdersPage />} />
      </Routes>
    </aside>
  )
}

export default AsidePage