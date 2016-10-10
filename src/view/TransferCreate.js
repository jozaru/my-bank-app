import React, { Component } from 'react';
import TextField from '../components/TextField';
import { HOME, HOME_TITLE } from '../view/viewConstants';
import { connect } from 'react-redux';
import { selectView, setFormMessage, initForm } from '../action/actionCreator';
import transferFields from './transferFields';
import TransferClient from '../client/TransferClient';

class TransferCreate extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    this.props.initForm('formTransfer', {}, '');
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const transfer = this.props.formTransfer;
    const validForm = Object.keys(transfer).map((key) => transfer[key]).filter((value) => value.length !== 0).length === 3;
    if (validForm) {
      this.props.setFormMessage('Realizando transferencia...');
      setTimeout(() => {
        TransferClient.saveTransfer(transfer);
        this.props.initForm('formTransfer', {}, 'Transferencia realizada con éxito');
        document.querySelector('form').reset();
      }, 5000);
    } else {
      this.props.setFormMessage('Revisa los datos del formulario');
    }
  }

  handleCancel(ev) {
    ev.preventDefault();
    this.props.selectView(HOME, HOME_TITLE);
  }

  render() {
    const fields = transferFields.map((field) => {
      return (
        <TextField
          key={field.id}
          type={field.type}
          name={field.name}
          label={field.label}
          min={field.min}
          required={field.required}
          formName={field.formName}
          validationFunction={field.validationFunction}
        />
      )
    });
    return (
      <div>
        <form method='POST' onSubmit={this.handleSubmit} noValidate name='formTransfer'>
          <span>{this.props.formMessage}</span>
          {fields}
          <button>Aceptar</button>
          <button onClick={this.handleCancel}>Cancelar</button>
        </form>
      </div>
    );
  }
}

const ConnectedTransferCreate = connect((state) => {
  return {
    formTransfer: state.formTransfer,
    formMessage: state.formMessage
  }
}, (dispatch) => {
  return {
    selectView: (view, title) => {
      dispatch(selectView(view, title));
    },
    setFormMessage: (message) => {
      dispatch(setFormMessage(message));
    },
    initForm: (formName, fields, message) => {
      dispatch(initForm(formName, fields, message));
    }
  }
})(TransferCreate);

export default ConnectedTransferCreate;
