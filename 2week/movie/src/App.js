import './App.css';
import { Routes, Route} from "react-router-dom";
import React, {useState, useEffect} from 'react';
import Movies from './components/Movies';
import Movie from './components/Movie';
function App() {
    const [data, setData] = useState([]);
    console.log(data);
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate")
          .then(res => res.json())
          .then(
            (result) => {
              setData(result.results);
            },
          )
      }, [])
 
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Movies data={data}/>} />
        <Route path="movies/:id" element={<Movie/>} />
      </Routes>
    </div>
  );
}

export default App;
