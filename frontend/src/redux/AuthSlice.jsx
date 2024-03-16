import { createSlice} from '@reduxjs/toolkit';

const initialState ={
    auth:0,
    authData:'',
}

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        authId:(state, action)=>{
            state.auth=action.payload
        },
        setAuthData:(state, action)=>{
            state.authData=action.payload
        }
    }
})

export const {authId, setAuthData}=authSlice.actions
export const selectAuthId=(state)=>state.auth.auth
export const selectAuthData=(state)=>state.auth.authData
export default authSlice.reducer