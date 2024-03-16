import { createSlice} from '@reduxjs/toolkit';

const initialState={
    product:'grup',
    hadProduct:'',
    page:'grups',
    products:'',
    toggol:[1,2],
    counter:0,
    grupImage:'',
}

const ProductSlice=createSlice({
    name:'product',
    initialState,
    reducers:{
        setProduct:(state, action)=>{
            state.product=action.payload
        },
        setHadProduct:(state, action)=>{
            state.hadProduct=action.payload
        },
        setPage:(state, action)=>{
            state.page=action.payload
        },
        setProducts:(state, action)=>{
            state.products=action.payload
        },
        setToggol:(state, action)=>{
            state.toggol.push(action.payload)
        },
        setCount:(state, action)=>{
            state.counter+=action.payload
        },
        resCount:(state)=>{
            state.counter=0
        },
        setGrupImage:(state, action)=>{
            state.grupImage=action.payload
        }
    }
})

export const {setProduct, setHadProduct, setPage, setProducts, setToggol, setCount, resCount, setGrupImage}=ProductSlice.actions
export const selectToggol=(state)=>state.product.toggol
export const selectCounter=(state)=>state.product.counter
export const selectPage=(state)=>state.product.page
export const selectProduct=(state)=>state.product.product
export const selectGrupImage=(state)=>state.product.grupImage
export const selectProducts=(state)=>state.product.products
export const selectHadProduct=(state)=>state.product.hadProduct
export default ProductSlice.reducer