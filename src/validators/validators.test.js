import { INVALID_DATE, INVALID_AMOUNT, validateDate, validateAmount } from './transferValidators';

describe('validators', () => {
  describe('transferValidators', () => {
    describe('validateDate()', () => {
      it('Should return an invalid date message when validateDate is calling with a date before to actual date', () => {
        const EXPECTED_MESSAGE = INVALID_DATE;
        const transferDate = '2016-10-10';
        expect(validateDate(transferDate)).toEqual(EXPECTED_MESSAGE);
      });

      it('Should return a null message when validateDate is calling with a date after to actual date', () => {
        const transferDate = new Date().toISOString().slice(0, 10);
        expect(validateDate(transferDate)).toBeNull();
      });
    });

    describe('validateAmount()', () => {
      it('Should return an invalid amount message when validateAmount is calling with an amount 0 or less', () => {
        const EXPECTED_MESSAGE = INVALID_AMOUNT;
        const amount = 0;
        expect(validateAmount(amount)).toEqual(EXPECTED_MESSAGE);
      });

      it('Should return a null message when validateAmount is calling with an amount greater than 0', () => {
        const amount = 1000;
        expect(validateAmount(amount)).toBeNull();
      });
    });
  });
});
