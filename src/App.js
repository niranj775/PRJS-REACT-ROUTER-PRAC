import React from 'react';
import './App.css';
import {Router} from 'react-router-dom'
import Routes from './routes'
import history from './services/history'
function App() {
  return (
    <div >
      <Router history={history}>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
