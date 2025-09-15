import { IsOptional, IsString } from "class-validator";
import { PaginationDto } from "src/common/dto/pagination.dto";

export class QueryImagesDto extends PaginationDto {
    @IsOptional()
    @IsString()
    readonly partnerId: string;
}