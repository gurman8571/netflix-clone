import { createSlice } from '@reduxjs/toolkit'

export const SignUpSlice = createSlice({
  name: 'SignUp',
  initialState:{
    email:null,
    password:null,
  },
  reducers: {
    addemail: (state,action) => {
     state.email =action.payload;
    }, 
  
   
  },
})

// Action creators are generated for each case reducer function
export const { addemail} = SignUpSlice.actions

export default SignUpSlice.reducer