import { createSlice } from '@reduxjs/toolkit'

export const MovieSlice = createSlice({
  name: 'Movie',
  initialState:{
    nowPlaying:null,
    trailer:null
  },
  reducers: {
    addnowPlaying: (state,action) => {
     state.nowPlaying =action.payload;
    }, 
    addTrailer: (state,action) => {
      state.trailer =action.payload;
     },
  
   
  },
})

// Action creators are generated for each case reducer function
export const { addnowPlaying,addTrailer} = MovieSlice.actions

export default MovieSlice.reducer