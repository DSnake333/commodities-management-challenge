import { createContext, useContext, useState, type ReactNode } from 'react';
import type {User} from '../types/types';

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // Mock API call
    const response = await new Promise<{ data: User }>((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            id: '1',
            email,
            role: email.includes('manager') ? 'manager' : 'store_keeper',
            token: 'mock-token'
          }
        });
      }, 500);
    });

    setUser(response.data);
    localStorage.setItem('user', JSON.stringify(response.data));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};