import React from 'react';
import { FooterSection } from './FooterSection';
import { Newsletter } from './Newsletter';
import { SocialLinks } from './SocialLinks';
import { CreditCard, ShoppingBag } from 'lucide-react';

export const Footer = () => {
  const sections = {
    about: {
      title: 'About Us',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'Careers', href: '/careers' },
      ],
    },
    service: {
      title: 'Customer Service',
      links: [
        { label: 'Help Center', href: '/help' },
        { label: 'Returns', href: '/returns' },
        { label: 'Shipping Info', href: '/shipping' },
        { label: 'Terms & Conditions', href: '/terms' },
      ],
    },
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FooterSection {...sections.about} />
          <FooterSection {...sections.service} />
          
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-lg mb-4 text-text">Follow Us</h3>
              <SocialLinks />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4 text-text">Payment Methods</h3>
              <div className="flex space-x-4">
                <CreditCard className="h-8 w-8 text-text" />
                <ShoppingBag className="h-8 w-8 text-text" />
              </div>
            </div>
          </div>

          <Newsletter />
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-text/80 text-sm">
              © {new Date().getFullYear()} ShopHub. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="/privacy" className="text-text/80 hover:text-primary text-sm">
                Privacy Policy
              </a>
              <a href="/terms" className="text-text/80 hover:text-primary text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};