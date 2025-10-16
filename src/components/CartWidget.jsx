import React from 'react'

function CartWidget({ count = 0 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }} aria-label="cart-widget">
      <span style={{ fontSize: '1.25rem' }} aria-hidden>🛒</span>
      <span>{count}</span>
    </div>
  )
}

export default CartWidget
