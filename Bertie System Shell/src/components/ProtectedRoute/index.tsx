import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading, isDeveloper } = useAuth();
  
  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/sign-in" />;
  if (isDeveloper) return <Navigate to="/admin" />;
  
  return <>{children}</>;
};

export const DeveloperRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading, isDeveloper } = useAuth();
  
  if (loading) return <div>Loading...</div>;
  if (!user || !isDeveloper) return <Navigate to="/admin/login" />;
  
  return <>{children}</>;
}; 