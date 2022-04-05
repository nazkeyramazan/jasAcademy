import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Movies from './Movies';
function SimilarMovies(){
    const [data, setData] = useState([]);
    const params = useParams();
   
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${params.id}/similar?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU`)
          .then(res => res.json())
          .then(
            (result) => {
              setData(result.results);
            },
          )
      }, [params])
 
    return <div className='similarMovies'>
        <p className='text'>Similar Movies</p>
        <div className='mov'>
            <Movies data={data}/>
        </div>
    </div> 
    
}
export default SimilarMovies;