import { BlankStringValidator } from '../../src/validator/BlankStringValidator';

describe('BlankStringValidator tests', () => {
  let validator: BlankStringValidator;

  beforeEach(() => {
    validator = new BlankStringValidator();
  });

  describe('With success', () => {
    it('Returns true', () => {
      expect(validator.validate(' not blank string    ')).toBeTruthy();
    });
  });

  describe('With error', () => {
    describe('Simple space', () => {
      it('Returns false', () => {
        expect(validator.validate(' ')).toBeFalsy();
      });
    });
    describe('Tab', () => {
      it('Returns false', () => {
        expect(validator.validate(' \t ')).toBeFalsy();
      });
    });
    describe('New line', () => {
      it('Returns false', () => {
        expect(validator.validate(' \n ')).toBeFalsy();
      });
    });
    describe('Carriage return', () => {
      it('Returns false', () => {
        expect(validator.validate(' \r ')).toBeFalsy();
      });
    });
  });

});
