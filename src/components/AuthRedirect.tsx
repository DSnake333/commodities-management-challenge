import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AuthRedirect = () => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" replace />;
  if (user.role === 'manager') return <Navigate to="/dashboard" replace />;
  return <Navigate to="/products" replace />;
};

export default AuthRedirect;