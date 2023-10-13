import { createSlice } from "@reduxjs/toolkit";


const initialValue={
            user:{}
   }

const userSlice=createSlice({
    name:"user",
    initialState:{
       value:initialValue
    },
    reducers:{
        userLogin:(state,action)=>{
            state.value=action.payload
        },
        userLogout:(state,action)=>{
            // state.value=action.payload
            state.value=initialValue
        }
    }
})
   

export default userSlice.reducer
export const {userLogin,userLogout}=userSlice.actions