import React, {useState, useEffect, useCallback} from 'react';
import { useParams } from 'react-router-dom';
import MovieInfo from './MovieInfo';
import SimilarMovies from './SimilarMovies';
import {useSelector, useDispatch} from 'react-redux';
function Movie(){
    // const [data, setData] = useState([]);
    const movies = useSelector((state)=>(state.moviesReducer.movies))
    const dispatch = useDispatch();
    const params = useParams();
    const setMovies = useCallback((movies)=>{
      dispatch({type: 'movies/set', payload: movies})
    }, [dispatch])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU`)
          .then(res => res.json())
          .then(
            (result) => {
              setMovies(result);
            },
          )
      }, [params])
 
    return <>
        <MovieInfo data={movies}/>       
        <SimilarMovies/> 
    </>
}

export default Movie;