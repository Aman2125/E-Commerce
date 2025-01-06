import { Product } from '../../types';

export const outerwear: Product[] = [
  {
    id: 'outer-1',
    name: 'Wool Blend Coat',
    description: 'Elegant wool blend coat for cold weather',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800',
    category: 'outerwear',
    subcategory: 'coats',
    rating: 4.9,
    stock: 10,
    material: '80% Wool, 20% Polyester',
    careInstructions: 'Dry clean only',
    sku: 'OUT-001'
  },
  {
    id: 'outer-2',
    name: 'Denim Jacket',
    description: 'Classic denim jacket with modern fit',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=800',
    category: 'outerwear',
    subcategory: 'jackets',
    rating: 4.7,
    stock: 20,
    material: '100% Cotton Denim',
    careInstructions: 'Machine wash cold',
    sku: 'OUT-002'
  },
  {
    id: 'outer-3',
    name: 'Business Blazer',
    description: 'Professional blazer for office wear',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800',
    category: 'outerwear',
    subcategory: 'blazers',
    rating: 4.8,
    stock: 15,
    material: 'Polyester Blend',
    careInstructions: 'Dry clean recommended',
    sku: 'OUT-003'
  }
];