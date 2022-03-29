import React from 'react';
// import React, {useEffect, useState} from 'react';
import StarIcon from '@mui/icons-material/Star'; 
import StarHalfIcon from '@mui/icons-material/StarHalf';
const URL = 'https://image.tmdb.org/t/p/original';
function MovieInfo({data}){
    // const [loading, setLoading] = useState(false);
    // useEffect((
    //     setLoading(data)
    // ),[data])
    // console.log(loading);

    function printStar(number){
        let rate = [];
        
        for(let i=0; i<number-1; i++){
           rate.push(<StarIcon color='inherit' key={i} style={{width:"13px", heigth:'13px'}}/>)
        }
        let x = number*10%10;
        if(x>=5){
           rate.push(<StarHalfIcon color='inherit' style={{width:"13px", heigth:'13px'}}/>)
        }
        return rate
    }
    return <>
        {/* {loading? */}
        <div className='posterImage'  style={{backgroundImage: `url(${URL}${data.backdrop_path})`}}>
        <div className='back'>
            {/* {data.genres.map((item)=>(
                <p>{item.name}</p>
            ))} */}
            <div className='movieInfo'>
                <div className='stars'>
                    {printStar(data.vote_average)}
                </div>
                <p className='movieTitle'>{data.original_title}</p>
                <p className='movieOverview'>{data.overview}</p>
            </div>
            
        </div>     
        </div>
       
        {/* : 'Loading'} */}
    </>
}

export default MovieInfo;