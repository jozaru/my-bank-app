import React, { Component } from 'react';
import MenuItem from './MenuItem';
import items from './menuItems';

class Menu extends Component {
  render() {
    const menuItems = items.map((item) => {
      return (
        <MenuItem
          key={item.id}
          text={item.text}
          viewName={item.viewName}
          viewTitle={item.viewTitle}
        />
      );
    });
    return (
      <ul>{menuItems}</ul>
    );
  }
}

export default Menu;
