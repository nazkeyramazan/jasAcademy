import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { height } from '@mui/system';

function BinarySearch(){

    const [arr, setArr] = useState([5,6,56,4,62,1,6,3,8,8]);
    const [sortedArr, setSortedArr] = useState(arr);
    const [value, setValue] = useState(null)
    const [a, setA] = useState(null)

    function binarySearch(){
        let end = sortedArr.length-1;
        let start = 0;
        while(start<=end){
            let mid = parseInt((start + end)/2);
            if(sortedArr[mid]==value){
                setA(mid)
                return mid
            }
            if(sortedArr[mid] > value){
                end = mid-1;
            }
            if(sortedArr[mid] < value){
                start = mid+1;
            }
        }
        
    }

    function bubbleSort(){
        for(let j=0; j<sortedArr.length-1; j++){

            for(let i=0; i<sortedArr.length-1-j; i++){
                if(sortedArr[i]> sortedArr[i+1]){
                    const t = sortedArr[i];
                    sortedArr[i] = sortedArr[i+1];
                    sortedArr[i+1] = t;
                }
            }
        }        
    }
    function devideArr(array, left , right ){
        let pivot = array[right];
        for(let i = left; i<=right-1; i++){
            if (array[i] < pivot) {
                i++;
                const t = array[i];
                array[i] = array[i+1];
                array[i+1] = t;
            }
        }

    }
    function quickSort(array, left , right ){
        if(left < right){

            let p = devideArr()
        }
    }
    function getIndex(){
        bubbleSort()
        binarySearch()
    }
    return(
        <>
            <p className='textGray'>Array is : {arr.map(item => item+' ')}</p>
            <p className='textGray'>Array is : {sortedArr.map(item => item+' ')}</p>
            <p className='textGray'>Index is : {a}</p>
            <TextField id="outlined-basic" label="Enter array item" onChange={(e)=>{setValue(e.target.value)}} variant="outlined" style={{margin:'25px'}}/>
            <Button onClick={() => getIndex()} style={{margin:'25px'}}> find </Button>

        </>
    )
}

export default BinarySearch;

