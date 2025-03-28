import React from 'react';
import { Mail, Lock } from 'lucide-react';

interface DeveloperLoginProps {
  onLogin: () => void;
}

const DeveloperLogin = ({ onLogin }: DeveloperLoginProps) => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Title */}
        <div className="mb-8 text-center">
          <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-white">B</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Developer Admin Access</h1>
          <p className="text-slate-600 mt-1">Sign in to manage your platform</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-lg border border-slate-200 p-8 shadow-sm">
          <form onSubmit={(e) => {
            e.preventDefault();
            onLogin();
          }}>
            {/* Email Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="email">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="email"
                  id="email"
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-slate-700" htmlFor="password">
                  Password
                </label>
                <a href="#" className="text-sm text-blue-600 hover:text-blue-700 transition-colors">
                  Forgot Password?
                </a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="password"
                  id="password"
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 border-slate-300 rounded text-blue-600 focus:ring-blue-500/20"
              />
              <label className="ml-2 text-sm text-slate-600" htmlFor="remember">
                Remember me on this device
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Sign In
            </button>
          </form>
        </div>

        {/* Support Link */}
        <p className="text-center mt-6 text-sm text-slate-600">
          Need help? Contact{' '}
          <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
            platform-support@bertie.ai
          </a>
        </p>
      </div>
    </div>
  );
};

export default DeveloperLogin;