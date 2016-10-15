import React from 'react';
import Form from '../components/Form';
import Field from '../components/Field';
import { HOME, HOME_TITLE } from '../view/viewConstants';
import { connect } from 'react-redux';
import { selectView, setFormMessage } from '../action/actionCreator';
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
    this.props.setFormMessage(formName, 'success', 'Realizando transferencia...');
    setTimeout(() => {
      TransferClient.saveTransfer(formData);
      this.props.setFormMessage(formName, 'success', 'Transferencia realizada con éxito');
      form.reset();
    }, 5000);
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
    this.props.selectView(HOME, HOME_TITLE);
  }

  render() {
    const fields = transferFields.map((field) => {
      return (
        <Field
          key={field.id}
          type={field.type}
          name={field.name}
          label={field.label}
          min={field.min}
          required={field.required}
          formName={field.formName}
          validationFunction={field.validationFunction}
        />
      );
    });
    return (
      <Form
        formName={formName}
        fields={fields}
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
  selectView: React.PropTypes.func.isRequired
}

const ConnectedTransferCreate = connect((state) => {
  return {
    formState: state[formName]
  }
}, (dispatch) => {
  return {
    selectView: (view, title) => {
      dispatch(selectView(view, title));
    },
    setFormMessage: (formName, messageType, formMessage) => {
      dispatch(setFormMessage(formName, messageType, formMessage));
    }
  }
})(TransferCreate);

export default ConnectedTransferCreate;
