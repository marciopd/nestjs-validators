import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint({ name: 'IsNoSpaces', async: false })
export class NoSpacesValidator implements ValidatorConstraintInterface {
  private static readonly HAS_SPACE_REGEX: RegExp = /[\s]+/;

  public validate(text: string, args?: ValidationArguments): boolean {
    return !NoSpacesValidator.HAS_SPACE_REGEX.test(text);
  }

  public defaultMessage(args: ValidationArguments): string {
    return '\'$value\' has spaces.';
  }
}

// tslint:disable-next-line
export const IsNoSpaces = (validationOptions?: ValidationOptions): any => {
  return (object: any, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: NoSpacesValidator,
    });
  };
};
