import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectView } from '../action/actionCreator';

class MenuItem extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.selectView(this.props.viewName, this.props.viewTitle);
  }

  render() {
    return (
      <li onClick={this.handleClick}>{this.props.text}</li>
    );
  }
}

const ConnectedMenuItem = connect((state) => { return state }, (dispatch) => {
  return {
    selectView: (view, title) => {
      dispatch(selectView(view, title));
    }
  }
})(MenuItem);

export default ConnectedMenuItem;
