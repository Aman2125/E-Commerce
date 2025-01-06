import React from 'react';
import { Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const orders = [
  {
    id: 'ORD-001',
    date: '2024-02-20',
    status: 'Delivered',
    total: 159.99,
    items: [
      {
        id: '1',
        name: 'Floral Summer Dress',
        price: 79.99,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800',
      },
    ],
  },
  // Add more orders here
];

export const OrderHistory = () => {
  return (
    <div className="space-y-6">
      {orders.map((order) => (
        <div key={order.id} className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-semibold text-text">Order #{order.id}</h3>
              <p className="text-sm text-text/70">
                Placed on {new Date(order.date).toLocaleDateString()}
              </p>
            </div>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
              {order.status}
            </span>
          </div>

          <div className="space-y-4">
            {order.items.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-text">{item.name}</h4>
                  <p className="text-sm text-text/70">
                    Quantity: {item.quantity}
                  </p>
                </div>
                <p className="font-medium text-text">${item.price}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t flex justify-between items-center">
            <p className="font-medium text-text">
              Total: ${order.total.toFixed(2)}
            </p>
            <Link
              to={`/order/${order.id}`}
              className="text-primary hover:text-primary/80 text-sm font-medium"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}

      {orders.length === 0 && (
        <div className="text-center py-12">
          <Package className="h-12 w-12 text-text/50 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-text mb-2">No Orders Yet</h3>
          <p className="text-text/70">Start shopping to see your orders here</p>
        </div>
      )}
    </div>
  );
};