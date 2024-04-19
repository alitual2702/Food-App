import React from 'react'

const Cardcomponent = ({numbering , itemone , itemtwo , itemthree}) => {
  return (
    <div className="card-content">
    <h1 className="card-title">Combo {numbering}</h1>
    <p className="card-dis">{itemone}</p>
    <p className="card-dis">{itemtwo}</p>
    <p className="card-dis">{itemthree}</p>
    <p className="card-dis">&#8364;00</p>
    <button >Add to cart</button>
    </div>
  )
}

export default Cardcomponent