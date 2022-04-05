import React, {useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Movies from './Movies'
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';

function MoviesComponent(){
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(500);
  const [sortBy, setSortBy] = useState('popularity');
  function fetchMovies(){
    if(query !== '' || query.length>1  ){
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU&sort_by=${sortBy}.desc&page=${currentPage}&include_adult=false&query=${query}`)
        .then(res => res.json())
        .then(
          (result) => {
            setData(result.results);
            setTotalPage(Math.min(result.total_pages, 500))
          },
        )
    }else{
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU&sort_by=${sortBy}.desc&include_adult=false&include_video=false&page=${currentPage}&with_watch_monetization_types=flatrate`)
      .then(res => res.json())
      .then(
        (result) => {
          setData(result.results);
          setTotalPage(Math.min(result.total_pages, 500))
        },
      )
    }
  }
  useEffect(() => {
    fetchMovies()
    }, [currentPage , sortBy])
  return <div className="App">
          <div className='header'>
              <p className='text' style={{color:'black', margin: '10px 0px'}}>Movies</p>
              <div className='query'>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth disabled={query !== '' || query.length>1}>
                    <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={sortBy}
                      label="Sort"
                      onChange={(e)=>setSortBy(e.target.value)}
                    >
                      <MenuItem value={'popularity'}>Popularity</MenuItem>
                      <MenuItem value={'vote_average'}>Rate</MenuItem>
                      <MenuItem value={'release_date'}>Date</MenuItem>
                    </Select>
                    <FormHelperText>Sort not availabe while search</FormHelperText>
                  </FormControl>
                </Box>
                  <TextField id="outlined-basic" size="small" onChange={(e)=>setQuery(e.target.value)} label="" variant="outlined" />
                  <Button variant="contained" size="large" style={{height:'55px'}} onClick={fetchMovies}>Поиск</Button>
              </div>
          </div>

          <div className='mainPageMovies'>
              <Movies data={data}/>
          </div>
          <div className='pagination'>
            <Pagination count={totalPage} color="primary"  onChange={(event, value)=> setCurrentPage(value)} showFirstButton showLastButton  />
          </div>
      </div>
  }

export default MoviesComponent;