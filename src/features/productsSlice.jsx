import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState={ //is this structure is perfect creating seperae state for each fetch related task as it won't mixup with other
    ProductList:{ 
        products:null,
        loading:false,
        error:null
    },
    ProductDetails:{
        product:null,
        loading:false,
        error:null
    }
}
//currenlty i am using fetch but during enhancement i will replace it with axios as this is presnt in our to do concept from react topic list 
const productFetch=createAsyncThunk("product/productFetch",async (_,thunkAPI)=>{

    try{

        const result=await fetch('https://fakestoreapi.com/products');

            const data=await result.json(); // in genrall i see we mostly parse data that come from json ,is this parsing happen if yes then then what about Json.parse(result);
                return data;
    }
                catch(error){

                    return thunkAPI.rejectWithValue(error.message || "Something went wrong");

        }
    
})


const productDetailsFetch=createAsyncThunk('product/productDetailsFetch',async (id,thunkAPI)=>{
    try{

        const result=await fetch(`https://fakestoreapi.com/products/${id}`);

        const data=await result.json();
        return data;
    }
    catch(error){

        return thunkAPI.rejectWithValue(error.message||"something went wrong")

    }   

});




const productSlice=createSlice({
    name:"product",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder //did i gracefully handle each state 
        .addCase(productFetch.pending,(state)=>{
            state.ProductList.loading=true;
            state.ProductList.error = null;
            state.ProductList.products = [];
        })
        .addCase(productFetch.fulfilled,(state,action)=>{
            state.ProductList.products=action.payload;
            state.ProductList.loading=false;
        })
        .addCase(productFetch.rejected,(state,action)=>{
            state.ProductList.error=action.payload||'something went wrong'
        })
        // productDetailsFetch
         .addCase(productDetailsFetch.pending,(state)=>{
            state.ProductDetails.loading=true;
            state.ProductDetails.error = null;
            state.ProductDetails.product = null;

        })
        .addCase(productDetailsFetch.fulfilled,(state,action)=>{
            state.ProductDetails.product=action.payload;
            state.ProductDetails.loading=false;
        })
        .addCase(productDetailsFetch.rejected,(state,action)=>{
            state.ProductDetails.error=action.payload||'something went wrong'
        })
    }
})

export {productFetch,productDetailsFetch};

export default productSlice.reducer;
