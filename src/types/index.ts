export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  stock: number;
  images?: string[];
  sizes?: Array<{
    size: Size;
    inStock: boolean;
  }>;
  material?: string;
  careInstructions?: string;
  sku?: string;
}

export type Size = 'XS' | 'S' | 'M' | 'L' | 'XL';

export interface CartItem {
  product: Product;
  quantity: number;
  size?: Size;
}

export interface User {
  id: string;
  email: string;
  name: string;
  isAdmin: boolean;
}