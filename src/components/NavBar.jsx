import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'

const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'posters', label: 'Posters' },
  { id: 'shirts', label: 'Remeras' },
  { id: 'mugs', label: 'Tazas' }
]

function NavBar() {
  return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
      <div className="container-fluid">
        {/* Logo a la izquierda */}
        <Link to="/" className="navbar-brand d-flex align-items-center" style={{ marginRight: 0 }}>
          <img src="src/assets/tonotos letraslogo.svg" alt="logo" className="d-inline-block" style={{ width: 150, height: 50 }} />
        </Link>

        {/* Toggler (hamburguesa) visible en pantallas pequeñas */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapse que contendrá los enlaces centrados */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className={({isActive}) => `nav-link ${isActive ? 'active fw-bold' : ''}`} end>
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className={({isActive}) => `nav-link ${isActive ? 'active fw-bold' : ''}`}>
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>

        {/* CartWidget a la derecha */}
        <div className="d-flex align-items-center">
          <CartWidget />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
