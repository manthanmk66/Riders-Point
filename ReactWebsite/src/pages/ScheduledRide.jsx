import React from 'react';
import ScheduledRide from './ScheduledRide';

const App = () => {
  // Assume ScheduledRide is an array containing ride objects
  const ScheduledRide = [
    // Sample ride objects
    {
      route_id: 1,
      start_point: 'Point A',
      end_point: 'Point B',
      travel_date: '2024-02-20',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    // More ride objects...
  ];

  return (
    <div>
      <ScheduledRide ScheduledRide={ScheduledRide} />
    </div>
  );
};

export default App;
