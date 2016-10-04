import React, { Component } from 'react';
import TextField from '../../common/TextField';

class TransferFilter extends Component {
  handleClick(ev) {
    ev.preventDefault();
  }

  render() {
    return (
      <form method='POST' action='#'>
        <TextField type='date' label='Desde'/>
        <TextField type='date' label='Hasta'/>
        <button onClick={this.handleClick}>Buscar</button>
      </form>
    );
  }
}

export default TransferFilter;
