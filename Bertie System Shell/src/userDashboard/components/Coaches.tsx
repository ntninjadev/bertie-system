import React from 'react';
import { Search } from 'lucide-react';

const categories = [
  'All', 'Marketing', 'Finance', 'Strategy', 'Leadership', 'Technology', 'HR'
];

const coaches = [
  {
    id: 1,
    name: 'HR Assistant',
    description: 'Get expert advice on hiring, employee relations, and more',
    category: 'HR',
    initials: 'HR',
  },
  {
    id: 2,
    name: 'Marketing Guru',
    description: 'Strategy, digital marketing, and brand development',
    category: 'Marketing',
    initials: 'MK',
  },
  {
    id: 3,
    name: 'Finance Pro',
    description: 'Budgeting, financial planning, and investment advice',
    category: 'Finance',
    initials: 'FI',
  },
  {
    id: 4,
    name: 'Operations Expert',
    description: 'Process improvement, logistics, and operational efficiency',
    category: 'Strategy',
    initials: 'OP',
  },
  {
    id: 5,
    name: 'Legal Advisor',
    description: 'Contracts, compliance, and regulatory guidance',
    category: 'Strategy',
    initials: 'LE',
  },
  {
    id: 6,
    name: 'Tech Consultant',
    description: 'IT strategy, software selection, and digital transformation',
    category: 'Technology',
    initials: 'TE',
  },
];

interface CoachesProps {
  onSelectCoach: (coach: typeof coaches[0]) => void;
}

const Coaches = ({ onSelectCoach }: CoachesProps) => {
  return (
    <div className="p-8 bg-background min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Select an Expert</h1>
        <p className="text-gray-600">Choose an expert to chat with for personalized advice</p>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search experts..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-secondary/20"
          />
        </div>
      </div>

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coaches.map((coach) => (
          <div
            key={coach.id}
            className="bg-white rounded-lg border border-border hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => onSelectCoach(coach)}
          >
            <div className="p-4 border-b border-border">
              <div className="aspect-[3/2] bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-secondary">{coach.initials}</span>
                </div>
              </div>
              <h3 className="font-semibold text-lg text-center mb-2">{coach.name}</h3>
              <p className="text-gray-600 text-center text-sm">{coach.description}</p>
            </div>
            <div className="px-4 py-3">
              <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                {coach.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coaches;