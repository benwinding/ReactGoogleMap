import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Main from './Main';

export default class App extends Component {
  render() {
    return (
      <div className="App" id="outer-container">
        <Header />
        <Main id="page-wrap"/>
      </div>
    );
  }
}
