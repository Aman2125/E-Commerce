import React from 'react';
import { MapPin, Plus } from 'lucide-react';

const addresses = [
  {
    id: '1',
    name: 'Home',
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
    zip: '10001',
    default: true,
  },
  // Add more addresses here
];

export const SavedAddresses = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button className="h-48 border-2 border-dashed rounded-lg flex flex-col items-center justify-center text-text/70 hover:text-primary hover:border-primary">
          <Plus className="h-8 w-8 mb-2" />
          <span>Add New Address</span>
        </button>

        {addresses.map((address) => (
          <div
            key={address.id}
            className="border rounded-lg p-6 relative hover:border-primary"
          >
            {address.default && (
              <span className="absolute top-4 right-4 text-sm text-primary">
                Default
              </span>
            )}
            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5 text-text/70 mt-1" />
              <div>
                <h3 className="font-medium text-text">{address.name}</h3>
                <p className="text-text/70 mt-1">
                  {address.street}
                  <br />
                  {address.city}, {address.state} {address.zip}
                </p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t flex gap-4">
              <button className="text-primary hover:text-primary/80 text-sm">
                Edit
              </button>
              <button className="text-red-600 hover:text-red-700 text-sm">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};