import React from 'react';
import { ArrowLeft, ArrowRight, Play, CheckCircle } from 'lucide-react';

interface LessonViewProps {
  course: {
    title: string;
    module: {
      number: number;
      title: string;
      totalLessons: number;
    };
    lesson: {
      number: number;
      title: string;
      description: string;
      type: 'video' | 'pdf' | 'text';
      duration: string;
      content?: string;
    };
  };
  onBack: () => void;
}

const CourseLessonView = ({ course, onBack }: LessonViewProps) => {
  return (
    <div className="min-h-screen bg-background">
      <div className="p-8">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>{course.title}</span>
            <span>›</span>
            <span>Module {course.module.number}: {course.module.title}</span>
            <span>›</span>
            <span className="text-secondary">{course.lesson.number}.{course.lesson.title}</span>
          </div>
          <button
            onClick={onBack}
            className="mt-3 flex items-center gap-2 px-4 py-2 text-gray-600 bg-white rounded-lg border border-border hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Course Overview
          </button>
        </div>

        {/* Lesson Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            {course.lesson.number}. {course.lesson.title}
          </h1>
          <p className="text-gray-600">{course.lesson.description}</p>
        </div>

        {/* Content Area */}
        <div className="mb-8">
          {course.lesson.type === 'video' && (
            <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors group">
                  <Play size={36} className="text-white group-hover:scale-110 transition-transform" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/50 to-transparent">
                <div className="flex items-center justify-between px-4 h-full text-white">
                  <div className="flex items-center gap-4">
                    <button className="hover:text-white/80 transition-colors">
                      <Play size={20} />
                    </button>
                    <div className="text-sm">5:30 / 10:00</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1 text-sm bg-white/20 rounded-md hover:bg-white/30 transition-colors">
                      720p
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {course.lesson.type === 'pdf' && (
            <div className="bg-white rounded-lg border-2 border-border h-[600px] flex items-center justify-center">
              <p className="text-gray-400">PDF Viewer will be embedded here</p>
            </div>
          )}

          {course.lesson.type === 'text' && (
            <div className="bg-white rounded-lg border border-border p-8">
              <div className="prose max-w-none">
                {course.lesson.content || 'Lesson content will be displayed here'}
              </div>
            </div>
          )}
        </div>

        {/* Module Progress */}
        <div className="bg-white rounded-lg border border-border p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold">Module Progress</h2>
            <span className="text-sm text-gray-600">
              Lesson {course.lesson.number} of {course.module.totalLessons}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {Array.from({ length: course.module.totalLessons }).map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i + 1 < course.lesson.number
                    ? 'bg-emerald-500'
                    : i + 1 === course.lesson.number
                    ? 'bg-secondary'
                    : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-6 py-2 text-gray-600 bg-white rounded-lg border border-border hover:bg-gray-50 transition-colors">
              <ArrowLeft size={20} />
              Previous Lesson
            </button>
            <button className="flex items-center gap-2 px-6 py-2 bg-secondary text-white rounded-lg hover:bg-secondary-dark transition-colors">
              Next Lesson
              <ArrowRight size={20} />
            </button>
          </div>
          <button className="flex items-center gap-2 px-6 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
            <CheckCircle size={20} />
            Mark as Complete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseLessonView;