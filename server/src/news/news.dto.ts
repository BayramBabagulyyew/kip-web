import {
  IsBoolean,
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpsertNewsDto {
  @IsOptional()
  @IsString()
  readonly newsId: string;

  @IsString()
  readonly titleTm: string;

  @IsString()
  readonly contentTm: string;

  @IsString()
  readonly titleRu: string;

  @IsString()
  readonly contentRu: string;

  @IsString()
  readonly titleEn: string;

  @IsString()
  readonly contentEn: string;

  @IsString()
  readonly image: string;

  @IsOptional()
  @IsString()
  readonly video: string;

  @IsOptional()
  @IsBoolean()
  readonly published: boolean;

  @IsOptional()
  @IsBoolean()
  readonly isMain: boolean;

  @IsOptional()
  @IsBoolean()
  readonly homeActivity: boolean;

  @IsOptional()
  @IsInt()
  readonly priority: number;

  @IsOptional()
  @IsString()
  readonly authorId: string;

  @IsOptional()
  @IsDateString()
  readonly createdAt: string;
}

export class fetchAdminNewsDto {
  @IsOptional()
  @IsNumber()
  readonly page: number;

  @IsOptional()
  @IsNumber()
  readonly limit: number;

  @IsOptional() // admin shu request iberende hokman true ya-da false ibermeli
  @IsBoolean()
  readonly deleted: boolean;
}

export class changePriorityDto {
  @IsNotEmpty()
  @IsString()
  readonly newsId: string;

  @IsNotEmpty()
  @IsInt()
  readonly priority: number;
}

export class changeIsMainDto {
  @IsNotEmpty()
  @IsString()
  readonly newsId: string;
}
