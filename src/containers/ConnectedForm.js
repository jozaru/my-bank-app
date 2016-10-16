import { connect } from 'react-redux';
import { initForm } from '../actions/actionCreator';
import Form from '../components/Form';

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
