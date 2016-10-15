import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';
import { Header } from './Header';
import { MenuItem } from './MenuItem';
import { Field } from './Field';
import { Form } from './Form';

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
      shallow(<MenuItem {...props}/>);
    });

    it('should call selectView when clicked', () => {
      let selectView = jest.fn();
      const wrapper = shallow(<MenuItem selectView={selectView}/>);
      wrapper.find('span').simulate('click');
      expect(selectView).toHaveBeenCalled();
    });
  });

  describe('Form', () => {
    it('Should render without crashing', () => {
      shallow(<Form />);
    });
  });

  describe('Field', () => {
    it('Should render without crashing', () => {
      shallow(<Field />);
    });
  });
});
