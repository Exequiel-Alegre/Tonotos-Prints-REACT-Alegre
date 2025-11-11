import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function CartWidget() {
  const { totalItems } = useCart()
  const count = totalItems()

  return (
    <Link to="/cart" className="d-flex align-items-center gap-2 text-decoration-none" aria-label="cart-widget">
      <span className="fs-5" aria-hidden>🛒</span>
      {count > 0 && <span className="badge bg-primary">{count}</span>}
    </Link>
  )
}

export default CartWidget
