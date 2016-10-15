import * as views from '../view/viewConstants';
import wallet from '../wallet.svg';
import hand from '../hand.svg';
import search from '../search.svg';

const items = [
  {
    id: 1,
    text: 'Inicio',
    viewName: views.HOME,
    viewTitle: views.HOME_TITLE,
    viewLogo: wallet
  },
  {
    id: 2,
    text: 'Realizar transferencia',
    viewName: views.CREATE_TRANSFER,
    viewTitle: views.CREATE_TRANSFER_TITLE,
    viewLogo: hand
  },
  {
    id: 3,
    text: 'Ver transferencias',
    viewName: views.TRANSFERS_HISTORY,
    viewTitle: views.TRANSFERS_HISTORY_TITLE,
    viewLogo: search
  }
]

export default items;
