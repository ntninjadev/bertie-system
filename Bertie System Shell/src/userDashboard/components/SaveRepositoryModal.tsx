import React from 'react';
import { X } from 'lucide-react';

interface SaveRepositoryModalProps {
  onClose: () => void;
  onSave: () => void;
  content: string;
}

const SaveRepositoryModal = ({ onClose, onSave, content }: SaveRepositoryModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[500px] shadow-xl">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-t-lg border-b border-border">
          <h2 className="text-xl font-semibold">Save to Repository</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {/* Select Thread Section */}
          <div className="mb-6">
            <h3 className="font-semibold mb-4">Select Thread</h3>
            
            {/* Create New Thread Option */}
            <div className="mb-4">
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  name="threadOption"
                  defaultChecked
                  className="w-4 h-4 text-secondary"
                />
                <span className="ml-2">Create new thread</span>
              </label>
              <input
                type="text"
                placeholder="Enter thread name"
                defaultValue="Marketing strategy discussion"
                className="ml-6 w-full p-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/20"
              />
            </div>

            {/* Use Existing Thread Option */}
            <div>
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  name="threadOption"
                  className="w-4 h-4 text-secondary"
                />
                <span className="ml-2">Use existing thread</span>
              </label>
              <select
                disabled
                className="ml-6 w-full p-2 border border-border rounded-lg bg-gray-50 text-gray-400 cursor-not-allowed"
              >
                <option>Select a thread...</option>
              </select>
            </div>
          </div>

          {/* Content to Save Section */}
          <div>
            <h3 className="font-semibold mb-4">Content to Save</h3>
            <textarea
              defaultValue={content || "Marketing Guru: Here are some key strategies for improving your digital presence and building a stronger brand identity..."}
              className="w-full h-24 p-3 border border-border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-secondary/20"
              readOnly
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
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default SaveRepositoryModal;