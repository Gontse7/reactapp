import React from 'react';
import Weather from './Weather';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="New York"/>
      <footer>
        Coded by Gontse H Mogana with an{" "}
        <a href="https://github.com/Gontse7/reactapp" target="_blank" rel="noreferrer">open source</a> code.
      </footer>
      </div>
    </div>
  );
}

export default App;
