import React from 'react'
import ItemCount from './ItemCount'

// Importar todas las imágenes de assets
const images = import.meta.glob('../assets/*', { eager: true, as: 'url' })

function getImageSrc(imagePath) {
  if (imagePath.startsWith('src/assets/')) {
    // Extraer solo el nombre del archivo
    const fileName = imagePath.split('/').pop()
    // Buscar en el objeto images
    const match = Object.entries(images).find(([key]) => key.endsWith(fileName))
    return match ? match[1] : imagePath
  }
  return imagePath
}

function ItemDetail({ item, onAdd }) {
  if (!item) return null

  const imgSrc = getImageSrc(item.image)

  return (
    <div className="container py-3">
      <div className="row g-4">
        <div className="col-md-4">
          <img src={imgSrc} alt={item.title} className="img-fluid rounded" />
        </div>
        <div className="col-md-8">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p className="h4 fw-bold">${item.price}</p>
          <ItemCount onAdd={onAdd} />
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
