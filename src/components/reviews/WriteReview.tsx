import React, { useState } from 'react';
import { Star, Upload } from 'lucide-react';

interface WriteReviewProps {
  onSubmit: (review: {
    rating: number;
    title: string;
    comment: string;
    images: string[];
  }) => void;
}

export const WriteReview: React.FC<WriteReviewProps> = ({ onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [images, setImages] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ rating, title, comment, images });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          Rating
        </label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setRating(value)}
              className="focus:outline-none"
            >
              <Star
                className={`h-6 w-6 ${
                  value <= rating
                    ? 'text-secondary fill-secondary'
                    : 'text-gray-300'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="title" className="block text-sm font-medium text-text mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/50"
          placeholder="Summarize your review"
          required
        />
      </div>

      <div>
        <label htmlFor="comment" className="block text-sm font-medium text-text mb-2">
          Review
        </label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={4}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/50"
          placeholder="Share your experience with this product"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text mb-2">
          Add Photos
        </label>
        <div className="flex gap-2">
          <button
            type="button"
            className="flex items-center justify-center w-20 h-20 border-2 border-dashed rounded-lg hover:border-primary"
          >
            <Upload className="h-6 w-6 text-text/70" />
          </button>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Upload ${index + 1}`}
              className="w-20 h-20 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90"
      >
        Submit Review
      </button>
    </form>
  );
};