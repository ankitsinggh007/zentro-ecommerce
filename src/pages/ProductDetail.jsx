import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { productDetailsFetch } from '../features/productsSlice';

function ProductDetail() {

    const {products}=useSelector(state=>state.products.ProductList)
    
    const [product,setProduct]=useState(null);
        const {id}=useParams();

            const dispatch=useDispatch();

    useEffect(()=>{
    //s-1 find by filter;

    const products=products.filter((obj,index)=>obj.id==id);
    if(product) {
        setProduct(product);
    }
    else{

        dispatch(productDetailsFetch(id));

    }


    },[]);  

  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail