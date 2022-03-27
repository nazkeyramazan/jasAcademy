import './App.css';
import React, {useState, useEffect} from 'react';
function App() {
    const [data, setData] = useState([]);
    console.log(data);
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate")
          .then(res => res.json())
          .then(
            (result) => {
              setData(result);
            },
          )
      }, [])
 
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
