import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Cart() {
  const { cart, removeItem, clearCart, totalItems } = useCart()
  const navigate = useNavigate()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (totalItems() === 0) {
    return (
      <div className="container py-5 text-center">
        <h2>Tu carrito está vacío</h2>
        <p className="lead">¡Agrega algunos productos!</p>
        <Link to="/" className="btn btn-primary">Ver productos</Link>
      </div>
    )
  }

  function handleCheckout() {
    alert('¡Gracias por tu compra! (simulado)')
    clearCart()
    navigate('/')
  }

  return (
    <div className="container py-4">
      <h2 className="mb-4">Tu carrito</h2>
      
      <div className="table-responsive mb-4">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio unit.</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map(item => (
              <tr key={item.id}>
                <td>
                  <div className="d-flex align-items-center">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      style={{ width: 50, height: 50, objectFit: 'cover' }}
                      className="me-3"
                    />
                    {item.title}
                  </div>
                </td>
                <td>{item.quantity}</td>
                <td>${item.price}</td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button 
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => removeItem(item.id)}
                  >
                    ×
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3" className="text-end fw-bold">Total:</td>
              <td className="fw-bold">${total.toFixed(2)}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="d-flex gap-2 justify-content-end">
        <Link to="/" className="btn btn-outline-secondary">
          Seguir comprando
        </Link>
        <button 
          className="btn btn-outline-danger"
          onClick={clearCart}
        >
          Limpiar carrito
        </button>
        <button 
          className="btn btn-primary"
          onClick={handleCheckout}
        >
          Realizar compra
        </button>
      </div>
    </div>
  )
}

export default Cart