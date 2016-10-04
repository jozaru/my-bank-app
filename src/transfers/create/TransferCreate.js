import React, { Component } from 'react';
import TextField from '../../common/TextField';
import {getCurrentDate} from '../../util/utils';

class TransferCreate extends Component {
  handleClick(ev) {
    ev.preventDefault();
  }

  render() {
    return (
        <form method='POST' action='#'>
          <TextField type='date' label='Fecha' min={getCurrentDate()} />
          <TextField type='text' label='Destinatario' />
          <TextField type='number' label='Monto' min='1' />
          <button onClick={this.handleClick}>Aceptar</button>
          <button onClick={this.handleClick}>Cancelar</button>
        </form>
    );
  }
}

export default TransferCreate;
