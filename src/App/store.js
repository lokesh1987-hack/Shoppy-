import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from '../Features/Authentication/Auth'

export const store = configureStore({
    reducer:{
        loginAuth: AuthReducer
     }
})