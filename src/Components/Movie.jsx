import React from 'react'

const Movie = ({poster_path,original_title}) => {
  return (
   <>
 <img  className='cursor-pointer h-52 w-52 md:h-80 md:w-96 lg:h-80  p-2 lg:w-96' alt="poster" src={`https://image.tmdb.org/t/p/w500/${poster_path}`}/>


   </>
     )
}

export default Movie