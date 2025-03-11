import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { format } from 'date-fns';

function EventCard({ event, index }) {
  const categoryColors = {
    religious: 'bg-purple-100 text-purple-800',
    social: 'bg-green-100 text-green-800',
    charity: 'bg-orange-100 text-orange-800'
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden transition-scale animate-fade-in hover:shadow-lg"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <Calendar className="h-4 w-4 mr-2" />
          {format(new Date(event.date), 'MMMM d, yyyy')}
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="h-4 w-4 mr-2" />
          {event.location}
        </div>
        <p className="text-gray-600 mb-4">{event.description}</p>
        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${categoryColors[event.category]}`}>
          {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
        </span>
      </div>
    </div>
  );
}

export default EventCard;