import React, {useState, useEffect, useRef} from 'react';
import Button from '@mui/material/Button';

function FunctionalCounter() {
    let [counter, setCounter] = useState(20);
    const interval = useRef();
    useEffect(()=>{
        return () => {
            clearInterval(interval.current);
        }
    }, [])
    const startCountDown = () => {
        if(counter>0){
            interval.current = setTimeout(()=>{
                setCounter((prev) => prev - 1);
                counter--;

                startCountDown()
            },1000)
        }
        else{
            clearInterval(interval.current);
        }
        
    }
    function increaseCounter(){
        clearInterval(interval);
        setCounter(counter+1);
    }
    function decreaseCounter(){
        clearInterval(interval.current);
        setCounter(counter-1);
    }
    
    return (
        <>
            <div>{counter}</div>
            <Button onClick={() => increaseCounter()}> Increase </Button>
            <Button onClick={() => decreaseCounter()}> Decrease </Button>
            <Button onClick={() => startCountDown()}> Auto Decrease </Button>
        </>

      );
}

export default FunctionalCounter;