import React from 'react';
import { Search, Plus, Edit2, Eye } from 'lucide-react';
import TenantNavigation from './TenantNavigation';

interface TenantUsersProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@acmeinc.com',
    joinedDate: '2025-03-15',
    status: 'active',
    initials: 'JD',
    color: 'bg-blue-500',
  },
  {
    id: 2,
    name: 'Sarah Miller',
    email: 'sarah.m@acmeinc.com',
    joinedDate: '2025-03-10',
    status: 'inactive',
    initials: 'SM',
    color: 'bg-red-500',
  },
  {
    id: 3,
    name: 'Robert Johnson',
    email: 'robert.j@acmeinc.com',
    joinedDate: '2025-03-05',
    status: 'active',
    initials: 'RJ',
    color: 'bg-green-500',
  },
  {
    id: 4,
    name: 'Emma Wilson',
    email: 'emma.w@acmeinc.com',
    joinedDate: '2025-03-01',
    status: 'pending',
    initials: 'EW',
    color: 'bg-amber-500',
  },
];

const getStatusStyles = (status: string) => {
  switch (status) {
    case 'active':
      return 'text-emerald-700 bg-emerald-50 border-emerald-100';
    case 'pending':
      return 'text-amber-700 bg-amber-50 border-amber-100';
    case 'inactive':
      return 'text-red-700 bg-red-50 border-red-100';
    default:
      return 'text-slate-700 bg-slate-50 border-slate-100';
  }
};

const TenantUsers: React.FC<TenantUsersProps> = ({ currentTab, onTabChange }) => {
  return (
    <div className="min-h-screen bg-slate-50">
      <TenantNavigation currentTab={currentTab} onTabChange={onTabChange} />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-900">User Management</h2>
        <div className="max-w-6xl mx-auto bg-white rounded-lg border border-slate-200">
          {/* Header Section */}
          <div className="p-6 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-slate-900">Tenant Users</h2>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Plus size={20} />
              Add User
            </button>
          </div>

          {/* Search Bar */}
          <div className="px-6 pb-6">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search users..."
                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
          </div>

          {/* Users Table */}
          <div className="px-6">
            <table className="w-full">
              <thead>
                <tr className="border-y border-slate-200 bg-slate-50 text-left">
                  <th className="py-3 px-4 text-slate-600 font-medium">Name</th>
                  <th className="py-3 px-4 text-slate-600 font-medium">Email</th>
                  <th className="py-3 px-4 text-slate-600 font-medium">Joined Date</th>
                  <th className="py-3 px-4 text-slate-600 font-medium">Status</th>
                  <th className="py-3 px-4 text-slate-600 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b border-slate-200 hover:bg-slate-50">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full ${user.color} flex items-center justify-center text-white font-medium`}>
                          {user.initials}
                        </div>
                        <div className="font-medium text-slate-900">{user.name}</div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-slate-600">{user.email}</td>
                    <td className="py-4 px-4 text-slate-600">{user.joinedDate}</td>
                    <td className="py-4 px-4">
                      <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium border ${getStatusStyles(user.status)}`}>
                        {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                          <Edit2 size={18} />
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
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Add User</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter user's full name"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter email address"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Password
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="password"
                        value="••••••••••••"
                        className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      />
                      <button className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-2">
                        <Eye size={18} />
                        Show
                      </button>
                    </div>
                  </div>

                  {/* Status */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Status
                    </label>
                    <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20">
                      <option>Active</option>
                      <option>Pending</option>
                      <option>Inactive</option>
                    </select>
                  </div>

                  {/* User Access Level */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      User Access Level
                    </label>
                    <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20">
                      <option>Standard User</option>
                      <option>Admin</option>
                      <option>Limited Access</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Send Welcome Email */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email Notification
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="w-5 h-5 rounded text-blue-600 focus:ring-blue-500/20"
                        />
                        <span className="text-slate-900">Send welcome email</span>
                      </label>
                      <p className="text-sm text-slate-500 ml-7">
                        User will receive instructions to set up their account
                      </p>
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
                  Save User
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantUsers;