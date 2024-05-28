import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navigation/Navbar';
import Home from './pages/Home/Home';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div> 
            <Routes>
              <Route exact path='/' component={Home} />
            </Routes>                                                                                                                                                                                                                                                                    
          </div>
        </div>
      </BrowserRouter>
    ); 
  }
}

export default App;
