import React, { useEffect} from 'react'
import Header from './Header' 
import axios from 'axios'
import {options} from '../utils/constants'
import { useDispatch} from 'react-redux'
import { addnowPlaying } from "../utils/Slices/MovieSlice";
import MainContainer from './MainContainer'



const Browse = () => {

   
    const dispatch=useDispatch();
    const getMovies=async()=>{  
       try {
        const data= await axios.get('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
        
        dispatch(addnowPlaying(data.data.results));
       } catch (error) {
        console.warn(error);
       }
    }

    useEffect(() => {
      getMovies()
    }, [])
    
  return (
    
    <div>
        <Header/>
        <MainContainer/>
        </div>
  )
}

export default Browse