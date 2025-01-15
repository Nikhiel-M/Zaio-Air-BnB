import './App.css';
import React from 'react';
import Header from './components/layout/Header';
import Home from './components/Home';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
     
    </div>
  );
}

export default App;
