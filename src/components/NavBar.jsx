import React from 'react'
import CartWidget from './CartWidget'

function NavBar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 1rem', backgroundColor: '#000', color: '#fff' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <img src="src/assets/tonotos letraslogo.svg" alt="logo" style={{ width: 150, height: 88, }} />
      </div>

      <ul style={{ listStyle: 'none', display: 'flex', gap: 16, margin: 0, padding: 0 }}>
        <li><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Inicio</a></li>
        <li><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Productos</a></li>
        <li><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Contacto</a></li>
      </ul>

      <CartWidget count={0} />
    </nav>
  )
}

export default NavBar
