import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SliderControlsProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onDotClick: (index: number) => void;
}

export const SliderControls: React.FC<SliderControlsProps> = ({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  onDotClick,
}) => {
  return (
    <>
      <button
        onClick={onPrevious}
        className="
          absolute left-4 top-1/2 -translate-y-1/2 
          bg-black/20 hover:bg-black/40 text-white
          w-12 h-12 rounded-full 
          flex items-center justify-center
          backdrop-blur-sm transition-all duration-300
          opacity-0 group-hover:opacity-100
          transform -translate-x-4 group-hover:translate-x-0
          focus:outline-none focus:ring-2 focus:ring-white/50
          z-20
        "
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={onNext}
        className="
          absolute right-4 top-1/2 -translate-y-1/2 
          bg-black/20 hover:bg-black/40 text-white
          w-12 h-12 rounded-full 
          flex items-center justify-center
          backdrop-blur-sm transition-all duration-300
          opacity-0 group-hover:opacity-100
          transform translate-x-4 group-hover:translate-x-0
          focus:outline-none focus:ring-2 focus:ring-white/50
          z-20
        "
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            className={`
              w-2.5 h-2.5 rounded-full transition-all duration-300
              ${currentSlide === index
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/70'
              }
              focus:outline-none focus:ring-2 focus:ring-white/50
            `}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentSlide === index ? 'true' : 'false'}
          />
        ))}
      </div>
    </>
  );
};