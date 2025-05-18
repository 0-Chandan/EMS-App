import { createSlice } from "@reduxjs/toolkit";
import { use } from "react";

const initialState = {
    users: {
      email:"",
      name:"",
      role:"",
    }
};
  
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signUp(state , action){
            state.users= action.payload
        },
        logout(state){
            state.users={};
        }
    }
})

export const {signUp}= userSlice.actions;
export default userSlice.reducer;