import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const MoviesContainer = () => {
    const now_playing=useSelector((Store)=>Store.movies.nowPlaying)
    const trendy=useSelector((Store)=>Store.movies.trendy)
    const top_rated=useSelector((Store)=>Store.movies.top_rated)
  return (
    <div className='bg-black text-white '>
<div className='lg:-mt-60 md:-mt-64 -mt-20  z-20 relative'>
        <MovieList type="now playing "  movies={now_playing}/>
        <MovieList type="Trending "  movies={trendy}/>
        <MovieList type="Top rated"  movies={top_rated}/>
       
        </div>
    </div>
  )
}

export default MoviesContainer