import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './common/Menu';
import Header from './common/Header';
import ViewController from './view/ViewController';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Header logo={logo} />
        <ViewController />
      </div>
    );
  }
}

export default App;
