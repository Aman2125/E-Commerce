import { Product } from '../../types';

export const dresses: Product[] = [
  {
    id: 'dress-1',
    name: 'Floral Summer Dress',
    description: 'Light and breezy cotton dress perfect for summer days',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800',
    category: 'dresses',
    subcategory: 'casual',
    rating: 4.5,
    stock: 15,
    material: '100% Cotton',
    careInstructions: 'Machine wash cold',
    sku: 'DRS-001'
  },
  {
    id: 'dress-2',
    name: 'Evening Gown',
    description: 'Elegant evening gown for special occasions',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800',
    category: 'dresses',
    subcategory: 'formal',
    rating: 4.8,
    stock: 10,
    material: '100% Silk',
    careInstructions: 'Dry clean only',
    sku: 'DRS-002'
  },
  {
    id: 'dress-3',
    name: 'Bohemian Maxi Dress',
    description: 'Flowing maxi dress with bohemian print',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800',
    category: 'dresses',
    subcategory: 'maxi',
    rating: 4.6,
    stock: 20,
    material: 'Rayon Blend',
    careInstructions: 'Hand wash cold',
    sku: 'DRS-003'
  }
];