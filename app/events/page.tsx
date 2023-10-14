import React from 'react';
import EventImage from '@/components/EventImage';
import { events } from '@/constants/lists';

const Events = () => {
  return (
    <section
      id="events"
      className="flex flex-col gap-5 min-h-screen justify-center items-center bg-site-blue-100/80 bg-events bg-center bg-blend-overlay px-20 pb-10 pt-[7.5rem]"
    >
      <h2 className="font-bangers text-2xl">EVENTS</h2>
      <div className="flex flex-wrap gap-7 justify-center items-center">
        {events.map((event) => {
          return <EventImage key={event.name} imageUrl={event.imageUrl} name={event.name} />;
        })}
      </div>
    </section>
  );
};

export default Events;
