export const INVALID_DATE = 'La fecha debe ser mayor o igual a la fecha actual';
export const INVALID_AMOUNT = 'El monto debe ser mayor que 0';

export function validateDate(value) {
  let transferDate = new Date((value).replace('-', ' '));
  let actualDate = new Date();
  actualDate.setHours(0, 0, 0, 0);
  if (transferDate < actualDate) {
    return INVALID_DATE;
  }
  return null;
}

export function validateAmount(value) {
  const amount = value;
  if (amount <= 0) {
    return INVALID_AMOUNT;
  }
  return null;
}
