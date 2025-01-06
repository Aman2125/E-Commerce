import React from 'react';
import { X } from 'lucide-react';
import { Product, Size } from '../../types';
import { SizeSelector } from './SizeSelector';
import { AddToCartButton } from './AddToCartButton';
import { WishlistButton } from './WishlistButton';

interface QuickViewProps {
  product: Product;
  onClose: () => void;
}

export const QuickView: React.FC<QuickViewProps> = ({ product, onClose }) => {
  const [selectedSize, setSelectedSize] = React.useState<Size | null>(null);

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-text">{product.name}</h2>
            <button onClick={onClose} className="text-text/70 hover:text-text">
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src={product.image}
              alt={product.name}
              className="w-full aspect-square object-cover rounded-lg"
            />
            
            <div className="space-y-4">
              <p className="text-text/80">{product.description}</p>
              <p className="text-2xl font-bold text-primary">${product.price}</p>
              
              <SizeSelector
                sizes={product.sizes || []}
                selectedSize={selectedSize}
                onSelectSize={setSelectedSize}
              />
              
              <div className="flex gap-4">
                <AddToCartButton
                  product={product}
                  selectedSize={selectedSize}
                  className="flex-1"
                />
                <WishlistButton product={product} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};