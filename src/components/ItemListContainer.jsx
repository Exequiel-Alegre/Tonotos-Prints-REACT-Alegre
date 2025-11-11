import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import CategoryFilter from './CategoryFilter'
import { fetchProducts } from '../data/products'

function ItemListContainer({ welcomeMessage }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)
    fetchProducts()
      .then(all => {
        const filtered = categoryId ? all.filter(p => p.category === categoryId) : all
        setItems(filtered)
      })
      .finally(() => setLoading(false))
  }, [categoryId])

  return (
    <>
      <CategoryFilter />
      <div className="container py-4">
        {welcomeMessage && <p className="lead text-center mb-4">{welcomeMessage}</p>}
        {loading ? (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
          </div>
        ) : (
          <ItemList items={items} />
        )}
      </div>
    </>
  )
}

export default ItemListContainer
