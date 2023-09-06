import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './Slices/UserSlice'
import MovieReducer from './Slices/MovieSlice'
import SignUpSlice from './Slices/SignUpSlice'

export const store = configureStore({
  reducer: {
    user:UserReducer,
    movies:MovieReducer,
    SignUp:SignUpSlice
  },
})