import React, { useState } from 'react';
import { Search, Plus, Edit2, Trash2, Upload, FileText, Video, BookOpen, File } from 'lucide-react';
import CourseCreator from './CourseCreator';
import TenantNavigation from './TenantNavigation';

const resources = [
  {
    id: 1,
    name: 'Sales Brochure',
    type: 'PDF',
    addedDate: '2025-03-15',
    size: '2.4 MB',
    icon: <FileText className="w-4 h-4" />,
    color: 'bg-red-500',
  },
  {
    id: 2,
    name: 'Product Tutorial',
    type: 'Video',
    addedDate: '2025-03-10',
    size: '45 MB',
    icon: <Video className="w-4 h-4" />,
    color: 'bg-blue-500',
  },
  {
    id: 3,
    name: 'Marketing Fundamentals',
    type: 'Course',
    addedDate: '2025-03-05',
    size: '320 MB',
    icon: <BookOpen className="w-4 h-4" />,
    color: 'bg-green-500',
  },
  {
    id: 4,
    name: 'Brand Guidelines',
    type: 'Other',
    addedDate: '2025-02-28',
    size: '5.8 MB',
    icon: <File className="w-4 h-4" />,
    color: 'bg-purple-500',
  },
];

interface TenantResourcesProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

const TenantResources: React.FC<TenantResourcesProps> = ({ currentTab, onTabChange }) => {
  const [resourceType, setResourceType] = useState('standard');
  const [selectedTab, setSelectedTab] = useState('all');

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page Header */}
      <div className="bg-slate-800 h-16 flex items-center px-8">
        <h1 className="text-xl font-semibold text-white">Tenant Resources: Acme Inc</h1>
      </div>

      {/* Tab Navigation */}
      <TenantNavigation currentTab={currentTab} onTabChange={onTabChange} />

      {/* Resource Type Tabs */}
      <div className="bg-white border-b border-slate-200">
        <div className="px-8 flex">
          {['all', 'pdfs', 'courses', 'videos', 'other'].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-6 py-3 text-sm font-medium transition-colors ${
                selectedTab === tab
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-8">
        <div className="max-w-6xl mx-auto bg-white rounded-lg border border-slate-200">
          {/* Header Section */}
          <div className="p-6 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-slate-900">Tenant Resources</h2>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Plus size={20} />
              Add Resource
            </button>
          </div>

          {/* Search Bar */}
          <div className="px-6 pb-6">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search resources..."
                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
          </div>

          {/* Resources Table */}
          <div className="px-6">
            <table className="w-full">
              <thead>
                <tr className="border-y border-slate-200 bg-slate-50 text-left">
                  <th className="py-3 px-4 text-slate-600 font-medium">Resource Name</th>
                  <th className="py-3 px-4 text-slate-600 font-medium">Type</th>
                  <th className="py-3 px-4 text-slate-600 font-medium">Added Date</th>
                  <th className="py-3 px-4 text-slate-600 font-medium">Size</th>
                  <th className="py-3 px-4 text-slate-600 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {resources.map((resource) => (
                  <tr key={resource.id} className="border-b border-slate-200 hover:bg-slate-50">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg ${resource.color} text-white flex items-center justify-center`}>
                          {resource.icon}
                        </div>
                        <div className="font-medium text-slate-900">{resource.name}</div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-slate-600">{resource.type}</td>
                    <td className="py-4 px-4 text-slate-600">{resource.addedDate}</td>
                    <td className="py-4 px-4 text-slate-600">{resource.size}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                          <Edit2 size={18} />
                        </button>
                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="p-6 flex justify-center">
            <div className="flex items-center gap-1">
              <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 text-slate-600 hover:bg-slate-50">
                «
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded bg-blue-600 text-white">
                1
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 text-slate-600 hover:bg-slate-50">
                2
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 text-slate-600 hover:bg-slate-50">
                3
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 text-slate-600 hover:bg-slate-50">
                4
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 text-slate-600 hover:bg-slate-50">
                »
              </button>
            </div>
          </div>

          {/* Add/Edit Form */}
          <div className="border-t border-slate-200">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-slate-900">Add Resource</h3>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setResourceType('standard')}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      resourceType === 'standard'
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Standard Resource
                  </button>
                  <button
                    onClick={() => setResourceType('course')}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      resourceType === 'course'
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Course
                  </button>
                </div>
              </div>

              {resourceType === 'course' ? (
                <CourseCreator />
              ) : (
                // Standard Resource Form
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-6">
                      {/* Resource Name */}
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Resource Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter resource name"
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                        />
                      </div>

                      {/* Resource Type */}
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Resource Type
                        </label>
                        <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20">
                          <option>PDF</option>
                          <option>Video</option>
                          <option>Other</option>
                        </select>
                      </div>

                      {/* Description */}
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Description
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Enter a description of this resource..."
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                        />
                      </div>
                    </div>

                    <div className="space-y-6">
                      {/* Thumbnail Upload */}
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Thumbnail Upload
                        </label>
                        <div className="border-2 border-dashed border-slate-300 rounded-lg p-6">
                          <div className="flex flex-col items-center">
                            <Upload className="text-slate-400 mb-2" size={32} />
                            <p className="text-sm text-slate-600 mb-2">
                              Upload Thumbnail
                            </p>
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                              Browse Files
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* File Upload */}
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          File Upload
                        </label>
                        <div className="border-2 border-dashed border-slate-300 rounded-lg p-6">
                          <div className="flex flex-col items-center">
                            <Upload className="text-slate-400 mb-2" size={32} />
                            <p className="text-sm text-slate-600 mb-2">
                              Drag and drop file here or click to browse
                            </p>
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                              Browse Files
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Featured Resource */}
                  <div>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="w-5 h-5 rounded text-blue-600 focus:ring-blue-500/20"
                      />
                      <span className="text-slate-900">Display on home page as featured resource</span>
                    </label>
                  </div>

                  {/* Visibility Settings */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Visibility Settings
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="visibility"
                          defaultChecked
                          className="w-5 h-5 text-blue-600 focus:ring-blue-500/20"
                        />
                        <span className="text-slate-900">All Users</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="visibility"
                          className="w-5 h-5 text-blue-600 focus:ring-blue-500/20"
                        />
                        <span className="text-slate-900">Specific Users</span>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Form Actions */}
              <div className="flex justify-end gap-3 mt-8">
                {resourceType === 'course' && (
                  <button className="px-6 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors">
                    Preview Course
                  </button>
                )}
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  {resourceType === 'course' ? 'Save Course' : 'Save Resource'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantResources;