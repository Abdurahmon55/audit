import { createSlice} from '@reduxjs/toolkit';

const initialState ={
    auth:0
}

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        authId:(state, action)=>{
            state.auth=action.payload
        }
    }
})

export const {authId}=authSlice.actions
export const selectAuthId=(state)=>state.auth.auth
export default authSlice.reducer