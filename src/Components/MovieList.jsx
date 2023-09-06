import React from 'react'
import Movie from './Movie';

const MovieList = ({movies,type}) => {
    
  return (
    <div className=' lg:mx-20 md:mx-20 mx-12 '>
       <p className='text-3xl m-4 font-bold pt-8 capitalize italic'> {type}</p>
      
        <div className='flex overflow-x-scroll'>

        {movies?.map((movie)=>{

            return(
               <Movie key={movie?.id} {...movie} />
        )})}
    </div>
    </div>
  )
}

export default MovieList