import React, { useState } from 'react';
import { Search, Play, ArrowRight } from 'lucide-react';
import ToolInterface from './ToolInterface';

const categories = [
  'All', 'Marketing', 'SEO', 'Analytics', 'Social Media', 'Content', 'Research'
];

const tools = [
  {
    id: 1,
    name: 'SEO Analyzer',
    description: 'Comprehensive website analysis and optimization recommendations',
    category: 'SEO',
    icon: '🔍',
    hasVideo: true,
  },
  {
    id: 2,
    name: 'Content Generator',
    description: 'AI-powered content creation and optimization tool',
    category: 'Content',
    icon: '✍️',
    hasVideo: true,
  },
  {
    id: 3,
    name: 'Social Media Planner',
    description: 'Schedule and analyze your social media campaigns',
    category: 'Social Media',
    icon: '📱',
    hasVideo: false,
  },
  {
    id: 4,
    name: 'Market Research Pro',
    description: 'Analyze market trends and competitor insights',
    category: 'Research',
    icon: '📊',
    hasVideo: true,
  },
  {
    id: 5,
    name: 'Analytics Dashboard',
    description: 'Comprehensive data visualization and reporting',
    category: 'Analytics',
    icon: '📈',
    hasVideo: false,
  },
  {
    id: 6,
    name: 'Email Campaign Builder',
    description: 'Design and optimize email marketing campaigns',
    category: 'Marketing',
    icon: '📧',
    hasVideo: true,
  },
];

const Tools = () => {
  const [selectedTool, setSelectedTool] = useState<typeof tools[0] | null>(null);

  if (selectedTool) {
    return (
      <ToolInterface
        tool={selectedTool}
        onBack={() => setSelectedTool(null)}
      />
    );
  }

  return (
    <div className="p-8 bg-background min-h-screen">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Select a Tool</h1>
        <p className="text-gray-600">Choose from our collection of AI-powered tools to enhance your workflow</p>
      </div>

      {/* Video Guide Section */}
      <div className="bg-white rounded-lg border border-border p-6 mb-8">
        <div className="flex gap-8">
          {/* Video thumbnail */}
          <div className="relative w-80 aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
              alt="Tools Guide"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <button className="w-14 h-14 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-secondary-dark transition-colors">
                <Play size={24} />
              </button>
            </div>
          </div>
          
          {/* Video info */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-3">Get the Most Out of Your Tools</h2>
            <p className="text-gray-600 mb-4">
              Learn how to leverage our AI-powered tools to streamline your workflow and achieve better results. 
              This quick guide covers key features and best practices for maximum efficiency.
            </p>
            <button className="flex items-center gap-2 text-secondary hover:text-secondary-dark transition-colors">
              Watch the full guide
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center gap-4 mb-8">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search tools..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-secondary/20"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${category === 'All' 
                ? 'bg-secondary text-white' 
                : 'bg-white text-gray-600 hover:bg-secondary/10'}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <div
            key={tool.id}
            className="bg-white rounded-lg border border-border hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setSelectedTool(tool)}
          >
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">{tool.icon}</div>
                <h3 className="text-lg font-semibold">{tool.name}</h3>
              </div>
              <p className="text-gray-600 mb-4">{tool.description}</p>
              <div className="flex items-center justify-between">
                <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                  {tool.category}
                </span>
                <button className="text-secondary hover:text-secondary-dark transition-colors">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;