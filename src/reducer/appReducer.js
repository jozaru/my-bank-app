import * as actionTypes from '../action/actionTypes';

function getInitialState() {
  return {};
}

function appReducer(state = getInitialState(), action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case actionTypes.VIEW_SELECTED:
      newState.view = action.view;
      newState.title = action.title;
      break;
    case actionTypes.FIELD_VALUE:
      newState[action.formName] = action[action.formName];
      break;
    case actionTypes.SET_FORM_MESSAGE:
      newState.formMessage = action.formMessage;
      break;
    case actionTypes.INIT_FORM:
      newState[action.formName] = action[action.formName];
      newState.formMessage = action.formMessage;
      break;
    case actionTypes.FETCHING_TRANSFERS:
      newState.loading = true;
      break;
    case actionTypes.TRANSFERS_FINDED:
      newState.transfers = action.transfers;
      newState.loading = false;
      break;
    case actionTypes.INIT_TRANSFERS:
      newState.transfers = null;
      newState.loading = false;
      newState.error = false;
      break;
    case actionTypes.NO_TRANSFERS:
      newState.transfers = null;
      newState.loading = false;
      newState.error = true;
      break;
    case actionTypes.FIELD_VALIDATION_MESSAGE:
      newState[action.fieldName] = action[action.fieldName];
      break;
    default:
      return state;
  }
  return newState;
}

export default appReducer;
