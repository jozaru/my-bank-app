import * as actionTypes from './actionTypes';

export function selectView(view, title) {
  return {
    type: actionTypes.SELECT_VIEW,
    view,
    title
  };
}

export function initForm(formName) {
  return {
    type: actionTypes.INIT_FORM,
    formName
  };
}

export function setFormData(formName, formData) {
  return {
    type: actionTypes.SET_FORM_DATA,
    formName,
    formData
  };
}

export function setFormMessage(formName, formMessage) {
  return {
    type: actionTypes.SET_FORM_MESSAGE,
    formName,
    formMessage
  };
}

export function initTransfers() {
  return {
    type: actionTypes.INIT_TRANSFERS
  };
}

export function fetchTransfers() {
  return {
    type: actionTypes.FETCH_TRANSFERS
  };
}

export function transfersFinded(transfers) {
  return {
    type: actionTypes.TRANSFERS_FINDED,
    transfers
  };
}

export function noTransfers() {
  return {
    type: actionTypes.NO_TRANSFERS
  };
}

export function setFieldValidationMessage(fieldName, message) {
  return {
    type: actionTypes.SET_FIELD_VALIDATION_MESSAGE,
    [fieldName]: message,
    fieldName
  };
}
