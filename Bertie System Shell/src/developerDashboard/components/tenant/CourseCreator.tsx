import React, { useState } from 'react';
import { Upload, Plus, Trash2, GripVertical, Video, FileText, BookOpen } from 'lucide-react';

interface Module {
  id: number;
  title: string;
  description: string;
  expanded: boolean;
  lessons: {
    id: number;
    title: string;
    type: 'video' | 'text' | 'pdf';
    duration: string;
  }[];
}

const CourseCreator = () => {
  const [modules, setModules] = useState<Module[]>([
    {
      id: 1,
      title: 'Introduction to the Course',
      description: 'Basic overview of the course topics',
      expanded: true,
      lessons: [
        {
          id: 1,
          title: 'Welcome to the Course',
          type: 'video',
          duration: '10:00',
        },
        {
          id: 2,
          title: 'Course Overview',
          type: 'text',
          duration: '15:00',
        },
      ],
    },
  ]);

  const getLessonTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Video className="w-4 h-4" />;
      case 'text':
        return <BookOpen className="w-4 h-4" />;
      case 'pdf':
        return <FileText className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getLessonTypeColor = (type: string) => {
    switch (type) {
      case 'video':
        return 'text-blue-500 bg-blue-50';
      case 'text':
        return 'text-purple-500 bg-purple-50';
      case 'pdf':
        return 'text-red-500 bg-red-50';
      default:
        return '';
    }
  };

  return (
    <div className="space-y-8">
      {/* Basic Information */}
      <div>
        <h4 className="text-lg font-semibold text-slate-900 mb-4">Basic Information</h4>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-6">
            {/* Course Name */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Course Name
              </label>
              <input
                type="text"
                placeholder="Enter course name"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            {/* Course Description */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Course Description
              </label>
              <textarea
                rows={4}
                placeholder="Enter a detailed description of this course..."
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
          </div>

          <div className="space-y-6">
            {/* Thumbnail Upload */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Thumbnail Image Upload
              </label>
              <div className="border-2 border-dashed border-slate-300 rounded-lg p-6">
                <div className="flex flex-col items-center">
                  <div className="w-48 h-32 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                    <Upload className="text-slate-400" size={32} />
                  </div>
                  <p className="text-sm text-slate-600 mb-2">
                    Recommended size: 1280x720px
                  </p>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Browse Files
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Duration */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Duration (hours)
                </label>
                <input
                  type="number"
                  defaultValue="8"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* Level */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Level
                </label>
                <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20">
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Module Management */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-semibold text-slate-900">Module Management</h4>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus size={20} />
            Add Module
          </button>
        </div>

        {/* Module List */}
        <div className="space-y-4">
          {modules.map((module) => (
            <div key={module.id} className="border border-slate-200 rounded-lg">
              {/* Module Header */}
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-t-lg">
                <button className="text-slate-400 hover:text-slate-600 transition-colors cursor-move">
                  <GripVertical size={20} />
                </button>
                <div className="flex-1">
                  <input
                    type="text"
                    value={module.title}
                    className="w-full bg-transparent font-medium text-slate-900 focus:outline-none"
                  />
                  <input
                    type="text"
                    value={module.description}
                    className="w-full bg-transparent text-sm text-slate-500 focus:outline-none"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 text-slate-600 hover:bg-white rounded-full transition-colors">
                    {module.expanded ? '▼' : '▶'}
                  </button>
                  <button className="p-2 text-red-600 hover:bg-white rounded-full transition-colors">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>

              {/* Module Content */}
              {module.expanded && (
                <div className="p-4">
                  {/* Add Lesson Button */}
                  <button className="flex items-center gap-2 px-4 py-2 text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors mb-4">
                    <Plus size={20} />
                    Add Lesson
                  </button>

                  {/* Lessons List */}
                  <div className="space-y-3">
                    {module.lessons.map((lesson) => (
                      <div
                        key={lesson.id}
                        className="flex items-center gap-4 p-3 bg-white border border-slate-200 rounded-lg"
                      >
                        <button className="text-slate-400 hover:text-slate-600 transition-colors cursor-move">
                          <GripVertical size={20} />
                        </button>
                        
                        <div className="flex-1">
                          <input
                            type="text"
                            value={lesson.title}
                            className="w-full font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 rounded px-2 py-1"
                          />
                        </div>

                        <select
                          value={lesson.type}
                          className={`px-3 py-1.5 rounded-full text-sm font-medium ${getLessonTypeColor(
                            lesson.type
                          )}`}
                        >
                          <option value="video">Video</option>
                          <option value="text">Text</option>
                          <option value="pdf">PDF</option>
                        </select>

                        <input
                          type="text"
                          value={lesson.duration}
                          className="w-24 text-center border border-slate-200 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                        />

                        <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                          {getLessonTypeIcon(lesson.type)}
                        </button>

                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-3">
        <button className="px-6 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors">
          Preview Course
        </button>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Save Course
        </button>
      </div>
    </div>
  );
};

export default CourseCreator;