import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryHeaderProps {
  title: string;
  description: string;
  tags?: string[];
  breadcrumbs: Array<{
    label: string;
    href: string;
  }>;
}

export const CategoryHeader: React.FC<CategoryHeaderProps> = ({
  title,
  description,
  tags = [],
  breadcrumbs,
}) => {
  return (
    <header className="mb-8">
      <nav className="flex mb-4 text-sm">
        {breadcrumbs.map((crumb, index) => (
          <React.Fragment key={crumb.href}>
            {index > 0 && <span className="mx-2 text-text/50">/</span>}
            <Link
              to={crumb.href}
              className="text-text/70 hover:text-primary transition-colors"
            >
              {crumb.label}
            </Link>
          </React.Fragment>
        ))}
      </nav>
      
      <h1 className="text-4xl font-bold text-text">{title}</h1>
      <p className="mt-2 text-text/80">{description}</p>
      
      {tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </header>
  );
};