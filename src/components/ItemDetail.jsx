import React from 'react'
import ItemCount from './ItemCount'

// Permite mostrar imágenes locales desde public, assets o URLs remotas
const images = import.meta.glob('../assets/*', { eager: true, query: '?url', import: 'default' })



function getImageSrc(image) {
  if (!image) return '';
  // Si la ruta comienza con /, es local (public)
  if (image.startsWith('/')) return image;
  // Si la ruta comienza con src/assets/, buscar en assets
  if (image.startsWith('src/assets/')) {
    const fileName = image.split('/').pop();
    const match = Object.entries(images).find(([key]) => key.endsWith(fileName));
    return match ? match[1] : image;
  }
  // Si es una URL remota
  return image;
}

function ItemDetail({ item, onAdd }) {
  if (!item) return null

  const imgSrc = getImageSrc(item.image)

  return (
    <div className="container py-3">
      <div className="row g-4">
        <div className="col-md-4">
            <img src={imgSrc} alt={item.name} className="img-fluid rounded" />
        </div>
        <div className="col-md-8">
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p className="h4 fw-bold">${item.price}</p>
          <p className="mb-2">Stock disponible: <span className="fw-bold">{item.stock ?? 0}</span></p>
          <ItemCount onAdd={onAdd} stock={item.stock ?? 0} />
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
