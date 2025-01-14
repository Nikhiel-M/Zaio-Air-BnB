import './App.css';
import React from 'react';
import Header from './components/layout/Header';
import Home from './components/Home';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      {/*
       *Home
         Header

       *Banner
         Search

       *Card

       *Footer


       *Search page
         Header 
       */}
    </div>
  );
}

export default App;
