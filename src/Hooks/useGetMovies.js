import {options} from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addnowPlaying } from "../utils/Slices/MovieSlice";
import axios from 'axios'

export const useGetMovies = async() => {
    const dispatch=useDispatch();
    
       try {
        const data= await axios.get('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
        dispatch(addnowPlaying(data.data.results));
       } catch (error) {
        console.warn(error);
       }
    
}
