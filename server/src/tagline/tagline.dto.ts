import { IsOptional, IsString } from 'class-validator';

export class CreateTaglineDto {
  @IsString()
  readonly taglineEn: string;

  @IsString()
  readonly taglineRu: string;

  @IsString()
  @IsOptional()
  readonly taglineTm: string;
}
