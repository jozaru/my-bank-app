import { connect } from 'react-redux';
import { setFormData, setFormMessage, setFieldValidationMessage } from '../actions/actionCreator';
import Field from '../components/Field';

const ConnectedField = connect((state, props) => {
  return {
    [props.formName]: state[props.formName],
    validationMessage: state[props.name]
  }
}, (dispatch) => {
  return {
    setFormData: (formName, formData) => {
      dispatch(setFormData(formName, formData));
    },
    setFormMessage: (message) => {
      dispatch(setFormMessage(message));
    },
    setFieldValidationMessage: (fieldName, message) => {
      dispatch(setFieldValidationMessage(fieldName, message));
    }
  }
})(Field);

export default ConnectedField;
