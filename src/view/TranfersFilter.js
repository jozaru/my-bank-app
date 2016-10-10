import React, { Component } from 'react';
import TextField from '../components/TextField';
import filterFields from './filterFields';
import { connect } from 'react-redux';
import { setFormMessage, fetchingTransfers, transfersFinded, initForm, noTransfers } from '../action/actionCreator';
import TransferClient from '../client/TransferClient';

class TransferFilter extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.initForm('formFilter', {}, '');
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const filters = this.props.formFilter;
    const validForm = Object.keys(filters).map((key) => filters[key]).filter((value) => value.length !== 0).length >= 1;
    if (validForm) {
      this.props.fetchTransfers(filters);
    } else {
      this.props.setFormMessage('Debes ingresar al menos una fecha');
    }
  }

  render() {
    const fields = filterFields.map((field) => {
      return (
        <TextField
          key={field.id}
          type={field.type}
          name={field.name}
          label={field.label}
          required={field.required}
          formName={field.formName}
        />
      )
    });
    return (
      <div>
        <form method='POST' onSubmit={this.handleSubmit} noValidate name='formFilter'>
          <span>{this.props.formMessage}</span>
          {fields}
          <button>Buscar</button>
        </form>
      </div>
    );
  }
}

const ConnectedTransferFilter = connect((state) => {
  return {
    formFilter: state.formFilter,
    formMessage: state.formMessage
  }
}, (dispatch) => {
  return {
    setFormMessage: (message) => {
      dispatch(setFormMessage(message));
    },
    fetchTransfers: (filters) => {
      dispatch(fetchingTransfers());

      setTimeout(() => {
        let transfers = TransferClient.getTransfers(filters);
        if (transfers && transfers.length > 0) {
          dispatch(transfersFinded(transfers));
        } else {
          dispatch(noTransfers());
        }
      }, 5000);
    },
    initForm: (formName, fields, message) => {
      dispatch(initForm(formName, fields, message));
    }
  }
})(TransferFilter);

export default ConnectedTransferFilter;
