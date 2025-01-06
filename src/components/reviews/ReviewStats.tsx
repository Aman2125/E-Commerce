import React from 'react';
import { Star } from 'lucide-react';
import { ReviewStats as ReviewStatsType } from '../../types/review';

interface ReviewStatsProps {
  stats: ReviewStatsType;
}

export const ReviewStats: React.FC<ReviewStatsProps> = ({ stats }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <div className="flex items-center gap-4">
        <div className="text-center">
          <div className="text-4xl font-bold text-text">
            {stats.averageRating.toFixed(1)}
          </div>
          <div className="flex mt-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < Math.round(stats.averageRating)
                    ? 'text-secondary fill-secondary'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <div className="text-sm text-text/70 mt-1">
            {stats.totalReviews} reviews
          </div>
        </div>
        
        <div className="flex-1">
          {[5, 4, 3, 2, 1].map((rating) => {
            const count = stats.ratingDistribution[rating] || 0;
            const percentage = (count / stats.totalReviews) * 100;
            
            return (
              <div key={rating} className="flex items-center gap-2">
                <div className="text-sm text-text/70 w-6">{rating}</div>
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-secondary"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <div className="text-sm text-text/70 w-10">
                  {Math.round(percentage)}%
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};