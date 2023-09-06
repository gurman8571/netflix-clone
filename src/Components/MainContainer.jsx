import { useSelector } from 'react-redux'
import MainContainerBg from './MainContainerBg'
import MainContinerTitle from './MainContinerTitle'


const MainContainer = () => {

const movies=useSelector((Store)=>Store.movies.nowPlaying)
if (!movies) return;
const movie = movies[10];

return (
<div className='pt-[30%] bg-black md:pt-0'>
    <MainContinerTitle title={movie?.original_title} overview={movie?.overview} />
    <MainContainerBg movieId={movie?.id} />
</div>

)
}

export default MainContainer
