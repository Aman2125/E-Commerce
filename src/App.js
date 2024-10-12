import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import ProductDetail from './components/ProductDetails';
import Cart from './components/Cart';
import Profile from './components/Profile';
import OrderHistory from './components/OrderHistory';
import Wishlist from './components/Wishlist';
import SearchResults from './components/SearchResults';
import Checkout from './components/Checkout';
import Confirmation from './components/Confirmation';
import ShippingInfo from './components/ShippingInfo';
import ReturnsRefunds from './components/ReturnsRefunds';
import CustomerSupport from './components/CustomerSupport';
import DealsOffers from './components/DealsOffers';
import Reviews from './components/Reviews';
import AboutUs from './components/AboutUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';
import FAQ from './components/FAQ';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/shipping-info" element={<ShippingInfo />} />
        <Route path="/returns-refunds" element={<ReturnsRefunds />} />
        <Route path="/customer-support" element={<CustomerSupport />} />
        <Route path="/deals-offers" element={<DealsOffers />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
};

export default App;
