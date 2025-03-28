import React, { useState } from 'react';
import { ArrowLeft, Heart, Play, FileText, BookOpen, Video, ChevronDown, ChevronUp, Check, Clock, BarChart as ChartBar } from 'lucide-react';
import CourseLessonView from './CourseLessonView';

interface Module {
  id: number;
  title: string;
  duration: string;
  lessonCount: number;
  expanded?: boolean;
  lessons: {
    id: number;
    title: string;
    duration: string;
    type: 'video' | 'text' | 'pdf';
    status: 'completed' | 'in-progress' | 'not-started';
  }[];
}

const modules: Module[] = [
  {
    id: 1,
    title: 'Introduction to Digital Marketing',
    duration: '45 Minutes',
    lessonCount: 3,
    expanded: true,
    lessons: [
      {
        id: 1,
        title: 'What is Digital Marketing?',
        duration: '15 min',
        type: 'video',
        status: 'completed',
      },
      {
        id: 2,
        title: 'The Digital Marketing Landscape',
        duration: '10 min',
        type: 'text',
        status: 'completed',
      },
      {
        id: 3,
        title: 'Setting Your Digital Marketing Goals',
        duration: '20 min',
        type: 'pdf',
        status: 'in-progress',
      },
    ],
  },
  {
    id: 2,
    title: 'Social Media Marketing',
    duration: '60 Minutes',
    lessonCount: 4,
    expanded: false,
    lessons: [
      {
        id: 1,
        title: 'Social Media Strategy Fundamentals',
        duration: '20 min',
        type: 'video',
        status: 'not-started',
      },
      {
        id: 2,
        title: 'Content Creation Best Practices',
        duration: '15 min',
        type: 'video',
        status: 'not-started',
      },
      {
        id: 3,
        title: 'Platform-Specific Strategies',
        duration: '15 min',
        type: 'text',
        status: 'not-started',
      },
      {
        id: 4,
        title: 'Measuring Social Media Success',
        duration: '10 min',
        type: 'pdf',
        status: 'not-started',
      },
    ],
  },
];

const CourseDetail = () => {
  const [expandedModules, setExpandedModules] = React.useState<number[]>([1]);
  const [selectedLesson, setSelectedLesson] = useState<{
    moduleId: number;
    lessonId: number;
  } | null>(null);

  const toggleModule = (moduleId: number) => {
    setExpandedModules(prev =>
      prev.includes(moduleId)
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return (
          <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center">
            <Check className="w-4 h-4" />
          </div>
        );
      case 'in-progress':
        <div className="w-6 h-6 rounded-full border-2 border-amber-500 flex items-center justify-center">
          <div className="w-2 h-2 bg-amber-500" />
        </div>;
      default:
        return <div className="w-6 h-6 rounded-full border-2 border-gray-200" />;
    }
  };

  if (selectedLesson) {
    const module = modules.find(m => m.id === selectedLesson.moduleId);
    const lesson = module?.lessons.find(l => l.id === selectedLesson.lessonId);

    if (module && lesson) {
      return (
        <CourseLessonView
          course={{
            title: 'Digital Marketing Mastery',
            module: {
              number: module.id,
              title: module.title,
              totalLessons: module.lessonCount,
            },
            lesson: {
              number: lesson.id,
              title: lesson.title,
              description: 'Learn about the current digital marketing channels and how they fit together',
              type: lesson.type,
              duration: lesson.duration,
            },
          }}
          onBack={() => setSelectedLesson(null)}
        />
      );
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <button className="flex items-center gap-2 px-4 py-2 text-gray-600 bg-white rounded-lg border border-border hover:bg-gray-50 transition-colors">
            <ArrowLeft size={20} />
            Back
          </button>
          <div className="flex-1">
            <h1 className="text-3xl font-bold">Digital Marketing Mastery</h1>
            <p className="text-gray-600 mt-1">Last updated: March 15, 2025</p>
          </div>
        </div>

        {/* Action Buttons and Progress */}
        <div className="flex items-center gap-4 mb-8">
          <button className="px-6 py-2 bg-secondary text-white rounded-lg hover:bg-secondary-dark transition-colors">
            Start Course
          </button>
          <button className="flex items-center gap-2 px-6 py-2 text-gray-600 bg-white rounded-lg border border-border hover:bg-gray-50 transition-colors">
            <Heart size={20} />
            Add to Favorites
          </button>
          <div className="flex items-center gap-3 ml-auto">
            <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="w-1/3 h-full bg-emerald-500" />
            </div>
            <span className="text-gray-600">30% Complete</span>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-lg border border-border p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">About this Course</h2>
          <p className="text-gray-600 mb-6">
            A comprehensive course covering all aspects of modern digital marketing, from social media
            strategy to SEO, content marketing, and analytics. Perfect for beginners and intermediate
            marketers looking to enhance their digital skills.
          </p>
          <div className="flex gap-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg">
              <BookOpen size={20} className="text-gray-500" />
              <span className="text-gray-600">8 Modules</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg">
              <Clock size={20} className="text-gray-500" />
              <span className="text-gray-600">6.5 Hours</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg">
              <ChartBar size={20} className="text-gray-500" />
              <span className="text-gray-600">Intermediate Level</span>
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Course Content</h2>
          <div className="space-y-4">
            {modules.map(module => (
              <div key={module.id} className="border border-border rounded-lg overflow-hidden">
                {/* Module Header */}
                <button
                  className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                  onClick={() => toggleModule(module.id)}
                >
                  <div>
                    <h3 className="text-lg font-semibold">
                      Module {module.id}: {module.title}
                    </h3>
                    <p className="text-gray-600">
                      {module.lessonCount} Lessons • {module.duration}
                    </p>
                  </div>
                  {expandedModules.includes(module.id) ? (
                    <ChevronUp size={20} className="text-gray-500" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-500" />
                  )}
                </button>

                {/* Module Lessons */}
                {expandedModules.includes(module.id) && (
                  <div className="divide-y divide-border">
                    {module.lessons.map(lesson => (
                      <div
                        key={lesson.id}
                        className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors cursor-pointer"
                        onClick={() => setSelectedLesson({ moduleId: module.id, lessonId: lesson.id })}
                      >
                        <div className="flex items-center gap-4">
                          {getStatusIcon(lesson.status)}
                          <span>
                            {module.id}.{lesson.id} {lesson.title}
                          </span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className={`flex items-center gap-1 px-2 py-1 rounded-md ${getLessonTypeColor(lesson.type)}`}>
                            {getLessonTypeIcon(lesson.type)}
                            <span className="text-sm">{lesson.duration}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;