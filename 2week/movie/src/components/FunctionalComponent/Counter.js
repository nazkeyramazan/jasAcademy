import React, {useState, useEffect, useRef} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function FunctionalCounter() {
    let [counter, setCounter] = useState(20);
    const [arr] = useState([1 , 2 , 4 , 75 , 25])
    const [value, setValue] = useState(null);
    const [decimal, setDecimal] = useState('');
    const [binary, setBinary] = useState('');
    const interval = useRef();
    useEffect(()=>{
        return () => {
            clearTimeout(interval.current);
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
            clearTimeout(interval.current);
        }
        
    }
    function increaseCounter(){
        clearTimeout(interval.current);
        setCounter(counter+1);
    }
    function decreaseCounter(){
        clearTimeout(interval.current);
        setCounter(counter-1);
    }
    let newV = value;

    function toBinary(){
        let num = '';

        while(newV>0){
            num = newV%2 +''+ num ;
            newV= parseInt(newV/2);
        }
        setBinary(num);
        setDecimal(value);
    }
    function toDecimal(){
        let binary = '';
        
        binary = value.toString().split();
        binary = binary[0];
        let decimal = 0;
        for(let i = 0; i < binary.length; i++) {
            decimal = (decimal * 2) + binary[i] ;
            console.log('decimal'+decimal)
        }
        let v = 0;
        for(let i = 0; i < decimal.toString().length; i++) {
            v =  v + decimal[i];
        }
        setBinary(value);
        setDecimal(v);
    }
    return (
        <>
            <p className='textGray'>{counter}</p>
            <br/>
            <Button onClick={() => increaseCounter()}> Increase </Button>
            <Button onClick={() => decreaseCounter()}> Decrease </Button>
            <Button onClick={() => startCountDown()}> Auto Decrease </Button>
            <br/>
            <p className='textGray'>Array is : {arr.map(item => item+' ')}</p>
            <br/>
            <p className='textGray'>Array sum is : {arr.reduce((acc, item)=>{
                return acc + item
            })}</p>
            <div style={{margin:'35px'}}>
                <TextField id="outlined-basic" label="Enter a number" onChange={(e)=>{setValue(e.target.value)}} variant="outlined" />
                <p className='textGray'>Entered value: {value}</p>
                <p className='textGray'>Decimal: {decimal}</p>
                <p className='textGray'>Binary: {binary}</p>
                <Button onClick={() => toBinary()}> Convert to Binary </Button>
                <Button onClick={() => toDecimal()}> Convert to Decimal</Button>

            </div>
            
        </>

      );
}

export default FunctionalCounter;