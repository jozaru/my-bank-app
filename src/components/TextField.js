import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFieldValue, setFormMessage, setFieldValidationMessage } from '../action/actionCreator';

export class TextField extends Component {
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
    this.props.setFormMessage('');
    this.props.setFieldValidationMessage(this.props.name, '');
    if (empty) {
      this.props.setFieldValidationMessage(this.props.name, 'Campo obligatorio');
    }
    if (!empty && this.props.validationFunction) {
      let message = this.props.validationFunction(this);
      if (message) {
        this.props.setFieldValidationMessage(this.props.name, message);
        val = '';
      }
    }
    const fields = Object.assign({}, this.props.fields, { [name]: val });
    this.props.setFieldValue(this.props.formName, fields);
  }

  render() {
    return (
      <div>
        <div>
          <label>{this.props.label}</label>
        </div>
        <div>
          <input
            type={this.props.type}
            name={this.props.name}
            min={this.props.min}
            onChange={this.handleChange}
            ref={(ref) => {
              this.input = ref;
            }}
          />
        </div>
        <span>{this.props.validationMessage}</span>
      </div>
    );
  }
}

const ConnectedTextField = connect((state, props) => {
  return {
    fields: state[props.formName],
    validationMessage: state[props.name]
  }
}, (dispatch) => {
  return {
    setFieldValue: (formName, fields) => {
      dispatch(setFieldValue(formName, fields));
    },
    setFormMessage: (message) => {
      dispatch(setFormMessage(message));
    },
    setFieldValidationMessage: (fieldName, message) => {
      dispatch(setFieldValidationMessage(fieldName, message));
    }
  }
})(TextField);

export default ConnectedTextField;
