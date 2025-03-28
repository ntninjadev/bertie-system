import React, { useState } from 'react';
import DeveloperSidebar from './components/DeveloperSidebar';
import DeveloperHeader from './components/DeveloperHeader';
import DeveloperDashboard from './components/DeveloperDashboard';
import TenantSettings from './components/tenant/TenantSettings';
import TenantBranding from './components/tenant/TenantBranding';
import TenantCoaches from './components/tenant/TenantCoaches';
import TenantTools from './components/tenant/TenantTools';
import TenantResources from './components/tenant/TenantResources';
import TenantUsers from './components/tenant/TenantUsers';
import CreateTenant from './components/tenant/CreateTenant';
import AnalyticsDashboard from './components/analytics/AnalyticsDashboard';
import SystemSettings from './components/settings/SystemSettings';
import DeveloperLogin from './components/auth/DeveloperLogin';

const DeveloperApp = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [currentTenantTab, setCurrentTenantTab] = useState('general');
  const [isCreatingTenant, setIsCreatingTenant] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleCreateTenant = () => {
    setIsCreatingTenant(true);
  };

  const handleBackFromCreate = () => {
    setIsCreatingTenant(false);
  };

  if (!isAuthenticated) {
    return <DeveloperLogin onLogin={handleLogin} />;
  }

  if (isCreatingTenant) {
    return <CreateTenant onBack={handleBackFromCreate} />;
  }

  const renderContent = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DeveloperDashboard onCreateTenant={handleCreateTenant} />;
      case 'analytics':
        return <AnalyticsDashboard />;
      case 'settings':
        return <SystemSettings />;
      case 'tenants':
        switch (currentTenantTab) {
          case 'branding':
            return <TenantBranding />;
          case 'coaches':
            return <TenantCoaches />;
          case 'tools':
            return <TenantTools />;
          case 'resources':
            return <TenantResources />;
          case 'users':
            return <TenantUsers />;
          default:
            return <TenantSettings />;
        }
      default:
        return <DeveloperDashboard onCreateTenant={handleCreateTenant} />;
    }
  };

  return (
    <div className="flex">
      <DeveloperSidebar
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        onCreateTenant={handleCreateTenant}
      />
      <div className="flex-1">
        {currentPage !== 'tenants' && <DeveloperHeader />}
        {renderContent()}
      </div>
    </div>
  );
};

export default DeveloperApp;