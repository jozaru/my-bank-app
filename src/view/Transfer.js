import React, { Component } from 'react';

class Transfer extends Component {
  render() {
    return (
      <li>
          <span>{this.props.fecha} - </span>
          <span>{this.props.destinatario} - </span>
          <span>{this.props.monto}</span>
      </li>
    );
  }
 }

export default Transfer;
