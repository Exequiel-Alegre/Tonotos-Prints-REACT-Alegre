import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  function addItem(product, quantity = 1) {
    setCart(prev => {
      const idx = prev.findIndex(p => p.id === product.id)
      if (idx >= 0) {
        const copy = [...prev]
        copy[idx] = { ...copy[idx], quantity: copy[idx].quantity + quantity }
        return copy
      }
      return [...prev, { ...product, quantity }]
    })
  }

  function removeItem(productId) {
    setCart(prev => prev.filter(p => p.id !== productId))
  }

  function clearCart() {
    setCart([])
  }

  function totalItems() {
    return cart.reduce((s, p) => s + (p.quantity || 0), 0)
  }

  const value = { cart, addItem, removeItem, clearCart, totalItems }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart debe usarse dentro de CartProvider')
  return ctx
}

export default CartContext
