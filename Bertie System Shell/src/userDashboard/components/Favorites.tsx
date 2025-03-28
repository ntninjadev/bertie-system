import React from 'react';
import { Search, LayoutGrid, Users, BookOpen, PenTool, Heart } from 'lucide-react';

const categories = ['All Items', 'Resources', 'Tools', 'Coaches'];

const favoriteItems = [
  {
    id: 1,
    name: 'Marketing Strategy Chat',
    type: 'Coach',
    category: 'Marketing',
    preview: {
      initials: 'MK',
      color: 'emerald',
    },
    lastUsed: '2 days ago',
  },
  {
    id: 2,
    name: 'Digital Marketing Mastery',
    type: 'Resource',
    category: 'Course',
    preview: {
      type: 'course',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    },
    lastUsed: 'yesterday',
  },
  {
    id: 3,
    name: 'SEO Analyzer',
    type: 'Tool',
    category: 'Analytics',
    preview: {
      type: 'tool',
      icon: '🔍',
    },
    lastUsed: '3 hours ago',
  },
  {
    id: 4,
    name: '2025 Marketing Guide',
    type: 'Resource',
    category: 'PDF',
    preview: {
      type: 'pdf',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80',
    },
    lastUsed: 'today',
  },
  {
    id: 5,
    name: 'HR Policy Discussion',
    type: 'Coach',
    category: 'HR',
    preview: {
      initials: 'HR',
      color: 'purple',
    },
    lastUsed: '1 week ago',
  },
  {
    id: 6,
    name: 'ROI Calculator',
    type: 'Tool',
    category: 'Finance',
    preview: {
      type: 'tool',
      icon: '📊',
    },
    lastUsed: '2 weeks ago',
  },
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'Coach':
      return <Users className="w-4 h-4" />;
    case 'Resource':
      return <BookOpen className="w-4 h-4" />;
    case 'Tool':
      return <PenTool className="w-4 h-4" />;
    default:
      return null;
  }
};

const getTypeStyles = (type: string) => {
  switch (type) {
    case 'Coach':
      return 'text-amber-600 bg-amber-50';
    case 'Resource':
      return 'text-blue-600 bg-blue-50';
    case 'Tool':
      return 'text-emerald-600 bg-emerald-50';
    default:
      return 'text-gray-600 bg-gray-50';
  }
};

const getPreviewContent = (preview: any) => {
  if (preview.initials) {
    const colorClasses = {
      emerald: 'bg-emerald-100 text-emerald-600',
      purple: 'bg-purple-100 text-purple-600',
    }[preview.color];

    return (
      <div className="flex flex-col gap-3">
        <div className={`w-12 h-12 rounded-full ${colorClasses} flex items-center justify-center`}>
          <span className="text-lg font-bold">{preview.initials}</span>
        </div>
        <div className="space-y-2">
          <div className="h-2 bg-gray-200 rounded w-3/4"></div>
          <div className="h-2 bg-gray-200 rounded w-1/2"></div>
          <div className="h-2 bg-gray-200 rounded w-2/3"></div>
        </div>
      </div>
    );
  }

  if (preview.type === 'tool') {
    return (
      <div className="text-4xl flex items-center justify-center h-full">
        {preview.icon}
      </div>
    );
  }

  if (preview.type === 'course' || preview.type === 'pdf') {
    return (
      <img
        src={preview.image}
        alt=""
        className="w-full h-full object-cover rounded-lg"
      />
    );
  }

  return null;
};

const Favorites = () => {
  return (
    <div className="p-8 bg-background min-h-screen">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Favorites</h1>
        <p className="text-gray-600">Quick access to your saved items</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg border border-border p-4 mb-8">
        <div className="flex items-center justify-between">
          <div className="relative flex-1 max-w-2xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search favorites..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary/20"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 text-gray-600 bg-gray-50 rounded-lg border border-border hover:bg-gray-100 transition-colors">
            <LayoutGrid size={20} />
            Grid View
          </button>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 mt-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${category === 'All Items' 
                  ? 'bg-secondary text-white' 
                  : 'bg-white text-gray-600 hover:bg-secondary/10'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Favorites Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favoriteItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg border border-border hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              {/* Preview Area */}
              <div className="aspect-[3/2] bg-gray-50 rounded-lg mb-4 p-6">
                {getPreviewContent(item.preview)}
              </div>

              {/* Item Info */}
              <div>
                <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                <div className="flex items-center justify-between">
                  <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm ${getTypeStyles(item.type)}`}>
                    {getTypeIcon(item.type)}
                    <span>{item.type}</span>
                  </div>
                  <button className="text-gray-400 hover:text-primary transition-colors">
                    <Heart size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;