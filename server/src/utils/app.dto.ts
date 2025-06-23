import { Type } from 'class-transformer';
import {
  IsArray,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { catalogTypeEnum, productServicesTypeEnum } from 'generated/client';

export class fetchNewsDto {
  @IsOptional()
  @IsNumber()
  readonly page: number;
  @IsOptional()
  @IsNumber()
  readonly limit: number;
}

export class contactDto {
  @IsOptional()
  @IsString({ message: 'contactId must be string' })
  readonly contactId: string;
  @IsNotEmpty({ message: 'phone is required' })
  @IsString({ each: true, message: 'phone must be array of string' })
  // @IsArray({ message: 'phone must be array of string' })
  readonly phone: string; // string[]
  @IsNotEmpty({ message: 'mobilePhone is required' })
  @IsString({ each: true, message: 'mobilePhone must be array of string' })
  // @IsArray({ message: 'mobilePhone must be array of string' })
  readonly mobilePhone: string; // string[]
  @IsOptional()
  @IsString({ message: 'instagram must be string' })
  readonly instagram: string;
  @IsOptional()
  @IsString({ message: 'instagramLink must be string' })
  readonly instagramLink: string;
  @IsNotEmpty({ message: 'info is required' })
  // @IsString({message: "info must be mail string"})
  @IsEmail({}, { message: 'info must be mail string' })
  readonly info: string;
  @IsNotEmpty({ message: 'addressTm is required' })
  @IsString({ message: 'addressTm must be string' })
  readonly addressTm: string;
  @IsNotEmpty({ message: 'addressRu is required' })
  @IsString({ message: 'addressRu must be string' })
  readonly addressRu: string;
  @IsNotEmpty({ message: 'addressEn is required' })
  @IsString({ message: 'addressEn must be string' })
  readonly addressEn: string;
}

export class informationItemDto {
  @IsNotEmpty({ message: 'titleTm is required' })
  @IsString({ message: 'titleTm must be string' })
  readonly titleTm: string;
  @IsNotEmpty({ message: 'titleRu is required' })
  @IsString({ message: 'titleRu must be string' })
  readonly titleRu: string;
  @IsNotEmpty({ message: 'titleEn is required' })
  @IsString({ message: 'titleEn must be string' })
  readonly titleEn: string;
  @IsNotEmpty({ message: 'count is required' })
  @IsInt({ message: 'count must be integer number' })
  readonly count: number;
}

export class informationDto {
  @IsOptional()
  @IsString({ message: 'infoId must be string' })
  readonly infoId: string;

  @IsNotEmpty()
  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => informationItemDto)
  readonly info1: informationItemDto;

  @IsNotEmpty()
  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => informationItemDto)
  readonly info2: informationItemDto;

  @IsNotEmpty()
  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => informationItemDto)
  readonly info3: informationItemDto;

  @IsNotEmpty()
  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => informationItemDto)
  readonly info4: informationItemDto;

  // @IsNotEmpty()
  // @IsInt()
  // readonly countries: string;
  // @IsNotEmpty()
  // @IsInt()
  // readonly employees: string;
  // @IsNotEmpty()
  // @IsInt()
  // readonly clients: string;
  // @IsNotEmpty()
  // @IsInt()
  // readonly projects: string;
}

export class upsetAboutDto {
  @IsNotEmpty()
  @IsString()
  readonly titleTm: string;
  @IsNotEmpty()
  @IsString()
  readonly contentTm: string;
  @IsNotEmpty()
  @IsString()
  readonly titleRu: string;
  @IsNotEmpty()
  @IsString()
  readonly contentRu: string;
  @IsNotEmpty()
  @IsString()
  readonly titleEn: string;
  @IsNotEmpty()
  @IsString()
  readonly contentEn: string;
  @IsNotEmpty()
  @IsString()
  readonly taglineTm: string;
  @IsNotEmpty()
  @IsString()
  readonly taglineRu: string;
  @IsNotEmpty()
  @IsString()
  readonly taglineEn: string;
  @IsOptional()
  @IsString()
  readonly presentationTm: string;
  @IsOptional()
  @IsString()
  readonly presentationRu: string;
  @IsOptional()
  @IsString()
  readonly presentationEn: string;
}

export class sendMailDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
  @IsOptional()
  @IsString()
  readonly fileUrl: string;
  @IsNotEmpty()
  @IsString()
  readonly comment: string;
}

export class upsertEcologyDto {
  @IsNotEmpty()
  @IsString()
  readonly titleTm: string;
  @IsNotEmpty()
  @IsString()
  readonly titleRu: string;
  @IsNotEmpty()
  @IsString()
  readonly titleEn: string;

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  readonly images: string[];
  @IsNotEmpty()
  @IsString()
  readonly contentTm: string;
  @IsNotEmpty()
  @IsString()
  readonly contentRu: string;
  @IsNotEmpty()
  @IsString()
  readonly contentEn: string;
  @IsOptional()
  @IsString()
  readonly video: string;
}

export class upsertServiceDto {
  @IsOptional()
  @IsString()
  readonly id: string;
  @IsNotEmpty()
  @IsString()
  readonly nameTm: string;
  @IsNotEmpty()
  @IsString()
  readonly nameRu: string;
  @IsNotEmpty()
  @IsString()
  readonly nameEn: string;
  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  readonly images: string[];
  @IsNotEmpty()
  @IsString()
  readonly contentTm: string;
  @IsNotEmpty()
  @IsString()
  readonly contentRu: string;
  @IsNotEmpty()
  @IsString()
  readonly contentEn: string;
  @IsNotEmpty()
  @IsString()
  readonly logo: string;
  @IsNotEmpty()
  @IsEnum(productServicesTypeEnum)
  readonly type: productServicesTypeEnum;
  @IsOptional()
  @IsInt()
  readonly priority: number;
}

export class findServiceDto {
  @IsNotEmpty()
  @IsString()
  readonly id: string;
}

export class upsertCatalogDto {
  @IsNotEmpty()
  @IsEnum(catalogTypeEnum)
  readonly catalogType: catalogTypeEnum;
  @IsNotEmpty()
  @IsString()
  readonly fileUrl: string;
}
