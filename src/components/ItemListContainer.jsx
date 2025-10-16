import React from 'react'

function ItemListContainer({ welcomeMessage }) {
  return (
    <section style={{ padding: '2rem 1rem' }}>
      <h2>Catálogo</h2>
      <p>{welcomeMessage}</p>
      {/* Aqui se mostrará la lista de productos en el futuro */}
    </section>
  )
}

export default ItemListContainer
