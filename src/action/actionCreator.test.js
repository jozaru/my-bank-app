import * as actionCreator from './actionCreator';
import * as actionTypes from './actionTypes';

describe('actionCreator', () => {
  describe('selectView()', () => {
    it('should return the correct action type when selecting view', () => {
      const view = 'SOME_VIEW';
      const title = 'SOME_TITLE';
      const expectedAction = {
        type: actionTypes.SELECT_VIEW,
        view,
        title
      };
      expect(actionCreator.selectView(view, title)).toEqual(expectedAction);
    });
  });

  describe('initForm()', () => {
    it('should return the correct action type when init form', () => {
      const formName = 'someForm';
      const expectedAction = {
        type: actionTypes.INIT_FORM,
        formName
      };
      expect(actionCreator.initForm(formName)).toEqual(expectedAction);
    });
  });

  describe('setFormData()', () => {
    it('should return the correct action type when setting form data', () => {
      const formData = {};
      const formName = 'someForm';
      const expectedAction = {
        type: actionTypes.SET_FORM_DATA,
        formName,
        formData
      };
      expect(actionCreator.setFormData(formName, formData)).toEqual(expectedAction);
    });
  });

  describe('setFormMessage()', () => {
    it('should return the correct action type when setting form message', () => {
      const formName = 'someForm';
      const formMessage = 'Some message';
      const expectedAction = {
        type: actionTypes.SET_FORM_MESSAGE,
        formName,
        formMessage
      };
      expect(actionCreator.setFormMessage(formName, formMessage)).toEqual(expectedAction);
    });
  });

  describe('initTransfers()', () => {
    it('should return the correct action type when init tranfers fetching', () => {
      const expectedAction = {
        type: actionTypes.INIT_TRANSFERS
      };
      expect(actionCreator.initTransfers()).toEqual(expectedAction);
    });
  });

  describe('fetchTransfers()', () => {
    it('should return the correct action type when fetching transfers', () => {
      const expectedAction = {
        type: actionTypes.FETCH_TRANSFERS
      };
      expect(actionCreator.fetchTransfers()).toEqual(expectedAction);
    });
  });

  describe('transfersFinded()', () => {
    it('should return the correct action type when transfers are finded', () => {
      const transfers = {}
      const expectedAction = {
        type: actionTypes.TRANSFERS_FINDED,
        transfers
      };
      expect(actionCreator.transfersFinded(transfers)).toEqual(expectedAction);
    });
  });

  describe('noTransfers()', () => {
    it('should return the correct action type when no transfers was finded', () => {
      const expectedAction = {
        type: actionTypes.NO_TRANSFERS
      };
      expect(actionCreator.noTransfers()).toEqual(expectedAction);
    });
  });

  describe('setFieldValidationMessage()', () => {
    it('should return the correct action type when setting validation message', () => {
      const expectedAction = {
        type: actionTypes.SET_FIELD_VALIDATION_MESSAGE
      };
      expect(actionCreator.setFieldValidationMessage()).toEqual(expectedAction);
    });
  });
});
