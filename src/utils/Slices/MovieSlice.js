import { createSlice } from '@reduxjs/toolkit'

export const MovieSlice = createSlice({
  name: 'Movie',
  initialState:{
    nowPlaying:null,
    trailer:null,
    trendy:null,
    top_rated:null
  },
  reducers: {
    addnowPlaying: (state,action) => {
     state.nowPlaying =action.payload;
    }, 
    addTrailer: (state,action) => {
      state.trailer =action.payload;
     },
  addTrendy:(state,action) => {
    state.trendy =action.payload;
   },
   addToprated:(state,action) => {
    state.top_rated =action.payload;
   }
   
  },
})

// Action creators are generated for each case reducer function
export const { addnowPlaying,addTrailer,addTrendy,addToprated} = MovieSlice.actions

export default MovieSlice.reducer