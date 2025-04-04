import React from 'react';

interface TenantNavigationProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

const TenantNavigation = ({ currentTab, onTabChange }: TenantNavigationProps) => {
  const tabs = [
    { id: 'general', label: 'General' },
    { id: 'branding', label: 'Branding' },
    { id: 'coaches', label: 'Coaches' },
    { id: 'tools', label: 'Tools' },
    { id: 'resources', label: 'Resources' },
    { id: 'users', label: 'Users' },
  ];

  const handleTabClick = (e: React.MouseEvent<HTMLButtonElement>, tabId: string) => {
    e.preventDefault();
    onTabChange(tabId);
  };

  return (
    <div className="bg-white border-b border-slate-200">
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={(e) => handleTabClick(e, tab.id)}
            type="button"
            className={`px-8 py-4 transition-colors ${
              currentTab === tab.id
                ? 'text-blue-600 border-b-2 border-blue-600 font-medium'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TenantNavigation; 