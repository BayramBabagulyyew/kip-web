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
  nameTm: string;

  @IsOptional()
  @IsString()
  textTm: string;

  @IsOptional()
  @IsString()
  nameRu: string;

  @IsOptional()
  @IsString()
  textRu: string;

  @IsOptional()
  @IsString()
  nameEn: string;

  @IsOptional()
  @IsString()
  textEn: string;

  @IsOptional()
  @IsString()
  media: string;

}
