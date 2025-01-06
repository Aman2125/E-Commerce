import React, { useState } from 'react';
import { PersonalInfo } from './PersonalInfo';
import { OrderHistory } from './OrderHistory';
import { SavedAddresses } from './SavedAddresses';
import { WishlistTab } from './WishlistTab';

const tabs = [
  { id: 'personal', label: 'Personal Info' },
  { id: 'orders', label: 'Order History' },
  { id: 'addresses', label: 'Saved Addresses' },
  { id: 'wishlist', label: 'Wishlist' },
];

export const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <div>
      <div className="border-b">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-primary text-primary'
                  : 'border-transparent text-text/70 hover:text-text'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-8">
        {activeTab === 'personal' && <PersonalInfo />}
        {activeTab === 'orders' && <OrderHistory />}
        {activeTab === 'addresses' && <SavedAddresses />}
        {activeTab === 'wishlist' && <WishlistTab />}
      </div>
    </div>
  );
};