import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initForm } from '../action/actionCreator';

export class Form extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.form = null;
  }

  componentDidMount() {
    this.props.initForm(this.props.formName);
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const formValid = this.props.validateForm();
    if (formValid) {
      this.props.submitForm(this.form);
    }
  }

  handleCancel(ev) {
    ev.preventDefault();
    this.form.reset();
    this.props.cancelOperation();
  }

  render() {
    return (
      <form method='POST' noValidate
        onSubmit={this.handleSubmit}
        name={this.props.formName}
        ref={(ref) => {
          this.form = ref
        }}>
        <span>{this.props.formState ? this.props.formState.formMessage : ''}</span>
          {this.props.fields}
        <button>Aceptar</button>
        <button onClick={this.handleCancel}>Cancelar</button>
      </form>
    );
  }
}

const connectedForm = connect((state, props) => {
  return {
    formState: state[props.formName]
  }
}, (dispatch) => {
  return {
    initForm: (formName) => {
      dispatch(initForm(formName));
    }
  }
})(Form);

export default connectedForm;
