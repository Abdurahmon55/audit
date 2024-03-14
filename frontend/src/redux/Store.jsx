import { configureStore } from '@reduxjs/toolkit';
import authReduce from './AuthSlice'
import productReduce from './ProductSlice'
const store = configureStore({
    reducer:{
        auth:authReduce,
        product:productReduce
    }
})

export default store