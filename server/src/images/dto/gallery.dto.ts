import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class upsertGallaryDto {
  @IsOptional()
  @IsString()
  readonly galleryId: string;
  @IsOptional()
  @IsInt()
  readonly priority: number;
  @IsNotEmpty()
  @IsString()
  readonly image: string;
  @IsOptional()
  @IsString()
  readonly authorId: string;
}

export class fetchGallaryDto {
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
