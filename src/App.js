import React, { useState } from 'react';
import './App.css';

function App() {
  const [nameOfState, setNameOfState] = useState([]);

  const handleClick = async () => {
    var jancuk = document.getElementById("movie-search").value
    const response = await fetch('http://www.omdbapi.com/?apikey=d45af782&s=' + jancuk);
    const myJson = await response.json();
    await setNameOfState(myJson.Search);
    console.log(myJson);
  };
  return (
    <div className="App">
      <h1>ulala</h1>
      <input type="text" id='movie-search' ></input>
      <button onClick={handleClick}>Search</button>

      <div id='result'>
        {nameOfState.map(movie => {
          return (
            <TestComponent
              key={movie.imdbID}
              title={movie.Title}
              year={movie.Year}
              type={movie.Type}
              poster={movie.Poster}
            />
          );
        })}

      </div>
    </div>

  );
}

const TestComponent = ({ title, year, type, poster }) => {
  return (
    <div class='card'>
      <img src={poster} alt={title} class='img-card'></img> <br/>
      {title} ({year}) {type} <br/>
    </div>
  );
};



export default App;
