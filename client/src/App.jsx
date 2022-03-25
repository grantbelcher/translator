import React from 'react';
import './App.css';
import piazza from './piazza.jpeg';

function App() {
 return (
  <div>
   <h1 className="wow">Hello from react!</h1>
   <img src={piazza} alt="" />
  </div>
 );
}

export default App;
