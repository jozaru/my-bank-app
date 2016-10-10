import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as viewConstants from './viewConstants';
import TransferCreate from './TransferCreate';
import TransfersHistory from './TransfersHistory';
import { selectView } from '../action/actionCreator';

class ViewController extends Component {
  componentDidMount() {
    this.props.selectView(viewConstants.HOME, viewConstants.HOME_TITLE);
  }

  render() {
    switch (this.props.view) {
      case viewConstants.HOME:
        return (<p>Por favor selecciona una opcion del menú</p>);
      case viewConstants.CREATE_TRANSFER:
        return (<TransferCreate />);
      case viewConstants.TRANSFERS_HISTORY:
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
}, (dispatch) => {
  return {
    selectView: (view, title) => {
      dispatch(selectView(view, title));
    }
  }
})(ViewController);

export default ConnectedViewController;
