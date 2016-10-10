import appReducer from './appReducer';
import * as actionTypes from '../action/actionTypes';

describe('App reducer', () => {
  it('Should return an object with the new view and title when receiving a selected view action', () => {
    const receivedAction = {
      type: actionTypes.VIEW_SELECTED,
      view: 'SOME_VIEW',
      title: 'SOME_TITLE'
    };
    const expectedState = {
      view: receivedAction.view,
      title: receivedAction.title
    };
    expect(appReducer(undefined, receivedAction)).toEqual(expectedState);
  });

  it('Should return an object with the new form fields and formName when receiving a field value action', () => {
    const formName = 'someFormName';
    const fields = [];
    const receivedAction = {
      type: actionTypes.FIELD_VALUE,
      [formName]: fields,
      formName
    };
    const expectedState = {
      [formName]: receivedAction[receivedAction.formName]
    };
    expect(appReducer({}, receivedAction)).toEqual(expectedState);
  });

  it('Should return an object with the formMessage when receiving a set form message action', () => {
    const formMessage = 'Some form masagge';
    const receivedAction = {
      type: actionTypes.SET_FORM_MESSAGE,
      formMessage
    };
    const expectedState = {
      formMessage: receivedAction.formMessage
    };
    expect(appReducer({}, receivedAction)).toEqual(expectedState);
  });

  it('Should return an object with the new form fields and formMessage when receiving a init form action', () => {
    const formName = 'someFormName';
    const formMessage = 'Some form masagge';
    const fields = [];
    const receivedAction = {
      type: actionTypes.INIT_FORM,
      [formName]: fields,
      formName,
      formMessage
    };
    const expectedState = {
      [formName]: receivedAction[receivedAction.formName],
      formMessage: receivedAction.formMessage
    };
    expect(appReducer({}, receivedAction)).toEqual(expectedState);
  });

  it('Should return an object with the new loading value when receiving a fetching transfers action', () => {
    const receivedAction = {
      type: actionTypes.FETCHING_TRANSFERS
    };
    const expectedState = {
      loading: true
    };
    expect(appReducer({}, receivedAction)).toEqual(expectedState);
  });

  it('Should return an object with the new transfers and loading value when receiving a transfers finded action', () => {
    const transfers = [];
    const receivedAction = {
      type: actionTypes.TRANSFERS_FINDED,
      transfers
    };
    const expectedState = {
      transfers: receivedAction.transfers,
      loading: false
    };
    expect(appReducer({}, receivedAction)).toEqual(expectedState);
  });

  it('Should return an object with the new transfers, loading value and error value when receiving a init transfers action', () => {
    const receivedAction = {
      type: actionTypes.INIT_TRANSFERS
    };
    const expectedState = {
      transfers: null,
      loading: false,
      error: false
    };
    expect(appReducer({}, receivedAction)).toEqual(expectedState);
  });

  it('Should return an object with the new transfers, loading value and error value when receiving a no transfers action', () => {
    const receivedAction = {
      type: actionTypes.NO_TRANSFERS
    };
    const expectedState = {
      transfers: null,
      loading: false,
      error: true
    };
    expect(appReducer({}, receivedAction)).toEqual(expectedState);
  });

  it('Should return an object with the new validation message for a field when receiving a field validation message action', () => {
    const fieldName = 'someFieldName';
    const message = 'Some validation message';
    const receivedAction = {
      type: actionTypes.FIELD_VALIDATION_MESSAGE,
      [fieldName]: message,
      fieldName
    };
    const expectedState = {
      [fieldName]: receivedAction[receivedAction.fieldName]
    };
    expect(appReducer({}, receivedAction)).toEqual(expectedState);
  });

  it('Should return an object with the actual state when no action is received', () => {
    const state = {}
    const receivedAction = {}
    const expectedState = state;
    expect(appReducer({}, receivedAction)).toEqual(expectedState);
  });
});
