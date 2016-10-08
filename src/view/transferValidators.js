const INVALID_DATE = 'La fecha debe ser mayor o igual a la fecha actual';
const INVALID_AMOUNT = 'El monto debe ser mayor que 0';

export function validateDate(field) {
  let transferDate = new Date((field.input.value).replace('-', ' '));
  let actualDate = new Date();
  actualDate.setHours(0, 0, 0, 0);
  if (transferDate < actualDate) {
    return INVALID_DATE;
  }
  return null;
}

export function validateAmount(field) {
  const amount = field.input.value;
  if (amount <= 0) {
    return INVALID_AMOUNT;
  }
  return null;
}
