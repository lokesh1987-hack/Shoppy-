import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    islogin:false
}

export const authSlice = createSlice({
    name:'Authentication',
    initialState,
    reducer:{
        loginAuth: (state,action)=>{
            console.log(action.payload)
            state.value = action.payload
        },
    
    }

})

export const { loginAuth } = authSlice.actions
export const Authlogin = (state)=> state.Authentication.value
console.log(Authlogin)
export default authSlice.reducer