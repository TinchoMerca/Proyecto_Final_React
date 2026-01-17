import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
    <>

      {/* Traemos el NavBar con el CartWidget integrado */}
      <NavBar/>

      {/* Traemos el ListContainer y le pasamos la prop */}
      <ItemListContainer mensaje={'Bienvenidos a la tienda!'}/>
      
    </>
  )
}

export default App
