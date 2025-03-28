import React from 'react';
import { Upload, Eye } from 'lucide-react';

const TenantBranding = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page Header */}
      <div className="bg-slate-800 h-16 flex items-center px-8">
        <h1 className="text-xl font-semibold text-white">Tenant Branding: Acme Inc</h1>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="flex">
          <button className="px-8 py-4 text-slate-600 hover:text-slate-900 transition-colors">
            General
          </button>
          <button className="px-8 py-4 text-blue-600 border-b-2 border-blue-600 font-medium">
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
          {/* Logo & Images */}
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-4">Logo & Images</h2>
            
            <div className="space-y-8">
              {/* Logo Upload */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Logo Upload
                </label>
                <p className="text-sm text-slate-500 mb-2">
                  Recommended size: 200 x 60px, PNG or SVG with transparent background
                </p>
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-6">
                  <div className="flex flex-col items-center">
                    <div className="w-[200px] h-[60px] bg-slate-100 rounded flex items-center justify-center mb-4">
                      <Upload className="text-slate-400" size={24} />
                    </div>
                    <p className="text-sm text-slate-600 mb-2">
                      Drag and drop logo file or
                    </p>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Browse Files
                    </button>
                  </div>
                </div>
              </div>

              {/* Favicon Upload */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Favicon Upload
                </label>
                <p className="text-sm text-slate-500 mb-2">
                  Square image, 32 x 32px, PNG format
                </p>
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-6">
                  <div className="flex flex-col items-center">
                    <div className="w-[32px] h-[32px] bg-slate-100 rounded flex items-center justify-center mb-4">
                      <Upload className="text-slate-400" size={16} />
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Browse Files
                    </button>
                  </div>
                </div>
              </div>

              {/* Hero Image Upload */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Hero Image Upload (Landing Page)
                </label>
                <p className="text-sm text-slate-500 mb-2">
                  Recommended size: 1600 x 600px, JPG or PNG format
                </p>
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-6">
                  <div className="flex flex-col items-center">
                    <div className="w-full h-[200px] bg-slate-100 rounded flex items-center justify-center mb-4">
                      <Upload className="text-slate-400" size={32} />
                    </div>
                    <p className="text-sm text-slate-600 mb-2">
                      Drag and drop hero image or
                    </p>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Browse Files
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Color Scheme */}
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-4">Color Scheme</h2>
            <div className="grid grid-cols-2 gap-6">
              {/* Primary Color */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Primary Color
                </label>
                <div className="flex">
                  <div className="w-10 h-10 rounded-l border border-r-0 border-slate-300" style={{ backgroundColor: '#4a86e8' }} />
                  <input
                    type="text"
                    defaultValue="#4a86e8"
                    className="flex-1 px-3 py-2 rounded-r border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
              </div>

              {/* Secondary Color */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Secondary Color
                </label>
                <div className="flex">
                  <div className="w-10 h-10 rounded-l border border-r-0 border-slate-300" style={{ backgroundColor: '#ff9900' }} />
                  <input
                    type="text"
                    defaultValue="#ff9900"
                    className="flex-1 px-3 py-2 rounded-r border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
              </div>

              {/* Accent Color */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Accent Color
                </label>
                <div className="flex">
                  <div className="w-10 h-10 rounded-l border border-r-0 border-slate-300" style={{ backgroundColor: '#34a853' }} />
                  <input
                    type="text"
                    defaultValue="#34a853"
                    className="flex-1 px-3 py-2 rounded-r border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
              </div>

              {/* Background Color */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Background Color
                </label>
                <div className="flex">
                  <div className="w-10 h-10 rounded-l border border-r-0 border-slate-300" style={{ backgroundColor: '#ffffff' }} />
                  <input
                    type="text"
                    defaultValue="#ffffff"
                    className="flex-1 px-3 py-2 rounded-r border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
              </div>

              {/* Text Color */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Text Color
                </label>
                <div className="flex">
                  <div className="w-10 h-10 rounded-l border border-r-0 border-slate-300" style={{ backgroundColor: '#333333' }} />
                  <input
                    type="text"
                    defaultValue="#333333"
                    className="flex-1 px-3 py-2 rounded-r border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Typography */}
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-4">Typography</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Heading Font
                </label>
                <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20">
                  <option>Montserrat</option>
                  <option>Roboto</option>
                  <option>Open Sans</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Body Font
                </label>
                <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20">
                  <option>Open Sans</option>
                  <option>Roboto</option>
                  <option>Lato</option>
                </select>
              </div>
            </div>
          </div>

          {/* Custom CSS */}
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-4">Custom CSS (Advanced)</h2>
            <div className="bg-slate-900 rounded-lg overflow-hidden">
              <div className="bg-slate-800 px-4 py-2 text-slate-400 text-sm">
                custom.css
              </div>
              <div className="p-4">
                <textarea
                  rows={8}
                  className="w-full bg-transparent text-slate-300 font-mono text-sm focus:outline-none"
                  defaultValue={`/* Add your custom CSS overrides here */
.custom-header {
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    border-bottom: 1px solid #eaeaea;
}`}
                />
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="p-6 bg-slate-50 flex justify-end gap-3">
            <button className="px-6 py-2 flex items-center gap-2 text-slate-700 bg-white rounded-lg border border-slate-300 hover:bg-slate-50 transition-colors">
              <Eye size={20} />
              Preview
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantBranding;