import { createSlice } from '@reduxjs/toolkit'

export const UserSlice = createSlice({
  name: 'User',
  initialState:null,
  reducers: {
    addUser: (state,action) => {
     return action.payload
    },
    removeUser: (state) => {
      return null
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { addUser,removeUser } = UserSlice.actions

export default UserSlice.reducer