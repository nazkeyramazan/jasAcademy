import React, {useState, useEffect} from 'react'
import './App.css';
import {tableData} from './data';

let interval;
function App() {

  const [isOnlyInstalment, setIsOnlyInstalment] = useState(false)
  const [isOnlyExists, setIsOnlyExists] = useState(false)
  const [sortBy, setSortBy] = useState()
  const [isAscOrder, setIsAscOrder] = useState(false);
  
  const [number, setNumber] = useState()
  const [arr1, setArr] = useState([]);
  const [factorialNumber, setFactorial] = useState()
  const [countNumber, setCountNumber ] = useState()
  function sortByColumn(columnName){
    isAscOrder ? setIsAscOrder(false) :setIsAscOrder(true)
    setSortBy(columnName)
  }

  
  function toggleFirstCheckbox(event){
    setIsOnlyInstalment(event.target.checked)
  }

  function toggleSecondCheckbox(event){
    setIsOnlyExists(event.target.checked)
  }

  const data = tableData.filter((item) => {
    if (isOnlyInstalment) {
      return item.instalment === true
    }
    if (isOnlyExists) {
      return item.count > 0
    }
    return true;
  }).sort((a, b) => {
    if (sortBy) {
      if(isAscOrder){
        if (typeof a[sortBy] === 'string') {
          return ('' + a[sortBy]).localeCompare(b[sortBy]);
        }
        return a[sortBy] - b[sortBy]
      } else{
        if (typeof a[sortBy] === 'string') {
          return ('' + b[sortBy]).localeCompare(a[sortBy]);
        }
        return b[sortBy] - a[sortBy]
      }
    }
    return 1;
  })

  function handleClick(event){
    setNumber(event.target.value)
    setCountNumber(event.target.value)

    isEven(event.target.value)
    fibonacci(event.target.value);
    setFactorial(factorial(event.target.value));
  }
  function isEven(number){
    if(number%2===0)
      return true
    return false  
  }
  function fibonacci(number){
    let n1 = 0, n2 = 1, nextTerm;
    let arr=[];
    for (let i = 1; i <= number; i++) {
        arr.push(n2);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    setArr(arr);
  }
  function factorial(number){
      if(number < 0){
        return
      }
      if(number === 0){
        return 1
      } 
      if(number > 0){
        return number*factorial(number-1)
      }
  }
  function countDown(number){
    let x = countNumber;
    clearInterval(interval);
    interval = setInterval(()=>{
      setCountNumber(x)
      x--;
      if(x<0){
        clearInterval(interval);
      }
    } , 1000)
    
  }
  return (
    <div className="App">
      <div className="checkBoxGroup">
        <div className="checkBox" >
          <input type="checkbox" id="checkboxValue" onChange={(event)=>toggleFirstCheckbox(event)}/> 
          <p>Только в рассрочку</p>
        </div>
        <div className="checkBox" id="isExist">
          <input type="checkbox" id="checkboxValue1"  onChange={(event)=>toggleSecondCheckbox(event)}/> 
          <p>Есть в наличии</p>
        </div>
      </div>
    <table id="table">
      <thead>
        <tr>
          <th className="item" id="id">№</th>
          <th className="item" id="name" onClick={() => sortByColumn('name')}>Name</th>
          <th className="item" id="price" onClick={() => sortByColumn('price')}>Price</th>
          <th className="item" id="count" onClick={() => sortByColumn('count')}>Count</th>
          <th className="item">Instalment</th>
        </tr>
      </thead>
        <tbody>
        {data.map((item, index)=>(
            <tr key={index} className={data.length > 5 ? "orange" : "blue"} >
              <td id="id">{item.id}</td>
              <td id="name">{item.name}</td>
              <td id="price">{item.price}</td>
              <td id="count">{item.count}</td>
              <td>{item.instalment ? '✅' : ''}</td>
            </tr>
        ))}
          </tbody>

      </table>

      <div className='newBlock'>
       <input type="number" id='numberInput' onChange={(event)=>handleClick(event)}/> 
       <p>{isEven(number)? `${number} is even number`:`${number} is odd number`}</p>
       <p>{`Fiboacci sequence for number ${number} is ${arr1} `}</p>
       <p>{`Factorial number is ${factorialNumber}`}</p>
       <button onClick={()=>countDown()}> Start count down </button>
       <p>{`Count down ${countNumber}`}</p>

      </div>
    </div>
  );
}

export default App;
