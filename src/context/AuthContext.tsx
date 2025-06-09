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
    if (email !== 'manager@example.com' && email !== 'keeper@example.com') {
      throw new Error('Invalid credentials');
    }

    const response = await new Promise<{ data: User }>((resolve, reject) => {
      setTimeout(() => {
        if (email === 'manager@example.com' || email === 'keeper@example.com') {
          resolve({
            data: {
              id: '1',
              email,
              role: email === 'manager@example.com' ? 'manager' : 'store_keeper',
              token: 'mock-token'
            }
          });
        } else {
          reject(new Error('Invalid credentials'));
        }
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
