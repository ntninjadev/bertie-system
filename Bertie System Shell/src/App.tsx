import React, { useState } from 'react';
import Sidebar from './userDashboard/components/Sidebar';
import Header from './userDashboard/components/Header';
import Dashboard from './userDashboard/components/Dashboard';
import Coaches from './userDashboard/components/Coaches';
import CoachChat from './userDashboard/components/CoachChat';
import Repository from './userDashboard/components/Repository';
import ThreadDetail from './userDashboard/components/ThreadDetail';
import Tools from './userDashboard/components/Tools';
import Resources from './userDashboard/components/Resources';
import Favorites from './userDashboard/components/Favorites';
import DeveloperApp from './developerDashboard/DeveloperApp';
import LandingPage from './userDashboard/components/landing/LandingPage';
import Login from './userDashboard/components/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDeveloperView, setIsDeveloperView] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [selectedCoach, setSelectedCoach] = useState<{
    name: string;
    description: string;
    initials: string;
  } | null>(null);
  const [selectedThread, setSelectedThread] = useState<boolean>(false);

  // Toggle between User and Developer views
  const toggleView = () => {
    setIsDeveloperView(!isDeveloperView);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return <LandingPage />;
  }

  if (isDeveloperView) {
    return (
      <div>
        <button
          onClick={toggleView}
          className="fixed top-4 right-4 z-50 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Switch to User View
        </button>
        <DeveloperApp />
      </div>
    );
  }

  const renderContent = () => {
    if (selectedCoach) {
      return (
        <CoachChat
          coach={selectedCoach}
          onBack={() => setSelectedCoach(null)}
        />
      );
    }

    if (currentPage === 'repository' && selectedThread) {
      return <ThreadDetail onBack={() => setSelectedThread(false)} />;
    }

    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'coaches':
        return <Coaches onSelectCoach={setSelectedCoach} />;
      case 'tools':
        return <Tools />;
      case 'resources':
        return <Resources />;
      case 'repository':
        return <Repository onThreadSelect={() => setSelectedThread(true)} />;
      case 'favorites':
        return <Favorites />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div>
      <button
        onClick={toggleView}
        className="fixed top-4 right-4 z-50 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
      >
        Switch to Developer View
      </button>
      <div className="flex">
        <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
        <main className="flex-1">
          {!selectedCoach && currentPage !== 'repository' && (
            <div className="p-8">
              <Header />
            </div>
          )}
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;