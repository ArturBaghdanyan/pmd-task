import React from 'react'
import Balance from './tab/balance/balance'
import Transfer from './tab/transfer/transfer'

const TabFooter = () => {
  return (
    <div>
        <Transfer />
        <Balance />
    </div>
  )
}

export default TabFooter