import * as actions from '../action/actionCreator';
import { HOME, HOME_TITLE } from '../view/viewConstants';

function getInitialState() {
  return {
    view: HOME,
    title: HOME_TITLE,
    tranfers: []
  }
}

function appReducer(state = getInitialState(), action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case actions.VIEW_SELECTED:
      newState.view = action.view;
      newState.title = action.title;
      break;
    case actions.FIELD_VALUE:
      newState[action.formName] = action[action.formName];
      break;
    case actions.SET_FORM_MESSAGE:
      newState.formMessage = action.formMessage;
      break;
    case actions.INIT_FORM:
      newState[action.formName] = action[action.formName];
      newState.formMessage = action.formMessage;
      break;
    case actions.FINDING_TRANSFERS:
      newState.loading = true;
      break;
    case actions.TRANSFERS_FINDED:
      newState.transfers = action.transfers;
      newState.loading = false;
      break;
    case actions.INIT_TRANSFERS:
      newState.transfers = actions.transfers;
      newState.loading = actions.loading;
      newState.error = actions.error;
      break;
    case actions.NO_TRANSFERS:
      newState.loading = false;
      newState.transfers = null;
      newState.error = true;
      break;
    case actions.FIELD_VALIDATION_MESSAGE:
      newState[action.fieldName] = action[action.fieldName];
      break;
    default:
      return state;
  }
  return newState;
}

export default appReducer;
