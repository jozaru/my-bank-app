import appReducer from './appReducer';
import * as actionTypes from '../actions/actionTypes';

describe('appReducer', () => {
  it('Should return an object with the new view and title when receiving a selected view action', () => {
    const receivedAction = {
      type: actionTypes.SELECT_VIEW,
      view: 'SOME_VIEW',
      title: 'SOME_TITLE'
    };
    const expectedState = {
      view: receivedAction.view,
      title: receivedAction.title
    };
    expect(appReducer(undefined, receivedAction)).toEqual(expectedState);
  });

  it('Should return an object with the new object with formData, formMessage and formValid for somrFormName when receiving a init form action', () => {
    const formName = 'someFormName';
    const receivedAction = {
      type: actionTypes.INIT_FORM,
      formName
    };
    const expectedState = {
      [formName]: {
        formData: {},
        messageType: null,
        formMessage: ''
      }
    };
    expect(appReducer({}, receivedAction)).toEqual(expectedState);
  });

  it('Should return an object with the new form fields and formName when receiving a set form data action', () => {
    const formName = 'someFormName';
    const formData = {};
    const receivedAction = {
      type: actionTypes.SET_FORM_DATA,
      formName,
      formData
    };
    const expectedState = {
      [formName]: {
        formData: receivedAction.formData
      }
    };
    expect(appReducer({[formName]: {}}, receivedAction)).toEqual(expectedState);
  });

  it('Should return an object with the formMessage when receiving a set form message action', () => {
    const formName = 'someFormName';
    const formMessage = 'Some form masagge';
    const receivedAction = {
      type: actionTypes.SET_FORM_MESSAGE,
      formName,
      formMessage
    };
    const expectedState = {
      [formName]: {
        formMessage: receivedAction.formMessage
      }
    };
    expect(appReducer({[formName]: {}}, receivedAction)).toEqual(expectedState);
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

  it('Should return an object with the new loading value when receiving a fetching transfers action', () => {
    const receivedAction = {
      type: actionTypes.FETCH_TRANSFERS
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
      type: actionTypes.SET_FIELD_VALIDATION_MESSAGE,
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
