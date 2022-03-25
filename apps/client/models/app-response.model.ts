import { Product } from './product.model';

export interface AppResponse {
  success: boolean;
  data: Product | unknown;
}
