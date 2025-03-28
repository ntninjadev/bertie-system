import React from 'react';
import { X } from 'lucide-react';

interface CreateThreadModalProps {
  onClose: () => void;
  onSave: () => void;
}

const CreateThreadModal = ({ onClose, onSave }: CreateThreadModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[500px] shadow-xl">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-t-lg border-b border-border">
          <h2 className="text-xl font-semibold">Create New Thread</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {/* Thread Name */}
          <div className="mb-6">
            <label className="block font-medium mb-2" htmlFor="threadName">
              Thread Name
            </label>
            <input
              id="threadName"
              type="text"
              placeholder="Enter thread name"
              className="w-full p-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/20"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium mb-2" htmlFor="description">
              Description (optional)
            </label>
            <textarea
              id="description"
              placeholder="Enter thread description"
              className="w-full h-24 p-3 border border-border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-secondary/20"
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-end gap-3 p-4 bg-gray-50 rounded-b-lg border-t border-border">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-border rounded-lg hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            className="px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary-dark transition-colors"
          >
            Create Thread
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateThreadModal;