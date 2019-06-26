import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { isBlank } from 'underscore.string';

@ValidatorConstraint({ name: 'IsNotBlank', async: false })
export class BlankStringValidator implements ValidatorConstraintInterface {
  public validate(text: string, args?: ValidationArguments): boolean {
    return !isBlank(text);
  }

  public defaultMessage(args: ValidationArguments): string {
    return '\'$value\' is blank.';
  }
}

// tslint:disable-next-line
export const IsNotBlank = (validationOptions?: ValidationOptions): any => {
  return (object: any, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: BlankStringValidator,
    });
  };
};
