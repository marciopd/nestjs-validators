import { DifferentThanPropertyValidator } from '../../src/validator/DifferentThanPropertyValidator';
import { ValidationArguments } from 'class-validator';

const createValidationArguments = (valuePropertyOne, valuePropertyTwo, namePropertyOne: string, namePropertyTwo: string) => {
  const targetObject = { propertyOne: valuePropertyOne, propertyTwo: valuePropertyTwo };
  return {
    property: namePropertyOne,
    value: valuePropertyOne,
    targetName: '',
    constraints: [namePropertyTwo],
    object: targetObject,
  } as ValidationArguments;
};

describe('DifferentThanPropertyValidator tests', () => {
  const namePropertyOne = 'propertyOne';
  const namePropertyTwo = 'propertyTwo';

  let validator: DifferentThanPropertyValidator;
  let valuePropertyTwo;
  let valuePropertyOne;
  let result;

  beforeEach(() => {
    validator = new DifferentThanPropertyValidator();
    valuePropertyTwo = undefined;
    valuePropertyOne = undefined;
    result = undefined;
  });

  describe('With Different Values', () => {
    beforeEach(() => {
      valuePropertyOne = 'value one';
      valuePropertyTwo = 'value two';

      const args = createValidationArguments(valuePropertyOne, valuePropertyTwo, namePropertyOne, namePropertyTwo);

      result = validator.validate(valuePropertyOne, args);
    });

    it('Returns true', () => {
      expect(result).toBeTruthy();
    });
  });

  describe('With Same Values', () => {
    beforeEach(() => {
      valuePropertyOne = 'same value';
      valuePropertyTwo = valuePropertyOne;

      const args = createValidationArguments(valuePropertyOne, valuePropertyTwo, namePropertyOne, namePropertyTwo);

      result = validator.validate(valuePropertyOne, args);
    });

    it('Returns false', () => {
      expect(result).toBeFalsy();
    });
  });

});
