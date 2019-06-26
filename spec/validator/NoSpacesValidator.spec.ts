import { NoSpacesValidator } from '../../src/validator/NoSpacesValidator';

describe('NoSpacesValidator tests', () => {
  let validator: NoSpacesValidator;

  beforeEach(() => {
    validator = new NoSpacesValidator();
  });

  describe('With success', () => {
    it('Returns true', () => {
      expect(validator.validate('no_spaces_here_123')).toBeTruthy();
    });
  });

  describe('With error', () => {
    describe('Simple space', () => {
      it('Returns false', () => {
        expect(validator.validate('a b')).toBeFalsy();
      });
    });
    describe('Tab', () => {
      it('Returns false', () => {
        expect(validator.validate('a\tb')).toBeFalsy();
      });
    });
    describe('New line', () => {
      it('Returns false', () => {
        expect(validator.validate('a\nb')).toBeFalsy();
      });
    });
    describe('Carriage return', () => {
      it('Returns false', () => {
        expect(validator.validate('a\rb')).toBeFalsy();
      });
    });
  });

});
