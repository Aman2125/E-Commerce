import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProduct } from '../../hooks/useProduct';
import { Size } from '../../types';
import { ProductImageGallery } from '../../components/product/ProductImageGallery';
import { SizeSelector } from '../../components/product/SizeSelector';
import { AddToCartButton } from '../../components/product/AddToCartButton';
import { WishlistButton } from '../../components/product/WishlistButton';

export const ProductDetailPage = () => {
  const { id } = useParams();
  const { product, loading, error } = useProduct(id);
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ProductImageGallery images={product.images || [product.image]} />
        
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-text">{product.name}</h1>
            <p className="mt-2 text-2xl font-semibold text-primary">
              ${product.price}
            </p>
          </div>

          <p className="text-text/80">{product.description}</p>

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

          <div className="border-t pt-6">
            <h2 className="text-lg font-semibold mb-4">Product Details</h2>
            <ul className="space-y-2 text-text/80">
              <li>Material: {product.material || 'Not specified'}</li>
              <li>Care Instructions: {product.careInstructions || 'Not specified'}</li>
              <li>SKU: {product.sku || product.id}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};