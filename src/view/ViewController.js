import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as views from './viewConstants';
import TransferCreate from './TransferCreate';
import TransfersHistory from './TransfersHistory';

class ViewController extends Component {
  render() {
    switch (this.props.view) {
      case views.HOME:
        return (<p>Por favor selecciona una opcion del menú</p>);
      case views.CREATE_TRANSFER:
        return (<TransferCreate />);
      case views.TRANSFERS_HISTORY:
        return (<TransfersHistory />);
      default:
        return (<br/>);
    }
  }
}

const ConnectedViewController = connect((state) => {
  return {
    view: state.view
  }
})(ViewController);

export default ConnectedViewController;
