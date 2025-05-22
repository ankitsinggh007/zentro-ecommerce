import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { productFetch } from '../features/productsSlice';

function ProductList() {
  

  const {products,loading,error}=
  useSelector(state=>state.products.ProductList)
  
  const dispatcher=useDispatch();
    useEffect(()=>{

          dispatcher(productFetch());
    },[]);
  console.log(products,loading,error)
  
  
  return (
    




    <div>

        <h1> Product List </h1>
    </div>
  )
}

export default ProductList;