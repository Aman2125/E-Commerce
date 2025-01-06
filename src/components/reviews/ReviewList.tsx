import React from 'react';
import { Star, ThumbsUp } from 'lucide-react';
import { Review } from '../../types/review';

interface ReviewListProps {
  reviews: Review[];
  onHelpfulClick: (reviewId: string) => void;
}

export const ReviewList: React.FC<ReviewListProps> = ({ reviews, onHelpfulClick }) => {
  return (
    <div className="space-y-6">
      {reviews.map((review) => (
        <div key={review.id} className="border-b pb-6">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating ? 'text-secondary fill-secondary' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <h3 className="font-semibold text-text">{review.title}</h3>
              </div>
              <p className="text-sm text-text/70 mt-1">
                By {review.userName} • {new Date(review.createdAt).toLocaleDateString()}
                {review.verified && (
                  <span className="ml-2 text-green-600 text-xs">Verified Purchase</span>
                )}
              </p>
            </div>
          </div>
          
          <p className="mt-3 text-text/80">{review.comment}</p>
          
          {review.images && review.images.length > 0 && (
            <div className="mt-4 flex gap-2">
              {review.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Review image ${index + 1}`}
                  className="w-20 h-20 object-cover rounded-lg"
                />
              ))}
            </div>
          )}
          
          <button
            onClick={() => onHelpfulClick(review.id)}
            className="mt-4 flex items-center gap-2 text-sm text-text/70 hover:text-primary"
          >
            <ThumbsUp className="h-4 w-4" />
            Helpful ({review.helpful})
          </button>
        </div>
      ))}
    </div>
  );
};