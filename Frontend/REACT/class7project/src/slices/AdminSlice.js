import { createSlice } from "@reduxjs/toolkit";
const AdminSlice=createSlice({
    name:"AdminData",
    initialState:{
        name:"Tanishq",
        Age:23,
        Email:"tanishqrimjha31@gmail.com"
    },
 
    reducers:{
        setAdminByRedux:(state)=>{
            state.name="Shubham";
            state.Age=25;
            state.Email="shubhamprajapat@gmail.com"
        }

    }
})
export const {setAdminByRedux}=AdminSlice.actions;
export default AdminSlice.reducer;