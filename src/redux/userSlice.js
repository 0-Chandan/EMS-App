import { createSlice } from "@reduxjs/toolkit";

const initialState={
    users:[],
    currrentUser:null,
};

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        signUp:(state,action)=>{
            state.users.push(action.payload);
        },

        login:(state,action)=>{
            const user = state.users.find((u)=>
                u.email===action.payload.email &&
                u.password===action.payload.password
            );

            if(user){
                state.currrentUser=user;
            }
        },
        
    },
})
export const{signUp,login}=userSlice.actions;
export default userSlice.reducer;

