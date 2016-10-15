import React from 'react';
import { connect } from 'react-redux';
import { setFormData, setFormMessage, setFieldValidationMessage } from '../action/actionCreator';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

export class Field extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.input = null;
  }

  componentDidMount() {
    this.props.setFieldValidationMessage(this.props.name, '');
  }

  handleChange(ev) {
    let val = ev.target.value;
    const name = this.props.name;
    let empty = false;
    if (this.props.required && (!val || val.lenght === 0)) {
      empty = true;
    }
    this.props.setFormMessage(this.props.formName, '');
    this.props.setFieldValidationMessage(this.props.name, '');
    if (empty) {
      this.props.setFieldValidationMessage(this.props.name, 'Campo obligatorio');
    }
    if (!empty && this.props.validationFunction) {
      let message = this.props.validationFunction(val);
      if (message) {
        this.props.setFieldValidationMessage(this.props.name, message);
        val = '';
      }
    }
    const formData = Object.assign({}, this.props[this.props.formName].formData, { [name]: val });
    this.props.setFormData(this.props.formName, formData);
  }

  render() {
    return (
      <FormGroup validationState={this.props.validationMessage ? 'error': null}>
        <ControlLabel>{this.props.label}</ControlLabel>
        <FormControl
          type={this.props.type}
          onChange={this.handleChange}
          min={this.props.min}
        />
        <HelpBlock>{this.props.validationMessage}</HelpBlock>
      </FormGroup>
    );
  }
}

Field.propTypes = {
  label: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  min: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  validationMessage: React.PropTypes.string,
  formName: React.PropTypes.string.isRequired,
  required: React.PropTypes.bool,
  setFieldValidationMessage: React.PropTypes.func.isRequired,
  setFormData: React.PropTypes.func.isRequired,
  setFormMessage: React.PropTypes.func.isRequired,
  validationFunction: React.PropTypes.func
}

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
