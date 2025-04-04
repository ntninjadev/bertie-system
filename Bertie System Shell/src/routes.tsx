import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext'
import UserApp from './userDashboard/UserApp'
import DeveloperApp from './developerDashboard/DeveloperApp'
import SignUp from './auth/SignUp'
import ForgotPassword from './auth/ForgotPassword'
import ResetPassword from './auth/ResetPassword'
import AdminSignIn from './developerDashboard/components/auth/AdminSignIn'
import LandingPage from './userDashboard/components/landing/LandingPage'
import BertieSignIn from './auth/BertieSignIn'
import { ProtectedRoute, DeveloperRoute } from './components/ProtectedRoute'

// Auth route wrapper to prevent authenticated users from accessing auth pages
const AuthRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading, isDeveloper } = useAuth()
  
  if (loading) {
    return <div>Loading...</div>
  }
  
  if (user) {
    // If developer, stay in admin section
    if (isDeveloper) {
      return <Navigate to="/admin" />
    }
    // If regular user, go to dashboard
    return <Navigate to="/dashboard" />
  }
  
  return <>{children}</>
}

export default function AppRoutes() {
  const { user, isDeveloper } = useAuth()

  return (
    <Routes>
      {/* Developer routes - completely separate section */}
      <Route path="/admin" element={isDeveloper ? <Navigate to="/admin/dashboard" /> : <AdminSignIn />} />
      <Route
        path="/admin/*"
        element={
          <DeveloperRoute>
            <DeveloperApp />
          </DeveloperRoute>
        }
      />
      
      {/* User routes */}
      <Route
        path="/"
        element={
          user ? (
            isDeveloper ? (
              <Navigate to="/admin/dashboard" />
            ) : (
              <Navigate to="/dashboard" />
            )
          ) : (
            <LandingPage />
          )
        }
      />
      
      {/* Auth routes - only for regular users */}
      <Route
        path="/sign-in"
        element={
          <AuthRoute>
            <BertieSignIn />
          </AuthRoute>
        }
      />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      
      {/* User dashboard routes */}
      <Route
        path="/dashboard/*"
        element={
          <ProtectedRoute>
            <UserApp />
          </ProtectedRoute>
        }
      />
      
      {/* Catch-all route */}
      <Route
        path="*"
        element={
          isDeveloper ? (
            <Navigate to="/admin/dashboard" />
          ) : user ? (
            <Navigate to="/dashboard" />
          ) : (
            <Navigate to="/" />
          )
        }
      />
    </Routes>
  )
} 