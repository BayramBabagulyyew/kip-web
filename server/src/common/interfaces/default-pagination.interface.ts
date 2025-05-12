import { UUID } from 'crypto';

/**
 * Interface designed to assign default parameters to pagination
 */
export interface DefaultPagination {
  defaultSkip?: number;
  defaultPage?: number;
  defaultLimit?: number;
  defaultOrder?: string | number | UUID;
  defaultOrderDirection?: string;
  maxAllowedSize: number;
}
