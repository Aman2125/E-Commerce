import { create } from 'zustand';
import { CartItem, Product } from '../types';
import { User, UserProfile } from '../types/user';
import { Order } from '../types/order';
import { Address } from '../types/address';

interface Store {
  user: User | null;
  cart: CartItem[];
  wishlist: Product[];
  recentlyViewed: Product[];
  orders: Order[];
  addresses: Address[];
  
  setUser: (user: User | null) => void;
  addToCart: (product: Product, size?: Size) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  toggleWishlist: (product: Product) => void;
  clearCart: () => void;
  addToRecentlyViewed: (product: Product) => void;
  updateProfile: (data: Partial<UserProfile>) => Promise<void>;
  addAddress: (address: Omit<Address, 'id'>) => void;
  removeAddress: (id: string) => void;
  setDefaultAddress: (id: string) => void;
  
  login: (credentials: { email: string; password: string }) => Promise<void>;
  signup: (data: { email: string; password: string; name: string }) => Promise<void>;
}

export const useStore = create<Store>((set) => ({
  user: null,
  cart: [],
  wishlist: [],
  recentlyViewed: [],
  orders: [],
  addresses: [],
  
  setUser: (user) => set({ user }),
  
  addToCart: (product, size) =>
    set((state) => {
      const existingItem = state.cart.find(
        (item) => item.product.id === product.id && item.size === size
      );
      
      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.product.id === product.id && item.size === size
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      
      return { 
        cart: [...state.cart, { product, quantity: 1, size }] 
      };
    }),
    
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.product.id !== productId),
    })),
    
  updateQuantity: (productId, quantity) =>
    set((state) => ({
      cart: quantity === 0
        ? state.cart.filter((item) => item.product.id !== productId)
        : state.cart.map((item) =>
            item.product.id === productId ? { ...item, quantity } : item
          ),
    })),
    
  toggleWishlist: (product) =>
    set((state) => {
      const exists = state.wishlist.some((item) => item.id === product.id);
      return {
        wishlist: exists
          ? state.wishlist.filter((item) => item.id !== product.id)
          : [...state.wishlist, product],
      };
    }),
    
  clearCart: () => set({ cart: [] }),

  addToRecentlyViewed: (product) =>
    set((state) => {
      const filtered = state.recentlyViewed.filter((p) => p.id !== product.id);
      return {
        recentlyViewed: [product, ...filtered].slice(0, 10),
      };
    }),

  updateProfile: async (data) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    set(state => ({
      user: state.user ? { ...state.user, ...data } : null
    }));
  },

  addAddress: (address) =>
    set((state) => ({
      addresses: [...state.addresses, { id: crypto.randomUUID(), ...address }],
    })),

  removeAddress: (id) =>
    set((state) => ({
      addresses: state.addresses.filter((addr) => addr.id !== id),
    })),

  setDefaultAddress: (id) =>
    set((state) => ({
      addresses: state.addresses.map((addr) => ({
        ...addr,
        default: addr.id === id,
      })),
    })),

  login: async (credentials) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    set({ 
      user: { 
        id: '1', 
        email: credentials.email, 
        name: 'John Doe',
        isAdmin: false 
      } 
    });
  },

  signup: async (data) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    set({ 
      user: { 
        id: '1', 
        email: data.email, 
        name: data.name,
        isAdmin: false 
      } 
    });
  },
}));