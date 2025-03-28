import React from 'react';
import { Eye, Copy, Download, Calendar, AlertCircle } from 'lucide-react';

const SystemSettings = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page Header */}
      <div className="bg-slate-800 h-16 flex items-center px-8">
        <h1 className="text-xl font-semibold text-white">System Settings</h1>
      </div>

      {/* Content Area */}
      <div className="p-8">
        <div className="max-w-6xl mx-auto bg-white rounded-lg border border-slate-200">
          {/* General Settings Section */}
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">General Settings</h2>
            
            {/* Admin Email */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Admin Email Address
              </label>
              <p className="text-sm text-slate-500 mb-2">
                Email address for system notifications and alerts
              </p>
              <input
                type="email"
                defaultValue="admin@bertie.ai"
                className="w-full max-w-xl px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            {/* Default Tenant Settings */}
            <div>
              <h3 className="text-lg font-medium text-slate-900 mb-4">Default Tenant Settings</h3>
              <p className="text-sm text-slate-500 mb-4">
                Default styling applied to new tenants
              </p>

              <div className="grid grid-cols-2 gap-8">
                {/* Colors */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Default Primary Color
                    </label>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-600" />
                      <input
                        type="text"
                        defaultValue="#4A7AFF"
                        className="w-32 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Default Secondary Color
                    </label>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-amber-500" />
                      <input
                        type="text"
                        defaultValue="#FF9900"
                        className="w-32 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Default Accent Color
                    </label>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500" />
                      <input
                        type="text"
                        defaultValue="#34A853"
                        className="w-32 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      />
                    </div>
                  </div>
                </div>

                {/* Fonts */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Default Header Font
                    </label>
                    <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20">
                      <option>Montserrat</option>
                      <option>Roboto</option>
                      <option>Inter</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Default Body Font
                    </label>
                    <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20">
                      <option>Open Sans</option>
                      <option>Roboto</option>
                      <option>Inter</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stripe Integration Section */}
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">Stripe Integration</h2>
            
            {/* Stripe API Key */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Stripe API Key
              </label>
              <p className="text-sm text-slate-500 mb-2">
                Secret key for Stripe payment processing
              </p>
              <div className="flex gap-2">
                <input
                  type="password"
                  value="sk_••••••••••••••••••••••••••••••"
                  className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  readOnly
                />
                <button className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-2">
                  <Eye size={18} />
                  Show
                </button>
              </div>
            </div>

            {/* Webhook URL */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Webhook URL
              </label>
              <p className="text-sm text-slate-500 mb-2">
                URL to configure in your Stripe dashboard
              </p>
              <div className="flex gap-2">
                <input
                  type="text"
                  value="https://api.bertie.ai/webhooks/stripe"
                  className="flex-1 px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg"
                  readOnly
                />
                <button className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-2">
                  <Copy size={18} />
                  Copy
                </button>
              </div>
            </div>

            {/* Test Mode Toggle */}
            <div>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded text-blue-600 focus:ring-blue-500/20"
                />
                <span className="text-slate-900">Enable Test Mode</span>
              </label>
              <p className="text-sm text-slate-500 mt-1 ml-7">
                Use test credentials for development and testing
              </p>
            </div>
          </div>

          {/* Email Settings Section */}
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">Email Settings</h2>
            
            {/* Email Provider Configuration */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-slate-900 mb-4">Email Provider Configuration</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      SMTP Host
                    </label>
                    <input
                      type="text"
                      defaultValue="smtp.sendgrid.net"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      SMTP Port
                    </label>
                    <input
                      type="text"
                      defaultValue="587"
                      className="w-32 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Username
                    </label>
                    <input
                      type="text"
                      defaultValue="apikey"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Password
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="password"
                        value="••••••••••••••••••••••••••••••"
                        className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                        readOnly
                      />
                      <button className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-2">
                        <Eye size={18} />
                        Show
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Templates */}
            <div>
              <h3 className="text-lg font-medium text-slate-900 mb-4">Email Templates</h3>
              <div className="flex gap-4 mb-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                  Welcome Email
                </button>
                <button className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors">
                  Password Reset
                </button>
                <button className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors">
                  Account Notification
                </button>
              </div>
              <div className="border border-slate-200 rounded-lg">
                <div className="bg-slate-50 px-4 py-2 border-b border-slate-200">
                  Template Editor
                </div>
                <div className="p-4 h-48 flex items-center justify-center text-slate-400">
                  Email template editor will be rendered here
                </div>
              </div>
            </div>
          </div>

          {/* Backup Settings Section */}
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">Backup Settings</h2>
            
            <div className="flex items-start gap-8">
              {/* Manual Backup */}
              <div>
                <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Download size={20} />
                  Manual Backup
                </button>
              </div>

              {/* Last Backup Info */}
              <div>
                <h3 className="font-medium text-slate-900 mb-1">Last Backup</h3>
                <p className="text-sm text-slate-500">March 25, 2025, 03:45 AM UTC</p>
              </div>

              {/* Schedule Settings */}
              <div>
                <h3 className="font-medium text-slate-900 mb-2">Schedule Backup</h3>
                <select className="px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20">
                  <option>Daily at midnight UTC</option>
                  <option>Weekly on Sunday</option>
                  <option>Monthly on 1st</option>
                </select>
              </div>
            </div>
          </div>

          {/* Version Information Section */}
          <div className="p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">Version Information</h2>
            
            <div className="flex items-start gap-8">
              {/* Current Version */}
              <div>
                <h3 className="font-medium text-slate-900 mb-1">Current Version</h3>
                <p className="text-lg font-semibold text-slate-900">v1.2.5</p>
              </div>

              {/* Update History */}
              <div>
                <h3 className="font-medium text-slate-900 mb-2">Update History</h3>
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="font-medium">v1.2.5</span>
                    <span className="text-slate-500"> - March 20, 2025</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">v1.2.4</span>
                    <span className="text-slate-500"> - March 15, 2025</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">v1.2.3</span>
                    <span className="text-slate-500"> - March 10, 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Save Changes Button */}
          <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex justify-end">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemSettings;