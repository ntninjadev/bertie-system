import React from 'react';
import { Search, Plus, Edit2, Trash2, Upload } from 'lucide-react';
import TenantNavigation from './TenantNavigation';

interface TenantToolsProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

const workflows = [
  {
    id: 1,
    name: 'Sales Pipeline Generator',
    description: 'Create custom sales funnels',
    category: 'Sales',
    mindpalId: 'MP-54321',
    color: 'bg-blue-500',
  },
  {
    id: 2,
    name: 'Content Calendar',
    description: 'Plan content marketing strategy',
    category: 'Marketing',
    mindpalId: 'MP-98765',
    color: 'bg-red-500',
  },
  {
    id: 3,
    name: 'Budget Planner',
    description: 'Create financial plans',
    category: 'Finance',
    mindpalId: 'MP-13579',
    color: 'bg-green-500',
  },
  {
    id: 4,
    name: 'Interview Guide',
    description: 'Create structured interviews',
    category: 'HR',
    mindpalId: 'MP-24680',
    color: 'bg-purple-500',
  },
];

const colorOptions = [
  { color: 'bg-blue-500', selected: true },
  { color: 'bg-red-500', selected: false },
  { color: 'bg-green-500', selected: false },
  { color: 'bg-purple-500', selected: false },
  { color: 'bg-amber-500', selected: false },
  { color: 'bg-teal-500', selected: false },
];

const TenantTools: React.FC<TenantToolsProps> = ({ currentTab, onTabChange }) => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page Header */}
      <div className="bg-slate-800 h-16 flex items-center px-8">
        <h1 className="text-xl font-semibold text-white">Tenant Tools: Acme Inc</h1>
      </div>

      {/* Tab Navigation */}
      <TenantNavigation currentTab={currentTab} onTabChange={onTabChange} />

      {/* Content Area */}
      <div className="p-8">
        <div className="max-w-6xl mx-auto bg-white rounded-lg border border-slate-200">
          {/* Header Section */}
          <div className="p-6 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-slate-900">AI Workflows</h2>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Plus size={20} />
              Add Workflow
            </button>
          </div>

          {/* Search Bar */}
          <div className="px-6 pb-6">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search workflows..."
                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
          </div>

          {/* Workflows Table */}
          <div className="px-6">
            <table className="w-full">
              <thead>
                <tr className="border-y border-slate-200 bg-slate-50 text-left">
                  <th className="py-3 px-4 text-slate-600 font-medium">Workflow Name</th>
                  <th className="py-3 px-4 text-slate-600 font-medium">Category</th>
                  <th className="py-3 px-4 text-slate-600 font-medium">MindPal ID</th>
                  <th className="py-3 px-4 text-slate-600 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {workflows.map((workflow) => (
                  <tr key={workflow.id} className="border-b border-slate-200 hover:bg-slate-50">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg ${workflow.color} flex items-center justify-center`} />
                        <div>
                          <div className="font-medium text-slate-900">{workflow.name}</div>
                          <div className="text-sm text-slate-500">{workflow.description}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-slate-600">{workflow.category}</td>
                    <td className="py-4 px-4 text-slate-600">{workflow.mindpalId}</td>
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
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Add Workflow</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  {/* Workflow Name */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Workflow Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter workflow name"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Category
                    </label>
                    <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20">
                      <option>Select category</option>
                      <option>Marketing</option>
                      <option>Sales</option>
                      <option>Finance</option>
                      <option>HR</option>
                    </select>
                  </div>

                  {/* MindPal Integration */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      MindPal Integration
                    </label>
                    <input
                      type="text"
                      placeholder="Enter MindPal ID"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>

                  {/* Display Order */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Display Order
                    </label>
                    <input
                      type="number"
                      defaultValue="1"
                      className="w-32 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Icon Color */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Icon Color
                    </label>
                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                      <div className="flex items-center gap-4">
                        {colorOptions.map((option, index) => (
                          <button
                            key={index}
                            className={`w-10 h-10 rounded-full ${option.color} ${
                              option.selected ? 'ring-2 ring-offset-2 ring-blue-600' : ''
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Store Outputs Option */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Output Storage
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="w-5 h-5 rounded text-blue-600 focus:ring-blue-500/20"
                        />
                        <span className="text-slate-900">Store outputs in Repository</span>
                      </label>
                      <p className="text-sm text-slate-500 ml-7">
                        Allow users to save workflow results to their repository
                      </p>
                    </div>
                  </div>

                  {/* Tutorial Video Upload */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Tutorial Video Upload (optional)
                    </label>
                    <div className="border-2 border-dashed border-slate-300 rounded-lg p-6">
                      <div className="flex flex-col items-center">
                        <Upload className="text-slate-400 mb-2" size={32} />
                        <p className="text-sm text-slate-600 mb-2">
                          Upload Video (MP4)
                        </p>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                          Browse Files
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Full Width Fields */}
                <div className="col-span-2 space-y-6">
                  {/* Description */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Description
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Enter a detailed explanation of this workflow and how to use it..."
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>

                  {/* Tutorial Video Description */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Tutorial Video Description (optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Brief description of what the tutorial covers"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>

                  {/* iFrame Embed Code */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      iFrame Embed Code
                    </label>
                    <div className="border border-slate-300 rounded-lg overflow-hidden">
                      <div className="bg-slate-50 px-3 py-2 border-b border-slate-300 text-sm text-slate-600">
                        HTML Embed Code
                      </div>
                      <textarea
                        rows={3}
                        defaultValue="<iframe src='https://mindpal.ai/embed/tool/ID' width='100%' height='600'></iframe>"
                        className="w-full px-3 py-2 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex justify-end gap-3 mt-8">
                <button className="px-6 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
                  Cancel
                </button>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Save Workflow
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantTools;