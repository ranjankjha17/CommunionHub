import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 pb-16 text-center animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Connecting People Across Faiths & Interests
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Join our vibrant community where people of all faiths come together to share experiences,
          support each other, and build meaningful connections through various events and activities.
        </p>
        <button
          onClick={() => navigate('/events')}
          className="bg-blue-600 text-white px-6 md:px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 transform"
        >
          Explore Events
        </button>
      </div>
    </div>
  );
}

export default Hero;