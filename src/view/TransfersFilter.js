import React from 'react';
import Form from '../components/Form';
import Field from '../components/Field';
import { connect } from 'react-redux';
import { setFormMessage, fetchTransfers, transfersFinded, noTransfers } from '../action/actionCreator';
import filterFields from './filterFields';
import TransferClient from '../client/TransferClient';

const formName = 'formFilter';

export class TransfersFilter extends React.Component {
  constructor() {
    super();
    this.submitForm = this.submitForm.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  submitForm() {
    const formData = this.props.formState.formData;
    this.props.fetchTransfers(formData);
  }

  validateForm() {
    const formData = this.props.formState.formData;
    const formValid = Object.keys(formData).map((key) => formData[key]).filter((value) => value.length !== 0).length >= 1;
    if (!formValid) {
      this.props.setFormMessage(formName, 'error', 'Debes ingresar al menos una fecha');
    }
    return formValid;
  }

  render() {
    const fields = filterFields.map((field) => {
      return (
        <Field
          key={field.id}
          type={field.type}
          name={field.name}
          label={field.label}
          required={field.required}
          formName={field.formName}
        />
      );
    });
    return (
      <Form
        formName={formName}
        fields={fields}
        validateForm={this.validateForm}
        submitForm={this.submitForm}
        okText='Buscar'
      />
    );
  }
}

TransfersFilter.propTypes = {
  formState: React.PropTypes.object,
  fetchTransfers: React.PropTypes.func.isRequired,
  setFormMessage: React.PropTypes.func.isRequired
}

const ConnectedTransfersFilter = connect((state) => {
  return {
    formState: state[formName]
  }
}, (dispatch) => {
  return {
    setFormMessage: (formName, messageType, formMessage) => {
      dispatch(setFormMessage(formName, messageType, formMessage));
    },
    fetchTransfers: (formData) => {
      dispatch(fetchTransfers());

      setTimeout(() => {
        let transfers = TransferClient.getTransfers(formData);
        if (transfers && transfers.length > 0) {
          dispatch(transfersFinded(transfers));
        } else {
          dispatch(noTransfers());
        }
      }, 5000);
    }
  }
})(TransfersFilter);

export default ConnectedTransfersFilter;
