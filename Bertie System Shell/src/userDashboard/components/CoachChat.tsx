import React, { useState } from 'react';
import { ArrowLeft, FolderGit2, Play } from 'lucide-react';
import SaveRepositoryModal from './SaveRepositoryModal';
import ExitWarningModal from './ExitWarningModal';

interface CoachChatProps {
  onBack: () => void;
  coach: {
    name: string;
    description: string;
    initials: string;
  };
}

const CoachChat = ({ onBack, coach }: CoachChatProps) => {
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);

  const handleBackClick = () => {
    setShowExitModal(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="p-8">
        {/* Header with back button, title and save button */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={handleBackClick}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 bg-white rounded-lg border border-border hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft size={20} />
            Back
          </button>
          
          <h1 className="text-2xl font-semibold">Chat with {coach.name}</h1>
          
          <button 
            onClick={() => setShowSaveModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary-dark transition-colors"
          >
            <FolderGit2 size={20} />
            Save to Repository
          </button>
        </div>

        {/* Coach info card */}
        <div className="bg-white rounded-lg border border-border p-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
              <span className="text-xl font-bold text-secondary">{coach.initials}</span>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-1">{coach.name}</h2>
              <p className="text-gray-600">{coach.description}</p>
            </div>
          </div>
        </div>

        {/* Tutorial video section */}
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
                    How to Get the Most from Your {coach.name}
                  </h3>
                  <p className="text-gray-600">
                    Watch this quick tutorial to learn how to effectively communicate your needs
                    and get the most valuable insights from your {coach.name} expert assistant.
                  </p>
                </div>
                <span className="text-sm text-gray-400 italic">Optional Tutorial</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chat interface container */}
        <div className="bg-white rounded-lg border-2 border-border h-[600px] relative">
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            <div className="text-center">
              <p className="text-xl font-semibold mb-2">MindPal iframe</p>
              <p className="text-sm">(Embedded chat interface will appear here)</p>
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
            content="Marketing Guru: Here are some key strategies for improving your digital presence and building a stronger brand identity..."
          />
        )}

        {/* Exit Warning Modal */}
        {showExitModal && (
          <ExitWarningModal
            onClose={() => setShowExitModal(false)}
            onExit={onBack}
          />
        )}
      </div>
    </div>
  );
};

export default CoachChat;