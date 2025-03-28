import React, { useState } from 'react';
import { ArrowLeft, Edit2, Download, Trash2 } from 'lucide-react';

interface ThreadDetailProps {
  onBack: () => void;
}

const threadItems = [
  {
    id: 1,
    source: 'Marketing Guru',
    timestamp: '2 days ago',
    content: 'Here are the key strategies we discussed for improving your digital presence:\n\n1. Focus on content that resonates with your target audience\n2. Implement a consistent posting schedule\n3. Engage actively with your community\n4. Monitor and analyze performance metrics',
  },
  {
    id: 2,
    source: 'SEO Tool Analysis',
    timestamp: 'yesterday',
    content: 'Website Analysis Results:\n- Current Domain Authority: 45\n- Mobile Optimization Score: 92/100\n- Key Improvement Areas: Meta descriptions, Image alt tags\n- Recommended Actions: Update meta descriptions for top 10 pages',
  },
  {
    id: 3,
    source: 'Marketing Guru',
    timestamp: '3 hours ago',
    content: 'Based on the SEO analysis, here are your next steps:\n\n1. Prioritize meta description updates\n2. Implement image optimization recommendations\n3. Focus on building quality backlinks\n4. Create more in-depth content for key topics',
  },
];

const ThreadDetail = ({ onBack }: ThreadDetailProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [threadTitle, setThreadTitle] = useState('Marketing Strategy');
  const [threadDescription, setThreadDescription] = useState('3 items - Notes on brand positioning and digital marketing campaigns');

  return (
    <div className="min-h-screen bg-background">
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 bg-white rounded-lg border border-border hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft size={20} />
              Back
            </button>
            <h1 
              contentEditable={isEditing}
              suppressContentEditableWarning={true}
              onBlur={(e) => setThreadTitle(e.currentTarget.textContent || '')}
              className={`text-2xl font-semibold ${isEditing ? 'border-b-2 border-secondary focus:outline-none' : ''}`}
            >
              {threadTitle}
            </h1>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsEditing(!isEditing)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                isEditing 
                  ? 'bg-secondary text-white border-secondary hover:bg-secondary-dark' 
                  : 'text-gray-600 bg-white border-border hover:bg-gray-50'
              }`}
            >
              <Edit2 size={18} />
              {isEditing ? 'Done' : 'Edit'}
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-gray-600 bg-white rounded-lg border border-border hover:bg-gray-50 transition-colors">
              <Download size={18} />
              Export
            </button>
          </div>
        </div>

        {/* Thread Info */}
        <div className="bg-white rounded-lg border border-border p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 
                contentEditable={isEditing}
                suppressContentEditableWarning={true}
                onBlur={(e) => setThreadTitle(e.currentTarget.textContent || '')}
                className={`text-xl font-semibold mb-2 ${isEditing ? 'border-b-2 border-secondary focus:outline-none' : ''}`}
              >
                {threadTitle}
              </h2>
              <p 
                contentEditable={isEditing}
                suppressContentEditableWarning={true}
                onBlur={(e) => setThreadDescription(e.currentTarget.textContent || '')}
                className={`text-gray-600 ${isEditing ? 'border-b-2 border-secondary focus:outline-none' : ''}`}
              >
                {threadDescription}
              </p>
            </div>
            <span className="text-sm text-gray-400">Last updated 3 hours ago</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {threadItems.map((item, index) => (
            <div key={item.id} className="relative pl-8 pb-8">
              {/* Timeline line */}
              <div className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-gray-200" />
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-[22px] h-[22px] rounded-full border-4 border-secondary bg-white" />
              
              {/* Content card */}
              <div className="bg-white rounded-lg border border-border p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 
                      contentEditable={isEditing}
                      suppressContentEditableWarning={true}
                      className={`font-semibold text-lg text-secondary mb-1 ${isEditing ? 'border-b-2 border-secondary focus:outline-none' : ''}`}
                    >
                      {item.source}
                    </h3>
                    <span className="text-sm text-gray-400">{item.timestamp}</span>
                  </div>
                  <button className="text-gray-400 hover:text-red-500 transition-colors">
                    <Trash2 size={18} />
                  </button>
                </div>
                <div 
                  contentEditable={isEditing}
                  suppressContentEditableWarning={true}
                  className={`whitespace-pre-wrap text-gray-600 ${isEditing ? 'border-b-2 border-secondary focus:outline-none' : ''}`}
                >
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThreadDetail;