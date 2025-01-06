import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { Logo } from './Logo';
import { SearchBar } from './SearchBar';
import { NavIcons } from './NavIcons';
import { MobileMenu } from './MobileMenu';
import { categories } from '../../data/categories';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-md'
    }`}>
      {/* Top Bar */}
      <div className="bg-primary text-white text-sm py-2 text-center">
        <p>Free Shipping on Orders Over $100 | Shop Now!</p>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Logo />
          
          <div className="hidden md:flex items-center space-x-8">
            {categories.map(category => (
              <div
                key={category.id}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(category.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-text hover:text-primary transition-colors py-2">
                  <span>{category.name}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                
                {activeDropdown === category.id && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg py-2 animate-fadeIn">
                    {category.subcategories.map(sub => (
                      <Link
                        key={sub.id}
                        to={`/category/${category.id}/${sub.id}`}
                        className="block px-4 py-2 text-sm text-text hover:bg-gray-50 hover:text-primary"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-8 flex-1 justify-end">
            <SearchBar />
            <NavIcons />
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};