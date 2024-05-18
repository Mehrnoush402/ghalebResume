import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slices/usersSlice";
const store =configureStore({
   reducer:{
      usersList:usersSlice
     } 
})
   

export default store
