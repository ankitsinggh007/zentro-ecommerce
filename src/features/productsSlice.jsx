import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState={ //is this structure is perfect creating seperae state for each fetch related task as it won't mixup with other
    ProductList:{ 
        products:null,
        loading:false,
        error:null
    }
}
//currenlty i am using fetch but during enhancement i will replace it with axios as this is presnt in our to do concept from react topic list 
const productFetch=createAsyncThunk("product/productFetch",async (_,thunkAPI)=>{

    try{

        const result=await fetch('https://fakestoreapi.in/api/products');

            const data=await result.json(); // in genrall i see we mostly parse data that come from json ,is this parsing happen if yes then then what about Json.parse(result);
                return data.products;
    }
                catch(error){

                    return thunkAPI.rejectWithValue(error);

        }
    
})


const product=createSlice({
    name:"product",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder //did i gracefully handle each state 
        .addCase(productFetch.pending,(state)=>{
            state.ProductList.loading=true;
        })
        .addCase(productFetch.fulfilled,(state,action)=>{
            state.ProductList.products=action.payload;
            state.ProductList.loading=false;
        })
        .addCase(productFetch.rejected,(state,action)=>{
            state.ProductList.error=action.payload||'something went wrong'
        })
    }
})

export {productFetch};

export default product.reducer;
