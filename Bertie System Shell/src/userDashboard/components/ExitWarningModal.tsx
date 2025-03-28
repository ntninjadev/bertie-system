import React from 'react';
import { AlertTriangle, X } from 'lucide-react';

interface ExitWarningModalProps {
  onClose: () => void;
  onExit: () => void;
}

const ExitWarningModal = ({ onClose, onExit }: ExitWarningModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[500px] shadow-xl">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-t-lg border-b border-border">
          <div className="flex items-center gap-3">
            <AlertTriangle size={24} className="text-primary" />
            <h2 className="text-xl font-semibold">Before You Go</h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">You're about to leave the chat</h3>
            <p className="text-gray-600 mb-4">
              This conversation won't be automatically saved. Make sure to save any important 
              information to your repository before leaving.
            </p>
            <div className="bg-primary/10 p-4 rounded-lg">
              <p className="text-primary text-sm">
                Tip: Use the "Save to Repository" button to preserve key insights and recommendations 
                from this conversation.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-end gap-3 p-4 bg-gray-50 rounded-b-lg border-t border-border">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-secondary text-white rounded-lg hover:bg-secondary-dark transition-colors"
          >
            Return to Chat
          </button>
          <button
            onClick={onExit}
            className="px-6 py-2 border border-border rounded-lg hover:bg-gray-100 transition-colors"
          >
            Exit Anyway
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExitWarningModal;