import React, { useState } from 'react';
import { Search, Play, FileText, BookOpen, Video, Calendar } from 'lucide-react';
import CourseDetail from './CourseDetail';

const categories = ['All Types', 'PDFs', 'Courses', 'Videos', 'Bookings'];

const featuredResources = [
  {
    id: 1,
    type: 'PDF',
    title: '2025 Marketing Strategy Guide',
    description: 'Comprehensive guide for modern marketing strategies',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    icon: <FileText className="w-6 h-6" />,
    color: 'text-red-500 bg-red-50',
  },
  {
    id: 2,
    type: 'Video',
    title: 'Leadership in Challenging Times',
    description: 'Expert insights on modern leadership approaches',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80',
    icon: <Video className="w-6 h-6" />,
    color: 'text-blue-500 bg-blue-50',
  },
];

const recentResources = [
  {
    id: 1,
    type: 'Course',
    title: 'Social Media Mastery',
    description: '5 modules',
    icon: <BookOpen className="w-5 h-5" />,
    color: 'text-emerald-500 bg-emerald-50',
  },
  {
    id: 2,
    type: 'PDF',
    title: 'HR Policy Template',
    description: '15 pages',
    icon: <FileText className="w-5 h-5" />,
    color: 'text-red-500 bg-red-50',
  },
  {
    id: 3,
    type: 'Booking',
    title: 'Strategy Session',
    description: '60 minutes',
    icon: <Calendar className="w-5 h-5" />,
    color: 'text-purple-500 bg-purple-50',
  },
  {
    id: 4,
    type: 'Video',
    title: 'Financial Planning',
    description: '25 minutes',
    icon: <Video className="w-5 h-5" />,
    color: 'text-blue-500 bg-blue-50',
  },
  {
    id: 5,
    type: 'PDF',
    title: 'Brand Style Guide',
    description: '32 pages',
    icon: <FileText className="w-5 h-5" />,
    color: 'text-red-500 bg-red-50',
  },
  {
    id: 6,
    type: 'Course',
    title: 'Digital Marketing',
    description: '8 modules',
    icon: <BookOpen className="w-5 h-5" />,
    color: 'text-emerald-500 bg-emerald-50',
  },
];

const Resources = () => {
  const [selectedResource, setSelectedResource] = useState<string | null>(null);

  if (selectedResource === 'course') {
    return <CourseDetail />;
  }

  return (
    <div className="p-8 bg-background min-h-screen">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Resources</h1>
        <p className="text-gray-600">Access our library of guides, courses, and expert sessions</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg border border-border p-4 mb-8">
        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-2xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search resources..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary/20"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 mt-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${category === 'All Types' 
                  ? 'bg-secondary text-white' 
                  : 'bg-white text-gray-600 hover:bg-secondary/10'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Resources */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Featured Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredResources.map((resource) => (
            <div
              key={resource.id}
              className="bg-white rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full ${resource.color}`}>
                    {resource.icon}
                    <span className="text-sm font-medium">{resource.type}</span>
                  </span>
                </div>
                {resource.type === 'Video' && (
                  <button className="absolute inset-0 flex items-center justify-center bg-black/30 group">
                    <div className="w-14 h-14 rounded-full bg-secondary text-white flex items-center justify-center group-hover:bg-secondary-dark transition-colors">
                      <Play size={24} />
                    </div>
                  </button>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-600">{resource.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Resources */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentResources.map((resource) => (
            <div
              key={resource.id}
              className="bg-white rounded-lg border border-border p-6 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedResource(resource.type.toLowerCase())}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${resource.color}`}>
                  {resource.icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{resource.title}</h3>
                  <p className="text-gray-600 text-sm">{resource.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;