import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import Header from './components/Header';
import ViewContainer from './view/ViewContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Header logo={logo} />
        <ViewContainer />
      </div>
    );
  }
}

export default App;
