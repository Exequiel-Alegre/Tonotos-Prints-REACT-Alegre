
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import ContactForm from './components/ContactForm'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import { CartProvider } from './context/CartContext'

function App() {
  const welcome = 'Bienvenido a Tonotos Prints — descubre nuestras impresiones y diseños únicos!'

  return (
    <CartProvider>
      <Router>
        <div className="min-vh-100 d-flex flex-column">
          <NavBar />
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<ItemListContainer welcomeMessage={welcome} />} />
              <Route path="/category/:categoryId" element={<ItemListContainer welcomeMessage={welcome} />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/contact" element={<ContactForm />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  )
}

export default App
