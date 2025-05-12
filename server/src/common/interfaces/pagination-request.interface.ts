/**
 * Interface intended for requesting results paginated
 */
// eslint-disable-next-line
export interface PaginationRequest<T = any> {
  // Number of records to skip (where the pagination shall start)
  skip?: number;
  /**
   * The index of the page where the pagination should start from.
   *
   * Its intended for the same purpose that `skip`, but the latter represents an amount of
   * records that should be skipped.
   *
   * Should be used only when needed to handle the pagination by the current page index.
   */
  page: number;

  // Page size
  limit: number;

  // Order By
  order_by?: string;

  // Sort order
  order_direction?: 'ASC' | 'DESC';

  // Other params of type T
  params?: T;
}
