import React, { Component } from 'react';
import Transfer from './Transfer';
import { connect } from 'react-redux';
import { initTransfers } from '../action/actionCreator';

export class TransfersList extends Component {
  componentDidMount() {
    this.props.initTransfers();
  }

  render() {
    if (this.props.loading) {
      return (<p>Buscando tranferencias...</p>);
    }
    if (this.props.transfers) {
      const transfers = this.props.transfers.map((tranfer, index) => {
        return <Transfer
                  key={index}
                  fecha={tranfer.fecha}
                  destinatario={tranfer.destinatario}
                  monto={tranfer.monto}
               />
      })
      return (
        <div>
          <ul>
            <li>
              <span>Fecha - </span>
              <span>Destinatario - </span>
              <span>Monto</span>
            </li>
            {transfers}
          </ul>
        </div>
      );
    }
    if (this.props.error) {
      return (<p>No se encontraron transferencias para las fechas indicadas</p>);
    }
    return (<br/>);
  }
}

const ConnectedTransfersList = connect((state) => {
  return {
    transfers: state.transfers,
    loading: state.loading,
    error: state.error
  }
}, (dispatch) => {
  return {
    initTransfers: () => {
      dispatch(initTransfers());
    }
  }
})(TransfersList);

export default ConnectedTransfersList;
