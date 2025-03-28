import React from 'react';
import { Bell, ChevronDown } from 'lucide-react';

const DeveloperHeader = () => {
  return (
    <div className="h-16 bg-slate-800 border-b border-slate-700 flex items-center justify-between px-8">
      <h1 className="text-xl font-semibold text-white">Developer Dashboard</h1>
      
      <div className="flex items-center gap-6">
        <button className="text-slate-300 hover:text-white transition-colors">
          <Bell size={20} />
        </button>
        
        <div className="flex items-center gap-3">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=32&h=32&q=80" 
            alt="Admin" 
            className="w-8 h-8 rounded-full"
          />
          <span className="text-white">Admin</span>
          <ChevronDown size={16} className="text-slate-400" />
        </div>
      </div>
    </div>
  );
};

export default DeveloperHeader;