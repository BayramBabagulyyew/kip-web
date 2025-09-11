import { IsNumber, IsOptional, IsString } from 'class-validator';
import { partnerTypeEnum } from 'generated/client';

export class CreatePartnerDto {

  @IsString()
  fileUrl: string;

  @IsString()
  type: partnerTypeEnum;

  @IsOptional()
  @IsString()
  website: string;

  @IsOptional()
  @IsNumber()
  priority: number;

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  text: string;

  @IsOptional()
  @IsString()
  media: string;

}
