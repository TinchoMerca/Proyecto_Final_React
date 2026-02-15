import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'

import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import CartContainer from './components/CartContainer'
import NotFound from './components/NotFound'

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Todos nuestros productos'} />} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos filtrados'} />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
            <Route path='/cart' element={<CartContainer/>} />

            <Route path='*' element={<NotFound />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>

    </div>
  )
}

export default App
