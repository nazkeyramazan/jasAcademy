import React, {useCallback, useEffect, useState} from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";
import Pagination from '@mui/material/Pagination';
import {useSelector, useDispatch} from 'react-redux';

function RickAndMorty(){
    // const [data, setData] = useState([]);
    const rickAndMorty = useSelector((state)=>state.rickAndMorty)
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch();

    const setRickAndMorty = useCallback((data)=>{
        dispatch({type: 'rickAndMorty/set', payload:data})
    }, [dispatch])

    useEffect(()=>{
      fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
      .then(res => res.json())
      .then(
        (result) => {
            setRickAndMorty(result.results);
        },
      )
    },[currentPage]);
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
            <Pagination count={42} color="primary"  onChange={(event, value)=> setCurrentPage(value)} showFirstButton showLastButton  />
          </div>
    </div>
}

export default RickAndMorty;