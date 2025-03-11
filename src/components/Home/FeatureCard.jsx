import React from 'react';

function FeatureCard({ Icon, title, description, delay }) {
  return (
    <div 
      className="text-center p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 animate-fade-in" 
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transform transition-all duration-300 hover:scale-110">
        <Icon className="h-8 w-8 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default FeatureCard;