import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productsSlice"
export const Store=configureStore({
    reducer:{
        product:productReducer,
    }
})
