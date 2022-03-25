import { Category } from './category.model';
import { Review } from './review.model';

export interface Product {
  _id?: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: Category;
  isActive: boolean;
  review?: Review[];
  new: boolean;
}
