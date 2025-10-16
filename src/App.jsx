
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  const welcome = 'Bienvenido a Tonotos Prints — descubre nuestras impresiones y diseños únicos!'

  return (
    <>
      <NavBar />
      <main>
        <ItemListContainer welcomeMessage={welcome} />
      </main>
    </>
  )
}

export default App
