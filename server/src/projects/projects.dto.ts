import {
  IsBoolean,
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class upsertProjectCategoryDto {
  @IsOptional()
  @IsString()
  readonly categoryId: string;
  @IsNotEmpty()
  @IsString()
  readonly categoryRu: string;
  @IsNotEmpty()
  @IsString()
  readonly categoryTm: string;
  @IsNotEmpty()
  @IsString()
  readonly categoryEn: string;
}

export class upsertProjectDto {
  @IsOptional()
  @IsString()
  readonly projectId: string;

  @IsOptional()
  @IsString()
  readonly nameTm: string;

  @IsOptional()
  @IsString()
  readonly nameRu: string;

  @IsOptional()
  @IsString()
  readonly nameEn: string;

  @IsOptional()
  @IsString()
  readonly descriptionTm: string;

  @IsOptional()
  @IsString()
  readonly descriptionRu: string;

  @IsOptional()
  @IsString()
  readonly descriptionEn: string;

  @IsNotEmpty()
  @IsString()
  readonly companyTm: string;

  @IsNotEmpty()
  @IsString()
  readonly companyEn: string;

  @IsNotEmpty()
  @IsString()
  readonly companyRu: string;

  @IsNotEmpty()
  @IsString()
  readonly logo: string;

  @IsNotEmpty()
  @IsDateString()
  readonly workDate: string;

  @IsNotEmpty()
  @IsDateString()
  @IsOptional()
  readonly endDate: string;

  @IsNotEmpty()
  @IsString({ each: true })
  readonly images: string[];

  @IsNotEmpty()
  @IsString()
  readonly cover: string;

  @IsOptional()
  @IsInt()
  readonly priority: number;

  @IsOptional()
  @IsBoolean()
  readonly homeActivity: boolean;

  // @IsNotEmpty()
  // @IsString()
  // readonly categoryId: string;

  @IsOptional()
  @IsString()
  readonly authorId: string;
}

export class fetchCategoryProjectsDto {
  @IsOptional()
  @IsNumber()
  readonly page: number;
  @IsOptional()
  @IsNumber()
  readonly limit: number;
}

export class fetchProjectsDto {
  @IsOptional()
  @IsNumber()
  readonly page: number;
  @IsOptional()
  @IsNumber()
  readonly limit: number;
  @IsOptional()
  @IsBoolean()
  readonly deleted: boolean;
}
