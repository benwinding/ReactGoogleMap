import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleMap from './SimpleMap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Recyler Map</h2>
        </div>
        <div style={{width:"100%", height:"50vh"}}>
          <SimpleMap />
        </div>
      </div>
    );
  }
}

export default App;
