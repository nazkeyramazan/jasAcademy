import React, { useEffect, useCallback} from 'react';
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
import {useSelector, useDispatch} from 'react-redux';
import {fetchMovies} from '../../app/actions/fetchMovies';
function MoviesComponent(){
  const dispatch = useDispatch()

  const movies = useSelector((state)=>state.moviesReducer.movies)
  const sortBy = useSelector((state)=>state.moviesReducer.sortBy);
  const totalPage = useSelector((state)=>state.moviesReducer.totalPage); 
  const currentPage = useSelector((state)=>state.moviesReducer.currentPage); 
  const query = useSelector((state)=>state.moviesReducer.query); 
  
  useEffect(() => {
    dispatch(fetchMovies())
    }, [dispatch])

  const setSortBy = useCallback((payload)=>{
    dispatch({type:'movies/setSortBy', payload})
  }, [dispatch])
  const setQuery = useCallback((payload)=>{
    dispatch({type:'movies/setQuery', payload})
  }, [dispatch])
  const setCurrentPage = useCallback((payload)=>{
    dispatch({type:'movies/setCurrentPage', payload})
  }, [dispatch])
  const searchMovies = useCallback(({currentPage = 1, sortBy = 'popularity'} = {}) => {
    dispatch(fetchMovies({ currentPage, sortBy, query }))
}, [dispatch, query, sortBy])

  

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
                      onChange={(e)=>{
                        setSortBy(e.target.value);
                        searchMovies({ sortBy: e.target.value })
                      }}
                    >
                      <MenuItem value={'popularity'}>Popularity</MenuItem>
                      <MenuItem value={'vote_average'}>Rate</MenuItem>
                      <MenuItem value={'release_date'}>Date</MenuItem>
                    </Select>
                    <FormHelperText>Sort not availabe while search</FormHelperText>
                  </FormControl>
                </Box>
                  <TextField id="outlined-basic" size="small" onChange={(e)=>setQuery(e.target.value)} label="" variant="outlined" />
                  <Button variant="contained" size="large" style={{height:'55px'}} onClick={()=>searchMovies()}>Поиск</Button>
              </div>
          </div>

          <div className='mainPageMovies'>
              <Movies data={movies}/>
          </div>
          <div className='pagination'>
            <Pagination count={totalPage} color="primary" page={currentPage} onChange={(event, value)=> {
                        setCurrentPage(value);
                        searchMovies({ currentPage: value })
                      }} showFirstButton showLastButton  />
          </div>
      </div>
  }

export default MoviesComponent;