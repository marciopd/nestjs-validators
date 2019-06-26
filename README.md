# Nest.js validators

Provides [Nest](https://nestjs.com/) common validators.

## Installation

```bash
$ npm i nestjs-validators
```

## Usage

### Blank string validator

Checks if the string is not empty or blank, like in `'    '`.

``` typescript
export class AddressDTO {
  @IsNotBlank()
  public city: string;
  
  ...
}
```

### No spaces validator

Checks if the string has no spaces, like in `'a  b'`.

``` typescript
export class CreateUserRequestDTO {
  @IsNoSpaces()
  public password: string;
  
  ...
}
```

### Different than property validator

Checks if a object property is different than another one.

``` typescript
export class ChangePasswordRequestDTO {
  @IsNotBlank()
  public oldPassword: string;

  @IsDifferentThanProperty('oldPassword')
  public newPassword: string;
}
```
