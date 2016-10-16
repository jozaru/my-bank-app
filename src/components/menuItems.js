import * as views from '../constants/viewConstants';

const items = [
  {
    id: 1,
    text: 'Inicio',
    viewName: views.HOME,
    viewTitle: views.HOME_TITLE,
    viewLogo: views.HOME_LOGO
  },
  {
    id: 2,
    text: 'Realizar transferencia',
    viewName: views.CREATE_TRANSFER,
    viewTitle: views.CREATE_TRANSFER_TITLE,
    viewLogo: views.CREATE_TRANSFER_LOGO
  },
  {
    id: 3,
    text: 'Ver transferencias',
    viewName: views.TRANSFERS_HISTORY,
    viewTitle: views.TRANSFERS_HISTORY_TITLE,
    viewLogo: views.TRANSFERS_HISTORY_LOGO
  }
]

export default items;
