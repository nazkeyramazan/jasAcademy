import './App.css';
import React, {useEffect, useState} from 'react'
import CommentBlock from './components/CommentBlock';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
      fetch("https://kdwed-f1dd2-default-rtdb.europe-west1.firebasedatabase.app/comments.json")
        .then(res => res.json())
        .then(
          (result) => {
            setData(result);
          },
        )
    }, [])
  return (
    <div className="App">
        Comments Block
        {data.map((comment, index) =>
            <CommentBlock comment={comment} key={index} />
        )}
    </div>
  );
}

export default App;