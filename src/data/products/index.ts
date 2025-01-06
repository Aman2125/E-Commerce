import { dresses } from './dresses';
import { tops } from './tops';
import { bottoms } from './bottoms';
import { outerwear } from './outerwear';
import { Product } from '../../types';

export const products: Product[] = [
  ...dresses,
  ...tops,
  ...bottoms,
  ...outerwear
];

export const getProductsByCategory = (category: string) => 
  products.filter(product => product.category === category);

export const getProductsBySubcategory = (category: string, subcategory: string) =>
  products.filter(product => 
    product.category === category && product.subcategory === subcategory
  );

export * from './dresses';
export * from './tops';
export * from './bottoms';
export * from './outerwear';