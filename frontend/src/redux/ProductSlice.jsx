import { createSlice} from '@reduxjs/toolkit';

const initialState={
    product:''
}

const ProductSlice=createSlice({
    name:'product',
    initialState,
    reducers:{
        setProduct:(state, action)=>{
            state.product=action.payload
        }
    }
})

export const {setProduct}=ProductSlice.actions
export const selectProduct=(state)=>state.product.product
export default ProductSlice.reducer