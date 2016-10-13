import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';
import { Header } from './Header';
import { MenuItem } from './MenuItem';
import { TextField } from './TextField';
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
      shallow(<MenuItem />);
    });

    it('should call selectView when clicked', () => {
      let selectView = jest.fn();
      const wrapper = shallow(<MenuItem selectView={selectView}/>);
      wrapper.find('li').simulate('click');
      expect(selectView).toHaveBeenCalled();
    });
  });

  describe('Form', () => {
    it('Should render without crashing', () => {
      shallow(<Form />);
    });
  });

  describe('TextField', () => {
    it('Should render without crashing', () => {
      shallow(<TextField />);
    });
  });
});
