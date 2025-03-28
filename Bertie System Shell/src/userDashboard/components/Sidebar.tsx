import React from 'react';
import { Home, Users, PenTool as Tool, BookOpen, FolderGit2, Heart, Settings } from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Sidebar = ({ currentPage, onPageChange }: SidebarProps) => {
  return (
    <div className="w-64 bg-sidebar min-h-screen p-4 flex flex-col">
      <div className="mb-8">
        <img 
          src="https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?auto=format&fit=crop&w=150&q=80" 
          alt="Bertie Logo" 
          className="w-32"
        />
      </div>
      
      <nav className="space-y-2">
        <a 
          href="#" 
          className={`sidebar-link ${currentPage === 'dashboard' ? 'active' : ''}`}
          onClick={() => onPageChange('dashboard')}
        >
          <Home size={20} />
          Dashboard
        </a>
        <a 
          href="#" 
          className={`sidebar-link ${currentPage === 'coaches' ? 'active' : ''}`}
          onClick={() => onPageChange('coaches')}
        >
          <Users size={20} />
          Coaches
        </a>
        <a 
          href="#" 
          className={`sidebar-link ${currentPage === 'tools' ? 'active' : ''}`}
          onClick={() => onPageChange('tools')}
        >
          <Tool size={20} />
          Tools
        </a>
        <a 
          href="#" 
          className={`sidebar-link ${currentPage === 'resources' ? 'active' : ''}`}
          onClick={() => onPageChange('resources')}
        >
          <BookOpen size={20} />
          Resources
        </a>
        <a 
          href="#" 
          className={`sidebar-link ${currentPage === 'repository' ? 'active' : ''}`}
          onClick={() => onPageChange('repository')}
        >
          <FolderGit2 size={20} />
          Repository
        </a>
        <a 
          href="#" 
          className={`sidebar-link ${currentPage === 'favorites' ? 'active' : ''}`}
          onClick={() => onPageChange('favorites')}
        >
          <Heart size={20} />
          Favorites
        </a>
      </nav>

      <div className="mt-auto">
        <a href="#" className="sidebar-link">
          <Settings size={20} />
          Settings
        </a>
      </div>
    </div>
  );
};

export default Sidebar;