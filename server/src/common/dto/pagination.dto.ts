export class PaginationDto {
  page: number;
  limit: number;
  sortBy: string;
  orderBy: 'ASC' | 'DESC';
}
