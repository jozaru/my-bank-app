import React from 'react';
import { shallow } from 'enzyme';
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
    it('Should render without crashing', () => {
      const props = {
        viewName: 'SOME_VIEW',
        viewTitle: 'Some title',
        text: 'Some text'
      };
      shallow(<MenuItem {... props}/>);
    });

    it('should call selectView when clicked', () => {
      const props = {
        viewName: 'SOME_VIEW',
        viewTitle: 'Some title',
        text: 'Some text',
        selectView: jest.fn()
      }
      const wrapper = shallow(<MenuItem {... props}/>);
      wrapper.find('span').simulate('click');
      expect(props.selectView).toHaveBeenCalled();
    });
  });

  describe('Form', () => {
    it('Should render without crashing', () => {
      const props = {
        fields: [],
        formName: 'someForm',
        initForm: jest.fn(),
        validateForm: jest.fn(),
        submitForm: jest.fn()
      }
      shallow(<Form {... props}/>);
    });
  });

  describe('Field', () => {
    it('Should render without crashing', () => {
      const props = {
        label: 'fieldLabel',
        type: 'someType',
        name: 'someField',
        formName: 'someForm',
        setFieldValidationMessage: jest.fn(),
        setFormData: jest.fn(),
        setFormMessage: jest.fn()
      }
      shallow(<Field {... props}/>);
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
