import * as actionCreator from './actionCreator';
import * as actionTypes from './actionTypes';

describe('App action creator', () => {
  it ('should return the correct action type when selecting view', () => {
    const expectedAction = {
      type: actionTypes.VIEW_SELECTED
    };
    expect(actionCreator.selectView()).toEqual(expectedAction);
  });

  it ('should return the correct action type when setting field value', () => {
    const expectedAction = {
      type: actionTypes.FIELD_VALUE
    };
    expect(actionCreator.setFieldValue()).toEqual(expectedAction);
  });

  it ('should return the correct action type when setting form message', () => {
    const expectedAction = {
      type: actionTypes.SET_FORM_MESSAGE
    };
    expect(actionCreator.setFormMessage()).toEqual(expectedAction);
  });

  it ('should return the correct action type when init form', () => {
    const expectedAction = {
      type: actionTypes.INIT_FORM
    };
    expect(actionCreator.initForm()).toEqual(expectedAction);
  });

  it ('should return the correct action type when fetching transfers', () => {
    const expectedAction = {
      type: actionTypes.FETCHING_TRANSFERS
    };
    expect(actionCreator.fetchingTransfers()).toEqual(expectedAction);
  });

  it ('should return the correct action type when transfers are finded', () => {
    const expectedAction = {
      type: actionTypes.TRANSFERS_FINDED
    };
    expect(actionCreator.transfersFinded()).toEqual(expectedAction);
  });

  it ('should return the correct action type when caliing initTransfers', () => {
    const expectedAction = {
      type: actionTypes.INIT_TRANSFERS
    };
    expect(actionCreator.initTransfers()).toEqual(expectedAction);
  });

  it ('should return the correct action type when no transfers are finded', () => {
    const expectedAction = {
      type: actionTypes.NO_TRANSFERS
    };
    expect(actionCreator.noTransfers()).toEqual(expectedAction);
  });

  it ('should return the correct action type when setting validation message', () => {
    const expectedAction = {
      type: actionTypes.FIELD_VALIDATION_MESSAGE
    };
    expect(actionCreator.setFieldValidationMessage()).toEqual(expectedAction);
  });

  it ('should return the correct action type when setting validation message', () => {
    const expectedAction = {
      type: actionTypes.FIELD_VALIDATION_MESSAGE
    };
    expect(actionCreator.setFieldValidationMessage()).toEqual(expectedAction);
  });
});
