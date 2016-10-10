import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={this.props.logo} className="App-logo" alt="logo" />
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}

const ConnectedHeader = connect((state) => {
  return {
    title: state.title
  }
})(Header);

export default ConnectedHeader;
