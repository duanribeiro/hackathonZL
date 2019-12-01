import React from 'react';
import './App.css';
import  Intro  from './components/intro/intro'
import Routes from './Routes';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';


const browserHistory = createBrowserHistory();

function App() {
  return (
    <Router history={browserHistory}>
      <Routes />
    </Router> 
  );
}

export default App;
