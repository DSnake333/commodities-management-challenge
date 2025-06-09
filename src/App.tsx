import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { AuthRoute } from './components/AuthRoute';
import AuthRedirect from './components/AuthRedirect'; // Fixed import
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Products } from './pages/Products';
import { NotFound } from './pages/NotFound';
import { Navbar } from './components/Navbar';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route element={<AuthRoute allowedRoles={['manager', 'store_keeper']} />}>
            <Route path="/products" element={<Products />} />
          </Route>

          <Route element={<AuthRoute allowedRoles={['manager']} />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          <Route path="/" element={<AuthRedirect />} />

          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export { App };