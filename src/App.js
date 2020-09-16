import React from 'react';
import './App.css';
// import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import Navigation from './components/Navigation'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
}

export default App;
