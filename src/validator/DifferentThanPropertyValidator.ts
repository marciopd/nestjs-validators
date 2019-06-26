import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint({ name: 'IsDifferentThanProperty', async: false })
export class DifferentThanPropertyValidator implements ValidatorConstraintInterface {
  public validate(text: string, args: ValidationArguments): boolean {
    const [relatedPropertyName] = args.constraints;
    const relatedValue: string = (args.object as any)[relatedPropertyName];
    return text !== relatedValue;
  }

  public defaultMessage(args: ValidationArguments): string {
    return '$property is equal to $constraint1';
  }
}

// tslint:disable-next-line
export const IsDifferentThanProperty = (property: string, validationOptions?: ValidationOptions): any => {
  return (object: any, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [property],
      validator: DifferentThanPropertyValidator,
    });
  };
};
