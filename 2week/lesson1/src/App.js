import './App.css';
import React, {useEffect, useState} from 'react'
import CommentBlock from './components/CommentBlock';
import Table from './components/Table';

function App() {
  const [data, setData] = useState([
  //   {
  //     title: 'Going Bad (feat. Drake)', 
  //     subtitle:'ASAP ROCKY', 
  //     type:'Championships', 
  //     link: 'https://fr.dreamstime.com/environnement-cat99',
  //     images:{
  //   background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkgXWUMr_Vcw6KhaHLTy0SNSljgWrMIi5rFQ&usqp=CAU"
  // }}
]);
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //     fetch("https://kdwed-f1dd2-default-rtdb.europe-west1.firebasedatabase.app/comments.json")
  //       .then(res => res.json())
  //       .then(
  //         (result) => {
  //           setData(result);
  //         },
  //       )
  //   }, [])
  const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
        'X-RapidAPI-Key': 'adc5082072msh0760dcdf7189792p184a37jsn7fbceb199f76'
    }
};
  useEffect(() => {
   fetch('https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=rj&api_key=75df4c0dd1c2d1c7cd0bbbc551f3d373&format=json', options)
    .then(response => response.json())
    .then(
      (response) => {
        setData(response.toptracks.track)
    })
    .catch(err => console.error("Ошибка "+err));
    }, [])

  return (
    <div className="App">
        {/* Comments Block
        {data.map((comment) =>
          <CommentBlock comment={comment} key={comment.id} />
        )} */}

          <Table data={data} />
    </div>
  );
}

export default App;