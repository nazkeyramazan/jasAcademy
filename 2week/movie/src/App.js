import './App.css';
import { Routes, Route} from "react-router-dom";
import MoviesComponent from './components/MoviesComponent';
import Movie from './components/Movie';
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MoviesComponent/>} />
        <Route path="movies/:id" element={<Movie/>} />
      </Routes>
    </div>
  );
}

export default App;
