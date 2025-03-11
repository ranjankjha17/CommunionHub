import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Users } from 'lucide-react';
import NavLink from './NavLink';

function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2 animate-slide-in">
            <Users className="h-8 w-8 text-blue-600 transition-all duration-300 hover:scale-110 transform" />
            <span className="text-xl font-bold text-gray-900">Communion</span>
          </Link>
          
          <div className="flex space-x-4 sm:space-x-8">
            <NavLink to="/" label="Home" />
            <NavLink to="/events" label="Events" />
            <NavLink to="/about" label="About" />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;