import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import ProductList from './pages/ProductList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>

        <Route path='/products' Component={ProductList} />

    </Routes>

  )
}

export default App
