import * as actionTypes from './actionTypes';

export function selectView(view, title) {
  return {
    type: actionTypes.VIEW_SELECTED,
    view,
    title
  };
}

export function setFieldValue(formName, fields) {
  return {
    type: actionTypes.FIELD_VALUE,
    [formName]: fields,
    formName
  };
}

export function setFormMessage(formMessage) {
  return {
    type: actionTypes.SET_FORM_MESSAGE,
    formMessage
  };
}

export function initForm(formName, fields, formMessage) {
  return {
    type: actionTypes.INIT_FORM,
    [formName]: fields,
    formName,
    formMessage
  };
}

export function fetchingTransfers() {
  return {
    type: actionTypes.FETCHING_TRANSFERS
  };
}

export function transfersFinded(transfers) {
  return {
    type: actionTypes.TRANSFERS_FINDED,
    transfers: transfers
  };
}

export function initTransfers() {
  return {
    type: actionTypes.INIT_TRANSFERS
  };
}

export function noTransfers() {
  return {
    type: actionTypes.NO_TRANSFERS
  };
}

export function setFieldValidationMessage(fieldName, message) {
  return {
    type: actionTypes.FIELD_VALIDATION_MESSAGE,
    [fieldName]: message,
    fieldName
  };
}
