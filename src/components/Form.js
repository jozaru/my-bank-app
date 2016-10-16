import React from 'react';
import Field from '../containers/ConnectedField';
import { Row, Col, Button, FormGroup, HelpBlock } from 'react-bootstrap';

export class Form extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.form = null;
  }

  componentDidMount() {
    this.props.initForm(this.props.formName);
  }

  handleSubmit() {
    const formValid = this.props.validateForm();
    if (formValid) {
      this.props.submitForm(this.form);
    }
  }

  handleCancel() {
    this.form.reset();
    this.props.cancelOperation();
  }

  render() {
    const fields = this.props.fields.map((field) => {
      return (
        <Field
          key={field.id}
          type={field.type}
          name={field.name}
          label={field.label}
          min={field.min}
          required={field.required}
          formName={this.props.formName}
          validationFunction={field.validationFunction}
        />
      );
    });
    return (
      <Row>
        <Col md={12}>
          <Row>
            <Col md={12}>
              <form noValidate
                ref={(ref) => {
                  this.form = ref
                }}>
                <FormGroup validationState={this.props.formState ? this.props.formState.messageType : null}>
                  <HelpBlock>{this.props.formState ? this.props.formState.formMessage : ''}</HelpBlock>
                </FormGroup>
                {fields}
                <Button className="button" onClick={this.handleSubmit}>{this.props.okText ? this.props.okText: 'Aceptar'}</Button>
                {this.props.cancelOperation ? <Button onClick={this.handleCancel}>{this.props.cancelText ? this.props.cancelText: 'Cancelar'}</Button> : <span></span>}
              </form>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

Form.propTypes = {
  formName: React.PropTypes.string.isRequired,
  fields: React.PropTypes.array.isRequired,
  formState: React.PropTypes.object,
  initForm: React.PropTypes.func.isRequired,
  validateForm: React.PropTypes.func.isRequired,
  submitForm: React.PropTypes.func.isRequired,
  cancelOperation: React.PropTypes.func,
  okText: React.PropTypes.string,
  cancelText: React.PropTypes.string
}

export default Form;
