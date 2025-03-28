import React from 'react';
import { Upload } from 'lucide-react';

const TenantSettings = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page Header */}
      <div className="bg-slate-800 h-16 flex items-center px-8">
        <h1 className="text-xl font-semibold text-white">Tenant Management: Acme Inc</h1>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="flex">
          <button className="px-8 py-4 text-blue-600 border-b-2 border-blue-600 font-medium">
            General
          </button>
          <button className="px-8 py-4 text-slate-600 hover:text-slate-900 transition-colors">
            Branding
          </button>
          <button className="px-8 py-4 text-slate-600 hover:text-slate-900 transition-colors">
            Coaches
          </button>
          <button className="px-8 py-4 text-slate-600 hover:text-slate-900 transition-colors">
            Tools
          </button>
          <button className="px-8 py-4 text-slate-600 hover:text-slate-900 transition-colors">
            Resources
          </button>
          <button className="px-8 py-4 text-slate-600 hover:text-slate-900 transition-colors">
            Users
          </button>
        </div>
      </div>

      {/* Form Content */}
      <div className="p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg border border-slate-200 divide-y divide-slate-200">
          {/* Tenant Information */}
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-4">Tenant Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Tenant Name
                </label>
                <input
                  type="text"
                  defaultValue="Acme Inc"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Created Date
                </label>
                <input
                  type="text"
                  value="January 15, 2025"
                  disabled
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Status
                </label>
                <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20">
                  <option>Active</option>
                  <option>Setting Up</option>
                  <option>Suspended</option>
                </select>
              </div>
            </div>
          </div>

          {/* Domain Settings */}
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-4">Domain Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Custom Domain
                </label>
                <input
                  type="text"
                  placeholder="Enter your custom domain (e.g., knowledge.acmeinc.com)"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
              <div className="bg-slate-50 p-4 rounded-lg space-y-2">
                <p className="font-medium text-slate-700">DNS Instructions:</p>
                <p className="text-sm text-slate-600">
                  1. Add a CNAME record in your DNS settings pointing to: tenant-[id].bertie.ai
                </p>
                <p className="text-sm text-slate-600">
                  2. Wait for DNS propagation (may take up to 24 hours)
                </p>
              </div>
            </div>
          </div>

          {/* Welcome Settings */}
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-4">Welcome Settings</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Welcome Message
                </label>
                <div className="border border-slate-300 rounded-lg overflow-hidden">
                  <div className="bg-slate-50 px-3 py-2 border-b border-slate-300 flex gap-2">
                    <button className="p-1 hover:bg-slate-200 rounded">
                      <span className="font-semibold">B</span>
                    </button>
                    <button className="p-1 hover:bg-slate-200 rounded">
                      <span className="italic">I</span>
                    </button>
                    <button className="p-1 hover:bg-slate-200 rounded text-sm">
                      H1
                    </button>
                    <button className="p-1 hover:bg-slate-200 rounded text-sm">
                      H2
                    </button>
                    <div className="w-px bg-slate-300 mx-2" />
                    <button className="p-1 hover:bg-slate-200 rounded">
                      🔗
                    </button>
                  </div>
                  <textarea
                    rows={4}
                    placeholder="Enter welcome message for your users..."
                    className="w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Welcome Video Upload
                  </label>
                  <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-2">
                      <Upload size={24} />
                    </div>
                    <p className="text-sm text-slate-600">Upload Video (MP4)</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Video Thumbnail Upload
                  </label>
                  <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-2">
                      <Upload size={24} />
                    </div>
                    <p className="text-sm text-slate-600">Upload Thumbnail (PNG, JPG)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Configuration */}
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-4">Dashboard Configuration</h2>
            
            {/* Latest Items Section */}
            <div className="mb-8">
              <h3 className="font-medium text-slate-900 mb-4">Latest Items Section</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Section Title
                  </label>
                  <input
                    type="text"
                    defaultValue="Latest Content"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Number of Items to Display
                  </label>
                  <select className="w-40 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20">
                    <option>6</option>
                    <option>9</option>
                    <option>12</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Content Types to Include
                  </label>
                  <div className="space-x-6">
                    <label className="inline-flex items-center">
                      <input type="checkbox" className="w-5 h-5 rounded text-blue-600" defaultChecked />
                      <span className="ml-2">Coaches</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="checkbox" className="w-5 h-5 rounded text-blue-600" defaultChecked />
                      <span className="ml-2">Tools</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="checkbox" className="w-5 h-5 rounded text-blue-600" defaultChecked />
                      <span className="ml-2">Resources</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Recommended Items Section */}
            <div>
              <h3 className="font-medium text-slate-900 mb-4">Recommended Items Section</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Section Title
                  </label>
                  <input
                    type="text"
                    defaultValue="Recommended for You"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Select Specific Items to Recommend
                  </label>
                  <div className="border border-slate-300 rounded-lg p-4">
                    <div className="bg-slate-50 px-3 py-2 rounded-lg mb-3">
                      <input
                        type="text"
                        placeholder="Search items..."
                        className="w-full bg-transparent focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-600 border border-blue-200">
                        Marketing Expert
                        <button className="ml-2">×</button>
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-600 border border-blue-200">
                        Sales Funnel
                        <button className="ml-2">×</button>
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-600 border border-blue-200">
                        Marketing Fundamentals
                        <button className="ml-2">×</button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="p-6 bg-slate-50 flex justify-end">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantSettings;