import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import ProductList from './pages/ProductList'
import ProductDetail from './pages/ProductDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>

        <Route path='/products' Component={ProductList} />
      <Route path='/product/:id' Component={ProductDetail}/>
    </Routes>

  )
}

export default App
