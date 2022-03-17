import React, {useState, useEffect} from 'react'
import './App.css';
import {tableData} from './data';


function App() {

  const [isOnlyInstalment, setIsOnlyInstalment] = useState(false)
  const [isOnlyExists, setIsOnlyExists] = useState(false)
  const [sortBy, setSortBy] = useState()
  const [isAscOrder, setIsAscOrder] = useState(false);
  
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

console.log(data.length);
  
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
    </div>
  );
}

export default App;
