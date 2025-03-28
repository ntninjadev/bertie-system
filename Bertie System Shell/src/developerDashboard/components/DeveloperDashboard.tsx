import React from 'react';
import { Users, ArrowUp, Search, MoreVertical, Plus } from 'lucide-react';

interface DeveloperDashboardProps {
  onCreateTenant: () => void;
}

const tenants = [
  {
    id: 1,
    name: 'Acme Inc',
    users: 143,
    status: 'active',
  },
  {
    id: 2,
    name: 'Globex Corp',
    users: 89,
    status: 'active',
  },
  {
    id: 3,
    name: 'Initech',
    users: 112,
    status: 'setting-up',
  },
  {
    id: 4,
    name: 'Wayne Enterprises',
    users: 78,
    status: 'active',
  },
  {
    id: 5,
    name: 'Stark Industries',
    users: 146,
    status: 'active',
  },
];

const activities = [
  {
    id: 1,
    type: 'tenant-added',
    title: 'Tenant Added',
    description: 'Initech was added',
    time: '2 hours ago',
  },
  {
    id: 2,
    type: 'branding-update',
    title: 'Branding Update',
    description: 'Acme Inc updated branding',
    time: '3 hours ago',
  },
  {
    id: 3,
    type: 'workflow-added',
    title: 'Workflow Added',
    description: 'Sales Funnel added to Globex',
    time: '5 hours ago',
  },
  {
    id: 4,
    type: 'users-added',
    title: 'Users Added',
    description: '5 users added to Stark',
    time: '8 hours ago',
  },
];

const DeveloperDashboard = ({ onCreateTenant }: DeveloperDashboardProps) => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="p-8">
        {/* Metric Cards */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-600 rounded-lg p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Active Tenants</h3>
              <span className="flex items-center text-blue-100 text-sm">
                <ArrowUp size={16} className="mr-1" />
                12% this month
              </span>
            </div>
            <div className="flex items-baseline">
              <span className="text-4xl font-bold">12</span>
              <span className="ml-2 text-blue-100">Active subscriptions</span>
            </div>
          </div>

          <div className="bg-emerald-600 rounded-lg p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Total Users</h3>
              <span className="flex items-center text-emerald-100 text-sm">
                <ArrowUp size={16} className="mr-1" />
                8% this month
              </span>
            </div>
            <div className="flex items-baseline">
              <span className="text-4xl font-bold">568</span>
              <span className="ml-2 text-emerald-100">Active users</span>
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Tenant Overview Table */}
          <div className="flex-1">
            <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Tenant Overview</h2>
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search tenants..."
                        className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      />
                    </div>
                  </div>
                </div>

                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-3 text-slate-600 font-medium">Tenant Name</th>
                      <th className="text-left py-3 text-slate-600 font-medium">Users</th>
                      <th className="text-left py-3 text-slate-600 font-medium">Status</th>
                      <th className="text-right py-3 text-slate-600 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tenants.map((tenant) => (
                      <tr key={tenant.id} className="border-b border-slate-100">
                        <td className="py-4">{tenant.name}</td>
                        <td className="py-4">
                          <div className="flex items-center gap-1">
                            <Users size={16} className="text-slate-400" />
                            <span>{tenant.users}</span>
                          </div>
                        </td>
                        <td className="py-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            tenant.status === 'active'
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}>
                            {tenant.status === 'active' ? 'Active' : 'Setting Up'}
                          </span>
                        </td>
                        <td className="py-4 text-right">
                          <button className="text-slate-400 hover:text-slate-600">
                            <MoreVertical size={20} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="w-80">
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
              
              <div className="space-y-6">
                {activities.map((activity) => (
                  <div key={activity.id} className="flex gap-4">
                    <div className="relative">
                      <div className={`w-3 h-3 rounded-full ${
                        activity.type === 'tenant-added' ? 'bg-blue-500' :
                        activity.type === 'branding-update' ? 'bg-emerald-500' :
                        activity.type === 'workflow-added' ? 'bg-amber-500' :
                        'bg-purple-500'
                      }`} />
                      {activity.id !== activities.length && (
                        <div className="absolute top-4 bottom-0 left-1.5 w-px bg-slate-200" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">{activity.title}</p>
                      <p className="text-sm text-slate-600">{activity.description}</p>
                      <p className="text-xs text-slate-400 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-center gap-6">
              <button
                onClick={onCreateTenant}
                className="flex items-center gap-3 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <Plus size={20} />
                <div className="text-left">
                  <div className="font-medium">Create New Tenant</div>
                  <div className="text-sm text-blue-500">Set up a new client</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperDashboard;