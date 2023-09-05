import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './Slices/UserSlice'
import MovieReducer from './Slices/MovieSlice'
export const store = configureStore({
  reducer: {
    user:UserReducer,
    movies:MovieReducer
  },
})