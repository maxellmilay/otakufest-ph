import React from 'react';

const EventDescription = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center bg-site-main w-full p-10 md:px-[20vw] md:p-20">
            <span className="text-4xl md:text-6xl font-bold">OTAKUFEST</span>
            <span className="text-md md:text-xl mt-6">
                Otakufest is the premier and the most anticipated cosplay and
                hobbies convention in the Visayas, held annually in Cebu City,
                Philippines. Come join our event happening this{' '}
                <b>AUGUST 17-18, 2024</b>!
            </span>
        </div>
    );
};

export default EventDescription;
