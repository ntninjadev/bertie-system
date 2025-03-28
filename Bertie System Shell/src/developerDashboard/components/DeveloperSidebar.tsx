import React from 'react';
import { LayoutDashboard, Building as Buildings, Users, BarChart, Settings, Terminal, Plus } from 'lucide-react';

interface DeveloperSidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  onCreateTenant: () => void;
}

const DeveloperSidebar = ({ currentPage, onPageChange, onCreateTenant }: DeveloperSidebarProps) => {
  return (
    <div className="w-64 bg-slate-800 min-h-screen p-4 flex flex-col">
      {/* Logo */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">BERTIE</h1>
        <p className="text-slate-400 text-sm">Developer Portal</p>
      </div>
      
      <nav className="space-y-2">
        <a 
          href="#" 
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
            currentPage === 'dashboard' 
              ? 'bg-blue-600 text-white' 
              : 'text-slate-300 hover:bg-slate-700'
          }`}
          onClick={() => onPageChange('dashboard')}
        >
          <LayoutDashboard size={20} />
          Dashboard
        </a>
        <a 
          href="#" 
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
            currentPage === 'tenants' 
              ? 'bg-blue-600 text-white' 
              : 'text-slate-300 hover:bg-slate-700'
          }`}
          onClick={() => onPageChange('tenants')}
        >
          <Buildings size={20} />
          Tenant Management
        </a>
        <a 
          href="#" 
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
            currentPage === 'users' 
              ? 'bg-blue-600 text-white' 
              : 'text-slate-300 hover:bg-slate-700'
          }`}
          onClick={() => onPageChange('users')}
        >
          <Users size={20} />
          Users
        </a>
        <a 
          href="#" 
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
            currentPage === 'analytics' 
              ? 'bg-blue-600 text-white' 
              : 'text-slate-300 hover:bg-slate-700'
          }`}
          onClick={() => onPageChange('analytics')}
        >
          <BarChart size={20} />
          Analytics
        </a>
        <a 
          href="#" 
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
            currentPage === 'developer' 
              ? 'bg-blue-600 text-white' 
              : 'text-slate-300 hover:bg-slate-700'
          }`}
          onClick={() => onPageChange('developer')}
        >
          <Terminal size={20} />
          Developer Tools
        </a>
      </nav>

      <div className="mt-auto space-y-4">
        <a 
          href="#" 
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
            currentPage === 'settings' 
              ? 'bg-blue-600 text-white' 
              : 'text-slate-300 hover:bg-slate-700'
          }`}
          onClick={() => onPageChange('settings')}
        >
          <Settings size={20} />
          Settings
        </a>

        <button
          onClick={onCreateTenant}
          className="w-full flex items-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus size={20} />
          Create New Tenant
        </button>
      </div>
    </div>
  );
};

export default DeveloperSidebar;