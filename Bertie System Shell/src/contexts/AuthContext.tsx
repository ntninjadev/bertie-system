import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, AuthError } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: AuthError | null;
  isDeveloper: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updatePassword: (newPassword: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

interface RoleResponse {
  roles: {
    name: string;
  };
}

export function AuthProvider({ children }: { children: React.ReactNode }): JSX.Element {
  console.log('AuthProvider initialized');
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AuthError | null>(null);
  const [isDeveloper, setIsDeveloper] = useState(false);

  const checkUserRole = async (userId: string) => {
    try {
      console.log('AuthProvider: Checking user role in Supabase');
      const { data: roles } = await supabase
        .from('user_roles')
        .select('roles(name)')
        .eq('user_id', userId)
        .single<RoleResponse>();
      
      console.log('AuthProvider: Role data received:', roles);
      setIsDeveloper(roles?.roles?.name === 'developer');
    } catch (error) {
      console.error('Error checking user role:', error);
      setIsDeveloper(false);
    }
  };

  useEffect(() => {
    console.log('AuthProvider: Initializing auth...');
    const initializeAuth = async () => {
      try {
        console.log('AuthProvider: Setting loading to true');
        setLoading(true);
        console.log('Auth state changing', { loading, user });
        console.log('AuthProvider: Getting session from Supabase');
        const { data: { session } } = await supabase.auth.getSession();
        
        console.log('AuthProvider: Session data:', session);
        setUser(session?.user ?? null);
        if (session?.user) {
          console.log('AuthProvider: Checking user role for', session.user.id);
          await checkUserRole(session.user.id);
        }
      } catch (error) {
        console.error('Error initializing auth:', error);
      } finally {
        console.log('AuthProvider: Setting loading to false');
        setLoading(false);
        console.log('Auth initialization complete', { loading, user });
      }
    };

    initializeAuth();

    // Safety timeout to ensure we don't get stuck in loading state
    const timeoutId = setTimeout(() => {
      console.log('AuthProvider: Safety timeout triggered');
      setLoading(false);
    }, 5000);

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setLoading(true);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        await checkUserRole(session.user.id);
      } else {
        setIsDeveloper(false);
      }
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
      clearTimeout(timeoutId);
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      setError(null);
      setLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      
      if (data.user) {
        const { data: roles } = await supabase
          .from('user_roles')
          .select('roles(name)')
          .eq('user_id', data.user.id)
          .single<RoleResponse>();

        const isDev = roles?.roles?.name === 'developer';
        setIsDeveloper(isDev);

        if (window.location.pathname.startsWith('/admin') && !isDev) {
          await signOut();
          throw new Error('Access denied. Developer privileges required.');
        }
      }
    } catch (error) {
      setError(error as AuthError);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      setError(null);
      setLoading(true);
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      if (error) throw error;
      if (data.user) {
        await checkUserRole(data.user.id);
      }
    } catch (error) {
      setError(error as AuthError);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setError(null);
      setLoading(true);
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setUser(null);
      setIsDeveloper(false);
      localStorage.clear();
      sessionStorage.clear();
    } catch (error) {
      setError(error as AuthError);
      throw error;
    } finally {
      setLoading(false);
      // Add navigation to sign-in page after logout
      window.location.href = '/sign-in';
    }
  };

  const resetPassword = async (email: string) => {
    try {
      setError(null);
      setLoading(true);
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset-password`,
      });
      if (error) throw error;
    } catch (error) {
      setError(error as AuthError);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const updatePassword = async (newPassword: string) => {
    try {
      setError(null);
      setLoading(true);
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      });
      if (error) throw error;
    } catch (error) {
      setError(error as AuthError);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const value = {
    user,
    loading,
    error,
    isDeveloper,
    signIn,
    signUp,
    signOut,
    resetPassword,
    updatePassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
} 