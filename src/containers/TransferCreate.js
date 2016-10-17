import React from 'react';
import Form from '../containers/ConnectedForm';
import { HOME, HOME_TITLE, HOME_LOGO } from '../constants/viewConstants';
import { connect } from 'react-redux';
import { selectView, setFormMessage } from '../actions/actionCreator';
import transferFields from './transferFields';
import TransferClient from '../client/TransferClient';

const formName = 'formTransfer';

export class TransferCreate extends React.Component {
  constructor() {
    super();
    this.validateForm = this.validateForm.bind(this);
    this.cancelTransfer = this.cancelTransfer.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(form) {
    const formData = this.props.formState.formData;
    this.props.saveTransfer(formData, form);
  }

  validateForm() {
    const formData = this.props.formState.formData;
    const formValid = Object.keys(formData).map((key) => formData[key]).filter((value) => value.length !== 0).length === 3;
    if (!formValid) {
      this.props.setFormMessage(formName, 'error', 'Revisa los datos del formulario');
    }
    return formValid;
  }

  cancelTransfer() {
    this.props.selectView(HOME, HOME_TITLE, HOME_LOGO);
  }

  render() {
    return (
      <Form
        formName={formName}
        fields={transferFields}
        validateForm={this.validateForm}
        submitForm={this.submitForm}
        cancelOperation={this.cancelTransfer}
      />
    );
  }
}

TransferCreate.propTypes = {
  formState: React.PropTypes.object,
  setFormMessage: React.PropTypes.func.isRequired,
  selectView: React.PropTypes.func.isRequired,
  saveTransfer: React.PropTypes.func.isRequired
}

const ConnectedTransferCreate = connect((state) => {
  return {
    formState: state[formName]
  }
}, (dispatch) => {
  return {
    selectView: (view, title, logo) => {
      dispatch(selectView(view, title, logo));
    },
    saveTransfer: (formData, form) => {
      dispatch(setFormMessage(formName, 'success', 'Realizando transferencia...'));
      TransferClient.saveTransfer(formData)
      .then((reponse) => {
        if('OK' === reponse) {
          dispatch(setFormMessage(formName, 'success', 'Transferencia realizada con éxito'));
          form.reset();
        }
      });
    },
    setFormMessage: (formName, messageType, formMessage) => {
      dispatch(setFormMessage(formName, messageType, formMessage));
    }
  }
})(TransferCreate);

export default ConnectedTransferCreate;
