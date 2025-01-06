import { Product } from '../../types';

export const tops: Product[] = [
  {
    id: 'top-1',
    name: 'Classic White Blouse',
    description: 'Timeless white blouse perfect for any occasion',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800',
    category: 'tops',
    subcategory: 'blouses',
    rating: 4.8,
    stock: 20,
    material: '95% Cotton, 5% Elastane',
    careInstructions: 'Machine wash cold',
    sku: 'TOP-001'
  },
  {
    id: 'top-2',
    name: 'Casual V-Neck Tee',
    description: 'Comfortable cotton t-shirt for everyday wear',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800',
    category: 'tops',
    subcategory: 't-shirts',
    rating: 4.5,
    stock: 50,
    material: '100% Cotton',
    careInstructions: 'Machine wash cold',
    sku: 'TOP-002'
  },
  {
    id: 'top-3',
    name: 'Knit Sweater',
    description: 'Warm and cozy knit sweater',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800',
    category: 'tops',
    subcategory: 'sweaters',
    rating: 4.7,
    stock: 15,
    material: 'Wool Blend',
    careInstructions: 'Hand wash cold',
    sku: 'TOP-003'
  }
];