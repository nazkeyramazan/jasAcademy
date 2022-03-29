import React, {useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function MovieHeader(){
    const [query, setQuery] = useState();
    // useEffect((
        
    // ),[])
    function handleClick(e){
        console.log(e);
        console.log('esd');
    }
    return <div className='header'>
        <p className='text' style={{color:'black', margin: '10px 0px'}}>Movies</p>
        <div className='query'>
            <TextField id="outlined-basic" size="small" label="" variant="outlined" />
            <Button variant="contained" size="large" onClick={(e)=>handleClick}>Поиск</Button>
        </div>
    </div>
}

export default MovieHeader;