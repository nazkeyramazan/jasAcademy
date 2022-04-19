import React, {useCallback, useEffect, useState} from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";
import Pagination from '@mui/material/Pagination';
import {useSelector, useDispatch} from 'react-redux';
import {fetchRickAndMorty} from '../../app/actions/fetchRickAndMorty'
function RickAndMorty(){
    // const [data, setData] = useState([]);
    const rickAndMorty = useSelector((state)=>state.rickAndMortyReducer.rickAndMorty)
    const currentPage = useSelector((state)=>state.rickAndMortyReducer.currentPage);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    
    const setCurrentPage = useCallback((currentPage)=>{
        dispatch({type:'rickAndMorty/setCurrentPage', payload: currentPage})
    }, [dispatch])
    const searchMovies = useCallback((value) => {
        dispatch(fetchRickAndMorty({ currentPage:value }))
    }, [dispatch, currentPage])
    useEffect(() => {
        dispatch(fetchRickAndMorty())
        }, [dispatch])
    return <div className="App">
        {
            rickAndMorty.map((item, index)=>(
                <Box sx={{ flexGrow: 0.5}} onClick={()=>{navigate("/rickAndMorty/"+item.id)}} key={index}>
                    <Grid 
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center" 
                        spacing={1} 
                        >
                        <Grid item xs={0} style={{margin: '13.5px'}} >
                            <div className="characterBlock">
                                <img className="rickImage" src={item.image} alt=''></img>
                                <div className="characterInfo" >
                                        
                                    <p className='characterName'>Name: {item.name}</p>
                                    <p className='characterName'>Status: {item.status}</p>
                                    <p className='characterName'>Species: {item.species}</p>
                                    <div>
                                        <p className='textGray'>Last known location:</p>
                                        <p className='characterName'>{item.location.name}</p>
                                    
                                    </div>
                                    
                                </div>
                            </div>
                            

                        </Grid>
                    </Grid>
                </Box>
            ))
        }
        <div className='pagination'>
            <Pagination count={42} color="primary"  onChange={(event, value)=> {
                setCurrentPage(value)
                searchMovies(value)
                }} showFirstButton showLastButton  />
          </div>
    </div>
}

export default RickAndMorty;