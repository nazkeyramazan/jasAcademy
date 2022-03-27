import './App.css';
import {Routes, Route} from 'react-router-dom'
import Factorial from './components/Factorial';
import Fibonacci from './components/Fibonacci';

import Menu from './components/Menu';
import { useState } from 'react';
function App() {

  const [inputData, setInputData] = useState(0)
  
  function handleChange(e){
    setInputData(e.target.value)
  }
  
  return (
    <div className="App">
      <Menu/>
      <input type={'number'} onChange={(e)=>handleChange(e)}></input>
      <Routes>
        <Route path='/' element={<Fibonacci inputData={inputData}/>}></Route>
        <Route path='factorial' element={<Factorial inputData={inputData}/>}></Route>

        <Route path='*' element={'Error 404 page not found'}></Route>

      </Routes>    

    </div>
  );
}

export default App;
