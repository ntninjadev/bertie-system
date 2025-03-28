import React from 'react';
import { Play } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="p-8 bg-background min-h-screen">
      <div className="welcome-card mb-8">
        <h2 className="text-lg font-medium mb-4">Today's Update</h2>
        <p className="text-gray-600">
          We've noticed you've been making great progress with your recent projects. Your team's productivity 
          has increased by 15% this week. Keep up the excellent work! Remember to check out our new AI-powered 
          tools in the Tools section.
        </p>
      </div>

      <div className="card mb-8 text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary text-white mb-4">
          <Play size={24} />
        </div>
        <h2 className="text-xl font-semibold mb-2">Welcome Video</h2>
        <p className="text-gray-600">Learn how to get started with Bertie</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-lg font-medium mb-4">Latest Items</h2>
          <div className="space-y-4">
            {['Coach Name', 'Tool Name', 'Resource Name'].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg">
                <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                  {item[0]}
                </div>
                <div>
                  <p className="font-medium">{item}</p>
                  <p className="text-sm text-gray-500">
                    Added {index === 0 ? '2 days ago' : index === 1 ? 'yesterday' : 'today'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h2 className="text-lg font-medium mb-4">Recommended</h2>
          <div className="space-y-4">
            {[
              ['Recommended Coach', 'Expert recommended'],
              ['Popular Tool', 'Based on your activity'],
              ['Featured Resource', 'Community favorite']
            ].map(([title, desc], index) => (
              <div key={index} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg">
                <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                  {title[0]}
                </div>
                <div>
                  <p className="font-medium">{title}</p>
                  <p className="text-sm text-gray-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;