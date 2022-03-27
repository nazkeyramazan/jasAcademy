import './App.css';
import {Routes, Route} from 'react-router-dom'
import Factorial from './components/Factorial';
import Fibonacci from './components/Fibonacci';
import MainPage from './components/MainPage';
import MainMenu from './components/MainMenu';
import { useState } from 'react';
function App() {

  const [inputData, setInputData] = useState(0)
  
  function handleChange(e){
    setInputData(e.target.value)
  }
  
  return (
    <div className="App">
      <MainMenu/>
      <Routes>
        <Route path='fibonacci' element={<Fibonacci inputData={inputData}/>}></Route>
        <Route path='factorial' element={<Factorial inputData={inputData}/>}></Route>
        <Route path='*' element={'Error 404 page not found'}></Route>
        <Route path='/' element={<MainPage/>}></Route>

      </Routes>    
      <input type={'number'} onChange={(e)=>handleChange(e)}></input>
      <h1>Введенное число: {inputData}</h1>
    </div>
  );
}

export default App;
