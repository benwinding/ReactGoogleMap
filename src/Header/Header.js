import React, { Component } from 'react';
import logo from './logo4.png';
import MyMenu from '../MyMenu/MyMenu';

export default class Home extends Component {
  render() {
    return (
      <div>
        <MyMenu />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Recylr</h2>
        </div>
      </div>
    );
  }
}

