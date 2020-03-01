import React from 'react';
import './App.css';
import Meal from './components/Meal.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Choose your Meal !!</h1>
        <Meal type="Breakfast"/>
        <Meal type="Dinner"/>
      </header>
    </div>
  );
}

export default App;
