import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "UserData",
    initialState: {
        Name: "Adarsh",
        Age: 24,
        Email: "adarshyadav@gmail.com"
    },

    reducers: {
        
        
        setUserByRedux:(state)=>{
           
            state.Name ="yo yo honey singh";
            state.Age = 50;
            state.Email = "meko nhi maloom";
        },

    }

})
export const {setUserByRedux}=UserSlice.actions;
export default UserSlice.reducer;