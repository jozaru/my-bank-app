import React from 'react'
import { shallow } from 'enzyme'
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
