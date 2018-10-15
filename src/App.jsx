import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SearchPageComponent } from './components/searchPageComponent';

const App = () => { 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to Ashley's Github Profile Searcher!</h1>
      </header>

      <SearchPageComponent />

    </div>
  );
};

export default App;
