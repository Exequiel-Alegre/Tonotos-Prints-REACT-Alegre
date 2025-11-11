import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProductById } from '../data/products'
import ItemDetail from './ItemDetail'
import { useCart } from '../context/CartContext'

function ItemDetailContainer() {
  const { id } = useParams()
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { addItem } = useCart()

  useEffect(() => {
    setLoading(true)
    setError(null)
    fetchProductById(id)
      .then(p => setItem(p))
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [id])

  function handleAdd(quantity) {
    if (!item) return
    addItem(item, quantity)
    
    // Mostrar mensaje de éxito
    const message = document.createElement('div')
    message.className = 'alert alert-success alert-dismissible fade show position-fixed top-0 start-50 translate-middle-x mt-3'
    message.innerHTML = `
      <strong>¡Éxito!</strong> Agregaste ${quantity} ${quantity === 1 ? 'unidad' : 'unidades'} de ${item.title} al carrito.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `
    document.body.appendChild(message)
    
    // Remover el mensaje después de 3 segundos
    setTimeout(() => {
      message.remove()
    }, 3000)
  }

  if (loading) return <p className="loading">Cargando producto...</p>
  if (error) return <p className="loading">Error: {error}</p>

  return <ItemDetail item={item} onAdd={handleAdd} />
}

export default ItemDetailContainer
