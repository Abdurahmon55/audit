import { createSlice} from '@reduxjs/toolkit';

const initialState={
    product:'grup',
    hadProduct:'',
    page:'grups',
    products:'',
    array:[1,2],
    counter:0,
    grupImage:'',
    toggol:false,
    default:[2, 106, 'http://127.0.0.1:8000/maggio200820011.jpg'],
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
        setArray:(state, action)=>{
            state.array.push(action.payload)
        },
        setCount:(state, action)=>{
            state.counter+=action.payload
        },
        resCount:(state)=>{
            state.counter=0
        },
        setGrupImage:(state, action)=>{
            state.grupImage=action.payload
        },
        setToggol:(state, action)=>{
            state.toggol=action.payload
        }
    }
})

export const {setProduct, setHadProduct, setPage, setProducts, setArray, setCount, resCount, setGrupImage, setToggol}=ProductSlice.actions
export const selectArray=(state)=>state.product.array
export const selectCounter=(state)=>state.product.counter
export const selectToggol=(state)=>state.product.toggol
export const selectDefault=(state)=>state.product.default
export const selectPage=(state)=>state.product.page
export const selectProduct=(state)=>state.product.product
export const selectGrupImage=(state)=>state.product.grupImage
export const selectProducts=(state)=>state.product.products
export const selectHadProduct=(state)=>state.product.hadProduct
export default ProductSlice.reducer