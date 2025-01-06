import React from 'react';
import { Trash2 } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { CartItem as CartItemType } from '../../types';

interface CartItemProps {
  item: CartItemType;
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useStore();
  const { product, quantity } = item;

  return (
    <div className="flex items-center gap-4 py-4 border-b last:border-b-0">
      <img
        src={product.image}
        alt={product.name}
        className="w-24 h-24 object-cover rounded-lg"
      />
      
      <div className="flex-1">
        <h3 className="font-semibold text-text">{product.name}</h3>
        <p className="text-text/70 text-sm">${product.price}</p>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center border rounded-lg">
          <button
            onClick={() => updateQuantity(product.id, Math.max(0, quantity - 1))}
            className="px-3 py-1 hover:bg-gray-100"
          >
            -
          </button>
          <span className="px-3 py-1 border-x">{quantity}</span>
          <button
            onClick={() => updateQuantity(product.id, quantity + 1)}
            className="px-3 py-1 hover:bg-gray-100"
          >
            +
          </button>
        </div>
        
        <button
          onClick={() => removeFromCart(product.id)}
          className="text-red-500 hover:text-red-600"
          aria-label="Remove item"
        >
          <Trash2 className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};