import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"User",
    initialState:{
        isUser:localStorage.getItem('user-info')
        ? true
        : false,
        userInfo:localStorage.getItem('user-info')
        ? JSON.parse(localStorage.getItem('user-info'))
        : null,
    },
    reducers:{
        setisUser(state,action){
            state.isUser = action.payload;
        },
        setuserInfo(state,action){
            state.userInfo = action.payload;
            localStorage.setItem("user-info",JSON.stringify(action.payload))
        }
    }
})

export const UserReducer = userSlice.reducer;
export const {setisUser,setuserInfo} = userSlice.actions;