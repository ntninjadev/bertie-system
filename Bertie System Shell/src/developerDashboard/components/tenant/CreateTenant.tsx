import React from 'react';
import { ArrowLeft, Upload } from 'lucide-react';

const CreateTenant = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page Header */}
      <div className="bg-slate-800 h-16 flex items-center px-8">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Dashboard
          </button>
          <h1 className="text-xl font-semibold text-white">Create New Tenant</h1>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg border border-slate-200">
          {/* Basic Information */}
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">Basic Information</h2>
            <div className="space-y-6">
              {/* Tenant Name */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Tenant Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter tenant name"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* Domain Name */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Domain Name
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Enter domain name"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                  <span className="text-slate-500">.bertie.ai</span>
                </div>
                <p className="mt-1 text-sm text-slate-500">
                  Leave blank to use the default subdomain
                </p>
              </div>

              {/* Contact Email */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Contact Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter contact email"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
            </div>
          </div>

          {/* Tenant Details */}
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">Tenant Details</h2>
            <div className="space-y-6">
              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Tenant Description
                </label>
                <textarea
                  rows={4}
                  placeholder="Enter a brief description of the tenant's expertise and focus areas..."
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* Category/Industry */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Primary Category/Industry
                </label>
                <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20">
                  <option value="">Select category</option>
                  <option value="technology">Technology</option>
                  <option value="finance">Finance</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                  <option value="retail">Retail</option>
                  <option value="manufacturing">Manufacturing</option>
                </select>
              </div>
            </div>
          </div>

          {/* Initial Setup */}
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Initial Setup</h2>
            <p className="text-sm text-slate-500 mb-6">
              These settings can be changed later in the tenant management dashboard
            </p>

            <div className="space-y-6">
              {/* Branding Colors */}
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Primary Color
                  </label>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-600" />
                    <input
                      type="text"
                      defaultValue="#4A7AFF"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Secondary Color
                  </label>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-500" />
                    <input
                      type="text"
                      defaultValue="#FF9900"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Accent Color
                  </label>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500" />
                    <input
                      type="text"
                      defaultValue="#34A853"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                </div>
              </div>

              {/* Logo Upload */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Logo Upload
                </label>
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-6">
                  <div className="flex flex-col items-center">
                    <div className="w-48 h-24 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                      <Upload className="text-slate-400" size={32} />
                    </div>
                    <p className="text-sm text-slate-600 mb-2">
                      Upload your logo (PNG or SVG, max 2MB)
                    </p>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Browse Files
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="p-6 bg-slate-50 flex items-center justify-end gap-3">
            <button
              onClick={onBack}
              className="px-6 py-2 border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors"
            >
              Cancel
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Create Tenant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTenant;