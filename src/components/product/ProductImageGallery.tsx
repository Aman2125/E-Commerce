import React, { useState } from 'react';

interface ProductImageGalleryProps {
  images: string[];
}

export const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="space-y-4">
      <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
        <img
          src={mainImage}
          alt="Product"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setMainImage(image)}
            className={`aspect-square rounded-lg overflow-hidden bg-gray-100 
              ${mainImage === image ? 'ring-2 ring-primary' : ''}`}
          >
            <img
              src={image}
              alt={`Product view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};