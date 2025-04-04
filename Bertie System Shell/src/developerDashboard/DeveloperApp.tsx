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

const DeveloperApp = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [currentTenantTab, setCurrentTenantTab] = useState('general');
  const [isCreatingTenant, setIsCreatingTenant] = useState(false);

  const handleCreateTenant = () => {
    setIsCreatingTenant(true);
  };

  const handleBackFromCreate = () => {
    setIsCreatingTenant(false);
  };

  const handleTenantTabChange = (tab: string) => {
    setCurrentTenantTab(tab);
  };

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    // Reset tenant tab to general when switching to tenants page
    if (page === 'tenants') {
      setCurrentTenantTab('general');
    }
  };

  if (isCreatingTenant) {
    return <CreateTenant onBack={handleBackFromCreate} />;
  }

  const renderTenantContent = () => {
    const props = {
      currentTab: currentTenantTab,
      onTabChange: handleTenantTabChange,
    };

    switch (currentTenantTab) {
      case 'branding':
        return <TenantBranding {...props} />;
      case 'coaches':
        return <TenantCoaches {...props} />;
      case 'tools':
        return <TenantTools {...props} />;
      case 'resources':
        return <TenantResources {...props} />;
      case 'users':
        return <TenantUsers {...props} />;
      default:
        return <TenantSettings {...props} />;
    }
  };

  const renderContent = () => {
    try {
      switch (currentPage) {
        case 'dashboard':
          return <DeveloperDashboard onCreateTenant={handleCreateTenant} />;
        case 'analytics':
          return <AnalyticsDashboard />;
        case 'settings':
          return <SystemSettings />;
        case 'tenants':
          return renderTenantContent();
        default:
          return <DeveloperDashboard onCreateTenant={handleCreateTenant} />;
      }
    } catch (error) {
      console.error('Error rendering content:', error);
      return (
        <div className="p-6 text-red-600">
          An error occurred while rendering the content. Please try refreshing the page.
        </div>
      );
    }
  };

  return (
    <div className="flex h-screen">
      <DeveloperSidebar
        currentPage={currentPage}
        onPageChange={handlePageChange}
        onCreateTenant={handleCreateTenant}
      />
      <div className="flex-1 overflow-auto">
        {currentPage !== 'tenants' && <DeveloperHeader />}
        {renderContent()}
      </div>
    </div>
  );
};

export default DeveloperApp;