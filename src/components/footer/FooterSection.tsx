import React from 'react';
import { Link } from 'react-router-dom';

interface FooterSectionProps {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

export const FooterSection = ({ title, links }: FooterSectionProps) => (
  <div>
    <h3 className="font-semibold text-lg mb-4 text-text">{title}</h3>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            to={link.href}
            className="text-text/80 hover:text-primary transition-colors"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);