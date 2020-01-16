import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Router>
    </div>
  );
}

export default App;
