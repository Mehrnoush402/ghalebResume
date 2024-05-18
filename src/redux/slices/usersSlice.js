
import { createSlice } from '@reduxjs/toolkit'

const usersSlice = createSlice({
    name:'usersList',

    initialState: {
          usersList: []
    },

    reducers: {
        adduser: (state,{payload})=>{
          state.usersList.push(payload)
        }// },

        // updateuser:(state,id)=>{

        // },
        
        // deleteuser:(state,id)=>{

        // }
    }
})

export const {adduser}=usersSlice.actions
export default usersSlice.reducer
