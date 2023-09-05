import axios from 'axios'
import React, { useEffect ,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { options } from '../utils/constants'
import{addTrailer} from '../utils/Slices/MovieSlice'
import MainContainerBg from './MainContainerBg'
import MainContinerTitle from './MainContinerTitle'


const MainContainer = () => {
const dispatch = useDispatch();

const movies=useSelector((Store)=>Store.movies.nowPlaying)
const trailer=useSelector((Store)=>Store.movies.trailer)
const movie=movies?movies[0]:null;

const getdetails=async()=>{


try {
const data= await axios.get(`https://api.themoviedb.org/3/movie/${615656}/videos?language=en-US`, options)
const videos=data?.data.results;
const trailers=videos.filter(video=>video.type ==='Trailer');
dispatch(addTrailer(trailers[0]?.key))




} catch (error) {
console.warn(error);
}
}
useEffect(() => {
getdetails()
}, [])

//console.warn(movie)
return (
    <div className='pt-[30%] bg-black md:pt-0'>
<MainContinerTitle title={movie?.original_title} overview={movie?.overview} />  
 <MainContainerBg trailer={trailer}/>
  </div>

)
}

export default MainContainer
