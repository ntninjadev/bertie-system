import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import CreateThreadModal from './CreateThreadModal';

interface RepositoryProps {
  onThreadSelect: () => void;
}

const threads = [
  {
    id: 1,
    name: 'Marketing Strategy',
    description: 'Notes on brand positioning and digital marketing campaigns',
    itemCount: 5,
    updatedAt: '2 days ago',
  },
  {
    id: 2,
    name: 'HR Policy Updates',
    description: 'Discussions on new remote work policies',
    itemCount: 3,
    updatedAt: 'yesterday',
  },
  {
    id: 3,
    name: 'Financial Planning',
    description: 'Budget forecasts and investment recommendations',
    itemCount: 7,
    updatedAt: '3 hours ago',
  },
  {
    id: 4,
    name: 'Product Development Ideas',
    description: 'Notes from brainstorming session with tech consultant',
    itemCount: 2,
    updatedAt: 'today',
  },
];

const Repository = ({ onThreadSelect }: RepositoryProps) => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <div className="p-8 bg-background min-h-screen">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Repository</h1>
        <p className="text-gray-600">
          Save and organize conversations, resources, and important information
        </p>
      </div>

      {/* Search and Create Section */}
      <div className="bg-white rounded-lg border border-border p-4 mb-8 flex items-center justify-between">
        <div className="relative flex-1 max-w-2xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search threads..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary/20"
          />
        </div>
        <button 
          onClick={() => setShowCreateModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary-dark transition-colors"
        >
          <Plus size={20} />
          Create Thread
        </button>
      </div>

      {/* Recent Threads Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Threads</h2>
        <div className="space-y-4">
          {threads.map((thread) => (
            <div
              key={thread.id}
              className="bg-white rounded-lg border border-border p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-1">{thread.name}</h3>
                  <p className="text-gray-600">
                    {thread.itemCount} items - {thread.description}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-400">
                    Updated {thread.updatedAt}
                  </span>
                  <button 
                    onClick={onThreadSelect}
                    className="px-6 py-2 text-secondary bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors"
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Create Thread Modal */}
      {showCreateModal && (
        <CreateThreadModal
          onClose={() => setShowCreateModal(false)}
          onSave={() => {
            // Handle save logic here
            setShowCreateModal(false);
          }}
        />
      )}
    </div>
  );
};

export default Repository;