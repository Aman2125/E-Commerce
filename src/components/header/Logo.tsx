import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

export const Logo = () => (
  <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-primary">
    <ShoppingBag className="h-8 w-8" />
    <span>ShopHub</span>
  </Link>
);