import React, { Component } from 'react';

class MenuItem extends Component {
  render() {
    return (<li>{this.props.text}</li>);
  }
}

export default MenuItem;
