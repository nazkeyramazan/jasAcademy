import './App.css';
import React, {useState} from 'react';
import { Routes, Route} from "react-router-dom";
import MoviesComponent from './components/MoviesComponent';
import Movie from './components/Movie';
import { Navbar } from './components/Navbar';
import RickAndMorty from './components/RickAndMorty/RickAndMorty';
import SingleCharacter from './components/RickAndMorty/SingleCharacter';
import SignIn from './components/SignIn';
import { Auth } from './context/Auth';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';

function App() {

  const [token, setToken] = useState(localStorage.getItem('idToken'));

  return (
    <Auth.Provider value={{ token, setToken }}>

      {/* {token?( */}
        <div >
        <Navbar/>
        <Routes>
          <Route path="/" element={<MoviesComponent/>} />
          <Route path="movies/:id" element={<Movie/>} />
          <Route path="/rickAndMorty" element={<RickAndMorty/>} />
          <Route path="/rickAndMorty/:id" element={<SingleCharacter/>} />
          <Route path="/signIn/" element={<SignInForm/>} />
          <Route path="/signUp/" element={<SignUpForm/>} />

          {/* <Route path="*" element={<Navigate to="/movie" replace />} /> */}
        </Routes>
      </div>
      {/* ):
      (<SignInForm/>)
      } */}
      
    </Auth.Provider>
  );
}

export default App;
