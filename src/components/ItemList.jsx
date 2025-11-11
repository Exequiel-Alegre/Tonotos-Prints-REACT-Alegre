import React from 'react'
import { Link } from 'react-router-dom'

function ItemList({ items = [] }) {
  return (
    <div className="row g-3">
      {items.map(item => (
        <div key={item.id} className="col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100">
            <img src={item.image} className="card-img-top" alt={item.title} style={{ height: 140, objectFit: 'cover' }} />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text fw-bold">${item.price}</p>
              <Link to={`/item/${item.id}`} className="btn btn-primary mt-auto">Ver detalle</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ItemList
