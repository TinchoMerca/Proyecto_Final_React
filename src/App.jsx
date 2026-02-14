import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContext } from './context/CartContext'

import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import NotFound from './components/NotFound'

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <CartContext>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Todos nuestros productos'} />} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos filtrados'} />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />

            <Route path='*' element={<NotFound />} />
          </Routes>
        </CartContext>
      </BrowserRouter>

    </div>
  )
}

export default App
