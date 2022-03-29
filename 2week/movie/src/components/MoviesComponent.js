import React, {useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Movies from './Movies'
function MoviesComponent(){
  const [data, setData] = useState([]);
  const [query, setQuery] = useState();
  function handleClick(){
    if(query.length>=3){
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU&page=1&include_adult=false&query=${query}`)
        .then(res => res.json())
        .then(
          (result) => {
            setData(result.results);
          },
        )
    }else{
      fetchMovies()
    }
  }
  function handleChange(e){
      setQuery(e.target.value)
  }
  function fetchMovies(){
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate")
    .then(res => res.json())
    .then(
      (result) => {
        setData(result.results);
      },
    )
  }
  useEffect(() => {
    fetchMovies()
    }, [])
  return <div>
      <div className='header'>
          <p className='text' style={{color:'black', margin: '10px 0px'}}>Movies</p>
          <div className='query'>
              <TextField id="outlined-basic" size="small" onChange={(e)=>handleChange(e)} label="" variant="outlined" />
              <Button variant="contained" size="large" onClick={handleClick}>Поиск</Button>
          </div>
      </div>

      <div className='mainPageMovies'>
          <Movies data={data}/>
      </div>
  </div>

}

export default MoviesComponent;