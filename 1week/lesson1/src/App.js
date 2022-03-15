import './App.css';
import Profile from './components/Profile';
import Quote from './components/Quote';
import Hints from './components/Hints';
function App() {
  return (
  <div id="main">
    <div id="quoteBlock">
        <Profile/>
        <Quote/>
        <Hints/>
    </div>
  </div>
  );
}

export default App;
