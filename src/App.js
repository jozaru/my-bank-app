import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './common/Menu';
import Header from './common/Header';
import TransferCreate from './transfers/create/TransferCreate';
import TransfersHistory from './transfers/history/TransfersHistory';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Header logo={logo} title='Bienvenido a Bank App' />
        <div id="content">
          <p className="App-intro">
            Por favor selecciona una opción del menú.
          </p>
          <TransferCreate />
          <TransfersHistory />
        </div>
      </div>
    );
  }
}

export default App;
