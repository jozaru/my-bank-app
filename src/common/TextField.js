import React, { Component } from 'react';

class TextField extends Component {
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input type={this.props.type} min={this.props.min}/>
      </div>
    );
  }
}

export default TextField;
