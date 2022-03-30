import './App.css';
import { Routes, Route, Navigate} from "react-router-dom";
import MoviesComponent from './components/MoviesComponent';
import Movie from './components/Movie';
import { Navbar } from './components/Navbar';
import RickAndMorty from './components/RickAndMorty/RickAndMorty';
function App() {

  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path="/" element={<MoviesComponent/>} />
        <Route path="movies/:id" element={<Movie/>} />
        <Route path="/rickAndMorty" element={<RickAndMorty/>} />

        
        {/* <Route path="*" element={<Navigate to="/movie" replace />} /> */}
      </Routes>
    </div>
  );
}

export default App;
