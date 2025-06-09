export interface User {
  id: string;
  email: string;
  role: 'manager' | 'store_keeper';
  token: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  lastUpdated: string;
}