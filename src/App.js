import React from 'react';
import './App.css';
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import Navigation from './components/Navigation'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
