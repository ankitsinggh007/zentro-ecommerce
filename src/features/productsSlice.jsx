import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState={ //is this structure is perfect creating seperae state for each fetch related task as it won't mixup with other
    productList:{ 
        products:null,
        loading:false,
        error:null
    }
}
//currenlty i am using fetch but during enhancement i will replace it with axios as this is presnt in our to do concept from react topic list 
const productFetch=createAsyncThunk("product/productFetch",async (_,thunkAPI)=>{

    try{

        const result=await fetch('https://fakestoreapi.in/api/products');

            const data=JSON.parse(result);
                return data;
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
        builder //did i gracfully handle each state 
        .addCase(productFetch.pending,(state)=>{
            state.productList.loading=true;
        })
        .addCase(productFetch.fulfilled,(state)=>{
            state.productList.products=action.payload;
            state.productList.loading=false;
        })
        .addCase(productFetch.rejected,(state)=>{
            state.productList.error=action.payload||'something went wrong'
        })
    }
})

export {productFetch};

export default product.reducer;
