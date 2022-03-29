import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import MovieInfo from './MovieInfo';
import SimilarMovies from './SimilarMovies';
function Movie(){
    const [data, setData] = useState([]);
    const params = useParams();
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU`)
          .then(res => res.json())
          .then(
            (result) => {
              setData(result);
            },
          )
      }, [params])
 
    return <>
        <MovieInfo data={data}/>       
        <SimilarMovies/> 
    </>
}

export default Movie;