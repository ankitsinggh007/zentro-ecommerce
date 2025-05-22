import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productsSlice"
export const Store=configureStore({
    reducer:{
        products:productReducer,
    }
})
