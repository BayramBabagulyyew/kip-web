import { IsString } from 'class-validator';

export class CreatePresentationDto {
  @IsString()
  readonly file: string;

  @IsString()
  readonly language: string;
}
