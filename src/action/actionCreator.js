export const VIEW_SELECTED = 'VIEW_SELECTED';
export const FORM_VALID = 'FORM_VALID';
export const FIELD_VALUE = 'FIELD_VALUE';
export const INIT_FORM = 'INIT_FORM';
export const SET_FORM_MESSAGE = 'SET_FORM_MESSAGE';
export const TRANSFERS_FINDED = 'TRANSFERS_FINDED';
export const FINDING_TRANSFERS = 'FINDING_TRANSFERS';
export const INIT_TRANSFERS = 'INIT_TRANSFERS';
export const FIELD_VALIDATION_MESSAGE = 'FIELD_VALIDATION_MESSAGE';
export const NO_TRANSFERS = 'NO_TRANSFERS';

export function selectView(view, title) {
  return {
    type: VIEW_SELECTED,
    view,
    title
  }
}

export function setFieldValue(formName, fields) {
  return {
    type: FIELD_VALUE,
    [formName]: fields,
    formName
  }
}

export function setFormMessage(message) {
  return {
    type: SET_FORM_MESSAGE,
    formMessage: message
  }
}

export function initForm(formName, fields, message) {
  return {
    type: INIT_FORM,
    [formName]: fields,
    formName,
    formMessage: message
  }
}

export function findingTransfers() {
  return {
    type: FINDING_TRANSFERS
  }
}

export function transfersFinded(transfers) {
  return {
    type: TRANSFERS_FINDED,
    transfers: transfers
  }
}

export function noTransfers() {
  return {
    type: NO_TRANSFERS
  }
}

export function initTransfers() {
  return {
    type: INIT_TRANSFERS,
    transfers: [],
    loading: false,
    error: false
  }
}

export function setFieldValidationMessage(fieldName, message) {
  return {
    type: FIELD_VALIDATION_MESSAGE,
    [fieldName]: message,
    fieldName
  }
}

export function initTransfersHistory() {
  return {
    type: INIT_TRANSFERS,
    transfers: []
  }
}
