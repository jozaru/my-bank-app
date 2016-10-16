import React from 'react';
import MenuItem from '../containers/ConnectedMenuItem';
import items from './menuItems';
import { Navbar, Nav } from 'react-bootstrap';

class Menu extends React.Component {
  render() {
    const menuItems = items.map((item) => {
      return (
        <MenuItem
          key={item.id}
          text={item.text}
          viewName={item.viewName}
          viewTitle={item.viewTitle}
          viewLogo={item.viewLogo}
        />
      );
    });
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <span>Bank app</span>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            {menuItems}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Menu;
