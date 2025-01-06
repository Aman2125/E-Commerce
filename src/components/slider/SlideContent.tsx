import React from 'react';
import { Link } from 'react-router-dom';

interface SlideContentProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  position?: 'left' | 'center' | 'right';
  isActive?: boolean;
}

export const SlideContent: React.FC<SlideContentProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  position = 'center',
  isActive = false,
}) => {
  const positionClasses = {
    left: 'items-start text-left ml-[10%]',
    center: 'items-center text-center',
    right: 'items-end text-right mr-[10%]',
  };

  return (
    <div 
      className={`absolute inset-0 flex flex-col justify-center ${positionClasses[position]} z-10`}
      aria-hidden={!isActive}
    >
      <div className={`
        p-8 rounded-lg max-w-md
        transform transition-all duration-1000
        ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
      `}>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight leading-tight">
          {title}
        </h2>
        <p className="text-white/90 text-lg md:text-xl mb-8 font-light leading-relaxed">
          {description}
        </p>
        <Link
          to={buttonLink}
          className="
            inline-block bg-white text-primary 
            hover:bg-primary hover:text-white 
            px-8 py-3 rounded-lg font-medium
            transition-all duration-300 
            transform hover:-translate-y-1
            shadow-lg hover:shadow-xl
            focus:outline-none focus:ring-2 focus:ring-primary/50
          "
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};