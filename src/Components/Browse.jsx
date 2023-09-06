import React, { useEffect} from 'react'
import Header from './Header' 
import axios from 'axios'
import {options} from '../utils/constants'
import { useDispatch} from 'react-redux'
import { addnowPlaying,addTrendy,addToprated } from "../utils/Slices/MovieSlice";
import MainContainer from './MainContainer'
import MoviesContainer from './MoviesContainer'




const Browse = () => {

   
    const dispatch=useDispatch();
    const getnowPlayingMovies=async()=>{  
       try {
        const data= await axios.get('https://api.themoviedb.org/3/movie/now_playing?language=en-IN&page=1', options)
        
        dispatch(addnowPlaying(data.data.results));
       } catch (error) {
        console.warn(error);
       }
    }

    const getTrendyMovies=async()=>{  
        try {
         const data= await axios.get('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=2', options)
         
         dispatch(addTrendy(data.data.results));
        } catch (error) {
         console.warn(error);
        }
     }
     const getTopRated=async()=>{  
        try {
         const data= await axios.get('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
         
         dispatch(addToprated(data.data.results));
        } catch (error) {
         console.warn(error);
        }
     }
     
    useEffect(() => {
        getnowPlayingMovies()
    }, [])
    useEffect(() => {
        getTrendyMovies()
    }, [])
    useEffect(() => {
        getTopRated();
    }, [])
  return (
    
    <div>
        <Header/>
        <MainContainer/>
        <MoviesContainer/>
        </div>
  )
}

export default Browse