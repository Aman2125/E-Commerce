import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Floral Summer Dress',
    description: 'Light and breezy cotton dress perfect for summer days',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800',
    category: 'dresses',
    rating: 4.5,
    stock: 15,
    images: [
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800',
      'https://images.unsplash.com/photo-1495385794356-15371f348c31?w=800',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800'
    ],
    sizes: [
      { size: 'XS', inStock: true },
      { size: 'S', inStock: true },
      { size: 'M', inStock: true },
      { size: 'L', inStock: false },
      { size: 'XL', inStock: true }
    ],
    material: '100% Cotton',
    careInstructions: 'Machine wash cold, tumble dry low',
    sku: 'DRS-001'
  },
  {
    id: '2',
    name: 'Classic White Blouse',
    description: 'Timeless white blouse perfect for any occasion',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800',
    category: 'tops',
    rating: 4.8,
    stock: 20,
    images: [
      'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800',
      'https://images.unsplash.com/photo-1565945887714-d5139f4eb0ce?w=800',
      'https://images.unsplash.com/photo-1603251579431-8041402bdeda?w=800',
      'https://images.unsplash.com/photo-1626948683848-1f8f23f23f2d?w=800'
    ],
    sizes: [
      { size: 'XS', inStock: true },
      { size: 'S', inStock: true },
      { size: 'M', inStock: true },
      { size: 'L', inStock: true },
      { size: 'XL', inStock: true }
    ],
    material: '95% Cotton, 5% Elastane',
    careInstructions: 'Machine wash cold, hang dry',
    sku: 'TOP-001'
  },
  {
    id: '3',
    name: 'High-Waisted Jeans',
    description: 'Classic high-waisted jeans with a modern fit',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800',
    category: 'bottoms',
    rating: 4.6,
    stock: 25,
    images: [
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800',
      'https://images.unsplash.com/photo-1475178626620-a4d074967452?w=800',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800',
      'https://images.unsplash.com/photo-1494522358652-f30e61a60313?w=800'
    ],
    sizes: [
      { size: 'XS', inStock: true },
      { size: 'S', inStock: true },
      { size: 'M', inStock: true },
      { size: 'L', inStock: true },
      { size: 'XL', inStock: false }
    ],
    material: '98% Cotton, 2% Elastane',
    careInstructions: 'Machine wash cold, tumble dry low',
    sku: 'BTM-001'
  },
  {
    id: '4',
    name: 'Wool Blend Coat',
    description: 'Elegant wool blend coat for cold weather',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800',
    category: 'outerwear',
    rating: 4.9,
    stock: 10,
    images: [
      'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800',
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800',
      'https://images.unsplash.com/photo-1548624149-f9461d5c1af1?w=800',
      'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800'
    ],
    sizes: [
      { size: 'XS', inStock: true },
      { size: 'S', inStock: true },
      { size: 'M', inStock: true },
      { size: 'L', inStock: true },
      { size: 'XL', inStock: true }
    ],
    material: '80% Wool, 20% Polyester',
    careInstructions: 'Dry clean only',
    sku: 'OUT-001'
  }
];

export const categories = [
  {
    id: 'dresses',
    name: 'Dresses',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800',
    description: 'Elegant dresses for every occasion'
  },
  {
    id: 'tops',
    name: 'Tops',
    image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800',
    description: 'Stylish tops and blouses'
  },
  {
    id: 'bottoms',
    name: 'Bottoms',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800',
    description: 'Pants, skirts, and shorts'
  },
  {
    id: 'outerwear',
    name: 'Outerwear',
    image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800',
    description: 'Jackets, coats, and blazers'
  }
];