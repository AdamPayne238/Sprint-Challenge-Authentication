import React from 'react';
import './App.css';


import Login from "../src/components/forms/Login";
import Register from "../src/components/forms/Register";
import JokesData from './components/jokesAPI/JokesData';

function App() {
  return (
    <div className="App">
      <h1>Login or Register for JOKES!!</h1>
      <JokesData />
      <Login />
      <Register />
      
    </div>
  );
}

export default App;