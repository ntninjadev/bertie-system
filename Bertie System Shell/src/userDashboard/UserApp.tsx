import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Coaches from './components/Coaches';
import CoachChat from './components/CoachChat';
import Repository from './components/Repository';
import ThreadDetail from './components/ThreadDetail';
import Tools from './components/Tools';
import Resources from './components/Resources';
import Favorites from './components/Favorites';

const UserApp = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [selectedCoach, setSelectedCoach] = useState<{
    name: string;
    description: string;
    initials: string;
  } | null>(null);
  const [selectedThread, setSelectedThread] = useState<boolean>(false);

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
    <div className="flex h-screen bg-gray-100">
      <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserApp; 