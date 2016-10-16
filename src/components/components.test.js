import React from 'react';
import { shallow, mount } from 'enzyme';
import Menu from './Menu';
import Header from './Header';
import MenuItem from './MenuItem';
import Field from './Field';
import Form from './Form';
import Transfer from './Transfer';

describe('components', () => {
  describe('Header', () => {
    it('Should render without crashing', () => {
      shallow(<Header />);
    });
  });

  describe('Menu', () => {
    it('Should render without crashing', () => {
      shallow(<Menu />);
    });
  });

  describe('MenuItem', () => {
    let props;
    beforeAll(() => {
      props = {
        viewName: 'SOME_VIEW',
        viewTitle: 'Some title',
        text: 'Some text'
      }
    });
    it('Should render without crashing', () => {
      shallow(<MenuItem {... props}/>);
    });

    it('should call selectView when clicked', () => {
      const newProps = Object.assign({}, props, {selectView: jest.fn()})
      const wrapper = shallow(<MenuItem {... newProps}/>);
      wrapper.find('span').simulate('click');
      expect(newProps.selectView).toHaveBeenCalled();
    });
  });

  describe('Form', () => {
    let props;
    beforeAll(() => {
      props = {
        fields: [],
        formName: 'someForm',
        initForm: jest.fn(),
        validateForm: jest.fn(),
        submitForm: jest.fn()
      }
    });
    it('Should render without crashing', () => {
      shallow(<Form {... props}/>);
    });

    it('Should call initForm when componentDidMount', () => {
      mount(<Form {... props}/>);
      expect(props.initForm).toHaveBeenCalled();
    });

    it('Should call validateForm when form is submited', () => {
      const wrapper = shallow(<Form {... props}/>);
      wrapper.find('Button').simulate('click');
      expect(props.validateForm).toHaveBeenCalled();
    });

    it('Should call submitForm when form is submited and it is valid', () => {
      const mockValidateForm = jest.fn();
      mockValidateForm.mockReturnValueOnce(true);
      const newProps = Object.assign({}, props, {validateForm: mockValidateForm});
      const wrapper = shallow(<Form {... newProps}/>);
      wrapper.find('Button').simulate('click');
      expect(newProps.submitForm).toHaveBeenCalled();
    });

    it('Should call cancelOperation when click on cancel button', () => {
      const mockCancelOperation = jest.fn();
      const newProps = Object.assign({}, props, {cancelOperation: mockCancelOperation});
      const wrapper = mount(<Form {... newProps}/>);
      wrapper.find('Button').last().simulate('click');
      expect(newProps.cancelOperation).toHaveBeenCalled();
    });

    it('Should return Field array when fields are sended', () => {
      const newProps = Object.assign({}, props, {
        fields: [
          {
            id: 2,
            type: 'text',
            name: 'someName',
            label: 'fieldLabel'
          }
        ]
      });
      shallow(<Form {... newProps}/>);
    });

  });

  describe('Field', () => {
    let props;
    const formName = 'someForm';
    beforeAll(() => {
      props = {
        label: 'fieldLabel',
        type: 'someType',
        name: 'someField',
        formName: formName,
        [formName]: {},
        setFieldValidationMessage: jest.fn(),
        setFormData: jest.fn(),
        setFormMessage: jest.fn()
      }
    });

    it('Should render without crashing', () => {
      shallow(<Field {... props}/>);
    });

    it('Should call setFieldValidationMessage when componentDidMount', () => {
      mount(<Field {... props}/>);
      expect(props.setFieldValidationMessage).toHaveBeenCalled();
    });

    it('Should call setFieldValidationMessage when change is triggered and value is empty and field isRequired', () => {
      const input = {
        value: ''
      }
      const ev = {
        target: input,
      }
      const newProps = Object.assign({}, props, {required: true});
      const wrapper = shallow(<Field {... newProps}/>);
      wrapper.find('FormControl').simulate('change', ev);
      expect(newProps.setFieldValidationMessage).toHaveBeenCalled();
    });

    it('Should call setFieldValidationMessage when change is triggered and value is invalid', () => {
      const input = {
        value: 'Some invalid value'
      }
      const ev = {
        target: input,
      }
      const mockValidationFunction = jest.fn();
      mockValidationFunction.mockReturnValueOnce('Value invalid');
      const newProps = Object.assign({}, props, {validationFunction: mockValidationFunction});
      const wrapper = shallow(<Field {... newProps}/>);
      wrapper.find('FormControl').simulate('change', ev);
      expect(newProps.validationFunction).toHaveBeenCalled();
    });
  });

  describe('Transfer', () => {
    it('Should render without crashing', () => {
      const props = {
        fecha: '2016-10-16',
        destinatario: 'Some destination',
        monto: '0000.00'
      }
      shallow(<Transfer {... props}/>);
    });
  });
});
