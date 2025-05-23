import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { productDetailsFetch } from '../features/productsSlice'

function ProductDetail() {
  const dispatch = useDispatch()
  const { id } = useParams()

  const allProducts = useSelector(state => state.products.ProductList.products)
  const { product, loading, error } = useSelector(state => state.products.ProductDetails)

  const [localProduct, setLocalProduct] = useState(null)

  useEffect(() => {
    const selected = allProducts?.find(item => item.id == id)

    if (selected) {
      setLocalProduct(selected)
    } else {
      dispatch(productDetailsFetch(id))
    }
  }, [id, allProducts, dispatch])

  const productToShow = localProduct || product

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <div className="p-4">
      <h1>{localProduct?"from cache":"from fetch"}</h1>
      <img src={productToShow?.image} alt={productToShow?.title} className="h-48 mx-auto" />
      <h1 className="text-xl font-bold mt-4">{productToShow?.title}</h1>
      <p className="text-gray-700 mt-2">₹ {productToShow?.price}</p>
      <p className="mt-2">{productToShow?.description}</p>
      <p className="text-yellow-500 mt-1">⭐ {productToShow?.rating?.rate}</p>
    </div>
  )
}

export default ProductDetail
