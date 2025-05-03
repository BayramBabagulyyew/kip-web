import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsStrongPassword,
  Min,
} from 'class-validator';

export class singUpDto {
  @IsNotEmpty()
  @IsString()
  // @Min(8)
  readonly username: string;
  @IsNotEmpty()
  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 1,
      minNumbers: 1,
      minSymbols: 1,
      minUppercase: 1,
    },
    { message: 'Password is weak' },
  )
  readonly password: string;
}

export class ChangePasswordDto {
  @IsNotEmpty()
  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 1,
      minNumbers: 1,
      minSymbols: 1,
      minUppercase: 1,
    },
    { message: 'Password is weak' },
  )
  readonly oldPassword: string;

  @IsNotEmpty()
  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 1,
      minNumbers: 1,
      minSymbols: 1,
      minUppercase: 1,
    },
    { message: 'Password is weak' },
  )
  readonly newPassword: string;
}
