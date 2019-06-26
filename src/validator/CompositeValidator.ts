export class CompositeValidator {
  public constructor(private readonly validations: Validation[]) {
  }

  public validate(text: string): ValidationError[] {
    const results = [];
    this.validations.forEach((validation) => {
      const validationError = validation.validate(text);
      if (validationError) {
        results.push(validationError);
      }
    });
    return results;
  }
}

// tslint:disable-next-line
export class Validation {
  public constructor(private readonly validationCommand: (text: string) => boolean, private readonly errorMessageBuilder: (text: string) => string) {
  }

  public validate(text: string): ValidationError {
    if (this.validationCommand(text)) {
      return undefined;
    }

    return new ValidationError(this.errorMessageBuilder(text));
  }
}

// tslint:disable-next-line
export class ValidationError {
  public constructor(public readonly message: string) {
  }
}
