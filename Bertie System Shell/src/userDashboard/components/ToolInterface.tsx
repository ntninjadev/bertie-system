import React, { useState } from 'react';
import { ArrowLeft, Play, FolderGit2 } from 'lucide-react';
import SaveRepositoryModal from './SaveRepositoryModal';

interface ToolInterfaceProps {
  onBack: () => void;
  tool: {
    name: string;
    description: string;
    hasVideo?: boolean;
  };
}

const ToolInterface = ({ onBack, tool }: ToolInterfaceProps) => {
  const [showSaveModal, setShowSaveModal] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <div className="p-8">
        {/* Header with back button, title and save button */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 bg-white rounded-lg border border-border hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft size={20} />
            Back
          </button>
          
          <h1 className="text-2xl font-semibold">{tool.name}</h1>
          
          <button 
            onClick={() => setShowSaveModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary-dark transition-colors"
          >
            <FolderGit2 size={20} />
            Save to Repository
          </button>
        </div>

        {/* Tool info card */}
        <div className="bg-white rounded-lg border border-border p-6 mb-8">
          <p className="text-gray-600">{tool.description}</p>
        </div>

        {/* Optional Tutorial Video Section */}
        {tool.hasVideo && (
          <div className="bg-white rounded-lg border border-border p-6 mb-8">
            <div className="flex gap-8">
              {/* Video thumbnail */}
              <div className="relative w-80 aspect-video bg-gray-100 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-14 h-14 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-secondary-dark transition-colors">
                    <Play size={24} />
                  </button>
                </div>
              </div>
              
              {/* Video info */}
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      How to Use {tool.name}
                    </h3>
                    <p className="text-gray-600">
                      Watch this quick tutorial to learn how to effectively use {tool.name} 
                      and get the most value from its features.
                    </p>
                  </div>
                  <span className="text-sm text-gray-400 italic">Optional Tutorial</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tool interface container */}
        <div className="bg-white rounded-lg border-2 border-border h-[600px] relative">
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            <div className="text-center">
              <p className="text-xl font-semibold mb-2">MindPal iframe</p>
              <p className="text-sm">(Embedded tool interface will appear here)</p>
            </div>
          </div>
        </div>

        {/* Save Repository Modal */}
        {showSaveModal && (
          <SaveRepositoryModal
            onClose={() => setShowSaveModal(false)}
            onSave={() => {
              setShowSaveModal(false);
            }}
            content={`${tool.name}: Analysis results and recommendations...`}
          />
        )}
      </div>
    </div>
  );
};

export default ToolInterface;