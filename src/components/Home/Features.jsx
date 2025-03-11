import React from 'react';
import { Heart, Users, Calendar } from 'lucide-react';
import FeatureCard from './FeatureCard';

function Features() {
  const features = [
    {
      Icon: Users,
      title: "Community Building",
      description: "Create meaningful connections with people who share your values and interests.",
      delay: 0.1
    },
    {
      Icon: Calendar,
      title: "Diverse Events",
      description: "Participate in a wide range of events from religious ceremonies to social gatherings.",
      delay: 0.2
    },
    {
      Icon: Heart,
      title: "Support Network",
      description: "Find support and understanding in our caring community of diverse individuals.",
      delay: 0.3
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
}

export default Features;