import React from 'react';
import { NavItem } from 'react-bootstrap';

export class MenuItem extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.selectView(this.props.viewName, this.props.viewTitle, this.props.viewLogo);
  }

  render() {
    return (
      <NavItem href="#" className={this.props.selectedView === this.props.viewName ? 'active': ''}>
        <span onClick={this.handleClick}>{this.props.text}</span>
      </NavItem>
    );
  }
}

MenuItem.propTypes = {
  viewName: React.PropTypes.string.isRequired,
  viewTitle: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  selectView: React.PropTypes.func,
  selectedView: React.PropTypes.string,
  viewLogo: React.PropTypes.string
}

export default MenuItem;
