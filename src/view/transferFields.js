import { validateDate, validateAmount } from './transferValidators';

var transferFields = [
  {
    id: 1,
    type: 'date',
    name: 'fecha',
    label: 'Fecha',
    min: new Date().toISOString().slice(0, 10),
    required: true,
    formName: 'formTransfer',
    validationFunction: validateDate
  },
  {
    id: 2,
    type: 'text',
    name: 'destinatario',
    label: 'Destinatario',
    required: true,
    formName: 'formTransfer'
  },
  {
    id: 3,
    type: 'number',
    name: 'monto',
    label: 'Monto',
    min: 1,
    required: true,
    formName: 'formTransfer',
    validationFunction: validateAmount
  }
];

export default transferFields;
