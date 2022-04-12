import './App.css';
import React, {useState} from 'react';
import { Routes, Route} from "react-router-dom";
import MoviesComponent from './components/Movie/MoviesComponent';
import Movie from './components/Movie/Movie';
import { Navbar } from './components/Navbar';
import RickAndMorty from './components/RickAndMorty/RickAndMorty';
import SingleCharacter from './components/RickAndMorty/SingleCharacter';
import { Auth } from './context/Auth';
import SignInForm from './components/Auth/SignInForm';
import SignUpForm from './components/Auth/SignUpForm';
import Counter from './components/ClassComponents/Counter';
import FunctionalCounter from './components/FunctionalComponent/Counter';
import BinarySearch from './components/binarySearch';

function App() {

  const [token, setToken] = useState(localStorage.getItem('idToken'));

  return (
    <Auth.Provider value={{ token, setToken }}>

      {token?(
        <div >
        <Navbar/>
        <Routes>
          <Route path="/" element={<MoviesComponent/>} />
          <Route path="movies/:id" element={<Movie/>} />
          <Route path="/rickAndMorty" element={<RickAndMorty/>} />
          <Route path="/rickAndMorty/:id" element={<SingleCharacter/>} />
          <Route path="/signIn/" element={<SignInForm/>} />
          <Route path="/signUp/" element={<SignUpForm/>} />
          <Route path="/counter/" element={<Counter/>} />
          <Route path="/functionalCounter/" element={<FunctionalCounter/>} />
          <Route path="/BinarySearch/" element={<BinarySearch/>} />
          
          {/* <Route path="*" element={<Navigate to="/movie" replace />} /> */}
        </Routes>
      </div>
       ):
       <Routes>
          <Route path="*" element={<SignInForm/>} />
          <Route path="/signUp/" element={<SignUpForm/>} />
       </Routes>
      } 
      
    </Auth.Provider>
  );
}

export default App;
