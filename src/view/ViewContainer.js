import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as viewConstants from './viewConstants';
import TransferCreate from './TransferCreate';
import TranfersFilter from './TransfersFilter';
import TransfersList from './TransfersList';
import { selectView } from '../action/actionCreator';

export class ViewContainer extends Component {
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
        return (
          <div>
            <TranfersFilter />
            <TransfersList />
          </div>
        );
      default:
        return (<span></span>);
    }
  }
}

const ConnectedViewContainer = connect((state) => {
  return {
    view: state.view
  }
}, (dispatch) => {
  return {
    selectView: (view, title) => {
      dispatch(selectView(view, title));
    }
  }
})(ViewContainer);

export default ConnectedViewContainer;
