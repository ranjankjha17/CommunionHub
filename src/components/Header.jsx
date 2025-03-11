import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Users } from 'lucide-react';

function Header() {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600';
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2 animate-slide-in">
            <Users className="h-8 w-8 text-blue-600 transition-all duration-300 hover:scale-110 transform" />
            <span className="text-xl font-bold text-gray-900">Communion</span>
          </Link>
          
          <div className="flex space-x-4 sm:space-x-8">
            <Link 
              to="/" 
              className={`${isActive('/')} font-medium transition-all duration-200 hover:scale-105 transform`}
            >
              Home
            </Link>
            <Link 
              to="/events" 
              className={`${isActive('/events')} font-medium transition-all duration-200 hover:scale-105 transform`}
            >
              Events
            </Link>
            <Link 
              to="/about" 
              className={`${isActive('/about')} font-medium transition-all duration-200 hover:scale-105 transform`}
            >
              About
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;