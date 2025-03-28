import React from 'react';
import { Download, ArrowUp, ArrowDown, Calendar } from 'lucide-react';

const tenants = [
  {
    name: 'Acme Inc',
    totalUsers: 362,
    newUsers: 24,
    growth: 7.1,
  },
  {
    name: 'Globex Corp',
    totalUsers: 287,
    newUsers: 19,
    growth: 7.0,
  },
  {
    name: 'Initech',
    totalUsers: 178,
    newUsers: 32,
    growth: 21.9,
  },
  {
    name: 'Wayne Enterprises',
    totalUsers: 247,
    newUsers: 8,
    growth: -3.4,
  },
  {
    name: 'Stark Industries',
    totalUsers: 174,
    newUsers: 4,
    growth: -2.1,
  },
];

const AnalyticsDashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page Header */}
      <div className="bg-slate-800 h-16 flex items-center px-8">
        <h1 className="text-xl font-semibold text-white">Analytics Dashboard</h1>
      </div>

      {/* Content Area */}
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          {/* Date Range and Download */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex bg-white rounded-lg border border-slate-200">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-l-lg">
                Last 7 days
              </button>
              <button className="px-6 py-3 text-slate-600 hover:bg-slate-50 transition-colors">
                Last 30 days
              </button>
              <button className="px-6 py-3 text-slate-600 hover:bg-slate-50 transition-colors border-l border-slate-200 rounded-r-lg">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  Custom
                </div>
              </button>
            </div>

            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Download size={20} />
              Download Data (CSV)
            </button>
          </div>

          {/* Overview Section */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Overview</h2>
            <div className="grid grid-cols-3 gap-6">
              {/* Total Users */}
              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <div className="text-sm text-slate-600 mb-2">Total Users</div>
                <div className="flex items-baseline gap-3">
                  <div className="text-3xl font-bold text-slate-900">1,248</div>
                  <div className="flex items-center text-emerald-600">
                    <ArrowUp size={18} />
                    8.2%
                  </div>
                </div>
              </div>

              {/* New Users */}
              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <div className="text-sm text-slate-600 mb-2">New Users This Period</div>
                <div className="flex items-baseline gap-3">
                  <div className="text-3xl font-bold text-slate-900">87</div>
                  <div className="flex items-center text-emerald-600">
                    <ArrowUp size={18} />
                    12.4%
                  </div>
                </div>
              </div>

              {/* Active Users */}
              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <div className="text-sm text-slate-600 mb-2">Active Users This Period</div>
                <div className="flex items-baseline gap-3">
                  <div className="text-3xl font-bold text-slate-900">684</div>
                  <div className="flex items-center text-red-600">
                    <ArrowDown size={18} />
                    3.1%
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tenant Analytics Section */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Tenant Analytics</h2>
            <div className="bg-white rounded-lg border border-slate-200">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="text-left py-3 px-6 text-sm font-medium text-slate-600">Tenant Name</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-slate-600">Total Users</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-slate-600">New Users This Period</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-slate-600">User Growth %</th>
                  </tr>
                </thead>
                <tbody>
                  {tenants.map((tenant, index) => (
                    <tr
                      key={tenant.name}
                      className={`border-b border-slate-200 ${
                        index % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                      }`}
                    >
                      <td className="py-3 px-6">{tenant.name}</td>
                      <td className="py-3 px-6">{tenant.totalUsers}</td>
                      <td className="py-3 px-6">{tenant.newUsers}</td>
                      <td className="py-3 px-6">
                        <span
                          className={`flex items-center gap-1 ${
                            tenant.growth >= 0 ? 'text-emerald-600' : 'text-red-600'
                          }`}
                        >
                          {tenant.growth >= 0 ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                          {Math.abs(tenant.growth)}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Charts Section */}
          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-4">User Metrics</h2>
            <div className="grid grid-cols-2 gap-6">
              {/* User Growth Chart */}
              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <h3 className="text-base font-medium text-slate-900 mb-6">User Growth Over Time</h3>
                <div className="h-[300px] flex items-center justify-center text-slate-400">
                  Line chart showing user growth trend will be rendered here
                </div>
              </div>

              {/* User Activity Chart */}
              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <h3 className="text-base font-medium text-slate-900 mb-6">User Activity by Tenant</h3>
                <div className="h-[300px] flex items-center justify-center text-slate-400">
                  Bar chart showing user activity by tenant will be rendered here
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;