import React, { Component } from 'react';
import MenuItem from './MenuItem';

class Menu extends Component {
  render() {
    return (
      <ul>
        <MenuItem text='Realizar transferencia' />
        <MenuItem text='Ver transferencias' />
      </ul>
    );
  }
}

export default Menu;
