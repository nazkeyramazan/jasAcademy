import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/Star'; 
import StarHalfIcon from '@mui/icons-material/StarHalf';

const URL = "https://image.tmdb.org/t/p/original/";
function Movie({data}){

    // function genreGenerator(genre){
    //         if(genre=== 16) return 'Comedy'
    //         if(genre === 28) return 'Fantasy'
    //         if(genre === 80) return 'Qwerty'
    //         if(genre === 12) return 'Asdfg'
    //         if(genre === 27) return 'asdfsh'
    //         if(genre === 53) return 'Lkjhgf'
    //         if(genre === 18) return 'Yhbjnkm'
    //         if(genre === 878) return 'Okbjvc'
    // }
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
        <>
          <Box sx={{ flexGrow: 0.5}} >
            <Grid 
                container
                direction="row"
                justifyContent="center"
                alignItems="center" 
                spacing={1} 
                >
                <Grid item xs={0} style={{marginBottom: '18px'}}>
                    <div className='image' style={{backgroundImage: `url(${URL}${item.poster_path})`}} key={index}>
                        <div className='poster' >
                                {/* <p className='genre'>{genreGenerator(item.genre_ids[0])}</p> */}
                                <div className='rate'>
                                    {printStart(item.vote_average)}
                                </div>
                                <p className='title'>{item.title}</p>
                        </div>
                    </div>

                </Grid>
            </Grid>
            </Box>
        </>
    ))
}

export default Movie;