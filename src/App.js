import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import './App.css';
import './components/Logo/Logo.css';


class App extends Component {
  render() {
    return (
      <div>
        <Navigation/> 
        <div className="flex items-center flex-column ml5 ">
            <Logo/>                                               
        </div>
      </div>
    );
  }
}

export default App;
  


