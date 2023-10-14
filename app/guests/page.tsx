import React from 'react';
import { cosplayGuests, vtuberGuests } from '@/constants/lists';
import GuestImage from '@/components/GuestImage';

const Guests = () => {
  return (
    <section className="flex flex-col gap-5 min-h-screen justify-center items-center bg-site-blue-100/80 bg-guests bg-cover bg-center bg-blend-overlay px-20 pb-10 pt-[7.5rem]">
      <h2>COSPLAY GUESTS</h2>
      <div className="flex flex-wrap gap-5 justify-center items-center">
        {cosplayGuests.map((guest) => {
          return <GuestImage key={guest} imageUrl={guest} />;
        })}
      </div>
      <h2>VTUBER GUESTS</h2>
      <div className="flex flex-wrap gap-5 justify-center items-center">
        {vtuberGuests.map((guest) => {
          return <GuestImage key={guest} imageUrl={guest} />;
        })}
      </div>
    </section>
  );
};

export default Guests;
