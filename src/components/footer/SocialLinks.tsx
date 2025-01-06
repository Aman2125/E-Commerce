import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const socialLinks = [
  { Icon: Facebook, href: '#', label: 'Facebook' },
  { Icon: Twitter, href: '#', label: 'Twitter' },
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export const SocialLinks = () => (
  <div className="flex space-x-4">
    {socialLinks.map(({ Icon, href, label }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-text hover:text-primary transition-colors"
        aria-label={label}
      >
        <Icon className="h-6 w-6" />
      </a>
    ))}
  </div>
);