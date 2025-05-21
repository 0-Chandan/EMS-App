import { createSlice } from "@reduxjs/toolkit";
import { use } from "react";

const initialState = {
    users: {
      email:"",
      name:"",
      role:"",
    },
    empattencedata:{
      logoutTime:"",
        loginTime:"",
        latitude:0,
        longitude:0,
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
            state.empattencedata={};
        },
        someinfoattendence(state , action){
            state.empattencedata= action.payload
        }
    }
})

export const {signUp , logout , someinfoattendence}= userSlice.actions;
export default userSlice.reducer;