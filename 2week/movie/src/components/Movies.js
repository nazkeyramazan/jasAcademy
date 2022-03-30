import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/Star'; 
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { useNavigate } from 'react-router-dom';
const URL = "https://image.tmdb.org/t/p/original/";
function Movies({data}){
    const navigate = useNavigate();

    function printStart(number){
        let rate = [];
        
        for(let i=0; i<number-1; i++){
           rate.push(<StarIcon color='inherit' style={{width:"13px", heigth:'13px'}}/>)
        }
        let x = number*10%10;
        if(x>=5){
           rate.push(<StarHalfIcon color='inherit' style={{width:"13px", heigth:'13px'}}/>)
        }
        return rate
    }
    return data.map((item, index)=>(
                <Box sx={{ flexGrow: 0.5}} onClick={()=>{navigate("/movies/"+item.id)}} key={index}>
                    <Grid 
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center" 
                        spacing={1} 
                        >
                        <Grid item xs={0} style={{marginBottom: '18px'}} >
                            <div className='image' style={{backgroundImage: `url(${URL}${item.poster_path})`}} >
                                <div className='poster' >
                                        <div className='rate'>
                                            {printStart(item.vote_average)}
                                        </div>
                                        <p className='title'>{item.title}</p>
                                </div>
                            </div>

                        </Grid>
                    </Grid>
                </Box>
            ))
}


export default Movies;