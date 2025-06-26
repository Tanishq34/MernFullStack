import { configureStore } from "@reduxjs/toolkit";
import AdminSlice from '../slices/AdminSlice.js'
import UserSlice from "../slices/UserSlice.js"
  export const Store=configureStore({
    reducer:{
        AdminData : AdminSlice,
        UserData : UserSlice
    }
 })