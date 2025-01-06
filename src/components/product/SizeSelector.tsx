import React from 'react';
import { Size } from '../../types';

interface SizeSelectorProps {
  sizes: Array<{
    size: Size;
    inStock: boolean;
  }>;
  selectedSize: Size | null;
  onSelectSize: (size: Size) => void;
}

export const SizeSelector: React.FC<SizeSelectorProps> = ({
  sizes,
  selectedSize,
  onSelectSize,
}) => {
  return (
    <div>
      <h3 className="text-sm font-medium text-text mb-4">Select Size</h3>
      <div className="grid grid-cols-4 gap-2">
        {sizes.map(({ size, inStock }) => (
          <button
            key={size}
            onClick={() => inStock && onSelectSize(size)}
            disabled={!inStock}
            className={`
              py-2 px-4 rounded-md text-sm font-medium
              ${selectedSize === size
                ? 'bg-primary text-white'
                : inStock
                ? 'bg-gray-100 hover:bg-gray-200 text-text'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }
            `}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};