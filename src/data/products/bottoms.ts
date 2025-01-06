import { Product } from '../../types';

export const bottoms: Product[] = [
  {
    id: 'bottom-1',
    name: 'High-Waisted Jeans',
    description: 'Classic high-waisted jeans with a modern fit',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800',
    category: 'bottoms',
    subcategory: 'jeans',
    rating: 4.6,
    stock: 25,
    material: '98% Cotton, 2% Elastane',
    careInstructions: 'Machine wash cold',
    sku: 'BTM-001'
  },
  {
    id: 'bottom-2',
    name: 'Pleated Midi Skirt',
    description: 'Elegant pleated midi skirt',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800',
    category: 'bottoms',
    subcategory: 'skirts',
    rating: 4.4,
    stock: 18,
    material: '100% Polyester',
    careInstructions: 'Machine wash cold',
    sku: 'BTM-002'
  },
  {
    id: 'bottom-3',
    name: 'Yoga Leggings',
    description: 'High-performance yoga leggings',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800',
    category: 'bottoms',
    subcategory: 'leggings',
    rating: 4.9,
    stock: 30,
    material: 'Nylon/Spandex Blend',
    careInstructions: 'Machine wash cold',
    sku: 'BTM-003'
  }
];