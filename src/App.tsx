import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(5);


  return (
    <div className="App">
      <Card />
    </div>
  );
}

export default App;
