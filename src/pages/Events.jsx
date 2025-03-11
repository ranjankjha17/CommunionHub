import React, { useState } from 'react';
import EventCard from '../components/Events/EventCard';
import EventForm from '../components/Events/EventForm';
import EventFilter from '../components/Events/EventFilter';

function Events() {
  const [events, setEvents] = useState([
    {
      id: '1',
      title: 'Interfaith Dialog Session',
      date: '2024-03-25',
      location: 'Community Center',
      description: 'Join us for an engaging discussion about different faith traditions.',
      category: 'religious'
    },
    {
      id: '2',
      title: 'Community Picnic',
      date: '2024-03-30',
      location: 'Central Park',
      description: 'A social gathering for families and individuals to connect.',
      category: 'social'
    },
    {
      id: '3',
      title: 'Food Drive',
      date: '2024-04-05',
      location: 'Local Food Bank',
      description: 'Help us collect and distribute food to those in need.',
      category: 'charity'
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showForm, setShowForm] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    location: '',
    description: '',
    category: 'social'
  });

  const filteredEvents = selectedCategory === 'all'
    ? events
    : events.filter(event => event.category === selectedCategory);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newEvent.title && newEvent.date && newEvent.location && newEvent.category) {
      setEvents([...events, { ...newEvent, id: Date.now().toString() }]);
      setNewEvent({ title: '', date: '', location: '', description: '', category: 'social' });
      setShowForm(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold text-gray-900">Community Events</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all duration-300 hover:scale-105 transform w-full sm:w-auto"
        >
          {showForm ? 'Cancel' : 'Add New Event'}
        </button>
      </div>

      {showForm && (
        <EventForm 
          newEvent={newEvent}
          setNewEvent={setNewEvent}
          handleSubmit={handleSubmit}
        />
      )}

      <EventFilter 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event, index) => (
          <EventCard key={event.id} event={event} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Events;