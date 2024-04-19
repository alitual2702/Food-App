import React from 'react'

const Order = ({order_t , order_discription}) => {
  return (
    <div className="your-order">
        <h2 className="y-order-title">{order_t}</h2>
        <p className="y-order-dis">{order_discription}</p>
    </div>
  )
}

export default Order