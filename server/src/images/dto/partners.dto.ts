import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { partnerTypeEnum } from 'generated/client';

export class upsertPartnersDto {
  @IsOptional()
  @IsString()
  readonly partnerId: string;
  @IsOptional()
  @IsString()
  readonly website: string;
  @IsNotEmpty()
  @IsString()
  readonly fileUrl: string;
  @IsOptional()
  @IsInt()
  readonly priority: number;
  @IsNotEmpty()
  @IsEnum(partnerTypeEnum)
  readonly type: partnerTypeEnum;
  @IsOptional()
  @IsString()
  readonly authorId: string;
}
