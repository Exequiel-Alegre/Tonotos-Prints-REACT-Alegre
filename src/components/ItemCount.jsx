import React, { useState } from 'react'

function ItemCount({ initial = 1, stock = 10, onAdd }) {
  const [count, setCount] = useState(initial)

  function inc() {
    setCount(c => Math.min(stock, c + 1))
  }

  function dec() {
    setCount(c => Math.max(1, c - 1))
  }

  return (
    <div className="d-flex align-items-center gap-2 mt-3">
      <div className="btn-group" role="group" aria-label="count controls">
        <button type="button" className="btn btn-outline-secondary" onClick={dec}>-</button>
        <button type="button" className="btn btn-outline-secondary" disabled>{count}</button>
        <button type="button" className="btn btn-outline-secondary" onClick={inc}>+</button>
      </div>
      <button className="btn btn-success" onClick={() => onAdd && onAdd(count)}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount
