import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class singUpDto {
  @IsNotEmpty()
  @IsString()
  readonly username: string;
  @IsNotEmpty()
  readonly password: string;
  @IsOptional()
  @IsString()
  readonly key: string;
}

export class singInDto {
  @IsNotEmpty()
  @IsString()
  readonly username: string;
  @IsNotEmpty()
  readonly password: string;
}

export class ChangePasswordDto {
  @IsNotEmpty()
  @IsString()
  readonly oldPassword: string;

  @IsString()
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
