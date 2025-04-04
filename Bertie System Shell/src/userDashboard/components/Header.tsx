import React from 'react';
import { Bell } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const Header = () => {
  const handleLogout = async () => {
    try {
      // Simple, clean logout implementation
      await supabase.auth.signOut();
      window.location.href = '/sign-in';
    } catch (error) {
      console.error("Error during logout:", error);
      // Fallback in case of error
      window.location.href = '/sign-in';
    }
  };
  
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-bold">
          Good morning, <span className="text-primary">Sophie</span>
        </h1>
        <p className="text-gray-600 mt-1">Welcome to Bertie's AI and expertise platform.</p>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Bell size={20} />
        </button>
        <button 
          onClick={handleLogout} 
          className="text-sm text-gray-600 hover:text-gray-800 mr-4"
        >
          Logout
        </button>
        <img 
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=40&h=40&q=80" 
          alt="Profile" 
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;