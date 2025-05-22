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
//   if (loading) return ;
// if (error) return <p>{error}</p>;
  
  return (
    <div>
      {
        loading && <p>Loading...</p>
      }

      {
        error && <p>{error}</p>
      }
      
  <div className="grid grid-cols-3 gap-4">
    {products?.map(product => (
      <div key={product.id} className="border p-4">
        <img src={product.image} className="h-32 mx-auto" />
        <h2 className="text-lg">{product.title}</h2>
        <p>₹ {product.price}</p>
        <p>⭐ {product.rating?.rate}</p>
      </div>
    ))}
  </div>
  </div>
);

}

export default ProductList;