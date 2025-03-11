import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavLink({ to, label }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  const className = `${isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'} font-medium transition-all duration-200 hover:scale-105 transform`;

  return (
    <Link to={to} className={className}>
      {label}
    </Link>
  );
}

export default NavLink;