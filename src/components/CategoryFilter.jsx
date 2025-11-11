import React from 'react'
import { Link, useParams } from 'react-router-dom'

const categories = [
  { id: 'impresiones2d', label: 'Impresiones 2D' },
  { id: 'impresiones3d', label: 'Impresiones 3D' },
  { id: 'stickers', label: 'Stickers' }
]

function CategoryFilter() {
  const { categoryId } = useParams()

  return (
    <div className="bg-light py-2">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="dropdown">
            <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="categoryDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              {categoryId ? categories.find(c => c.id === categoryId)?.label || 'Categorías' : 'Categorías'}
            </button>
            <ul className="dropdown-menu" aria-labelledby="categoryDropdown">
              {categories.map(cat => (
                <li key={cat.id}>
                  <Link 
                    to={`/category/${cat.id}`} 
                    className={`dropdown-item ${categoryId === cat.id ? 'active' : ''}`}
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {categoryId && (
            <Link to="/" className="btn btn-outline-secondary">
              Limpiar filtros
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default CategoryFilter