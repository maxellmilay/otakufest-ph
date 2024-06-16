import React from 'react';
import EventImage from './EventImage';
import { EVENTS, PARTNERED_EVENTS } from '@/enums/imageUrls';

const EventSection = () => {
    return (
        <div className="flex flex-col gap-3 items-center justify-around text-center bg-site-main w-full p-10 md:p-20">
            <div className="flex flex-col text-white w-full">
                <p className="text-4xl md:text-6xl font-bold w-full mb-5">
                    EVENTS
                </p>
                <p className="text-xs sm:text-sm md:text-xl mb-5">
                    Join us and let your boundless creativity soar in our
                    various assortment of events. Expect nothing less than a
                    brilliant showcase of skill and talent that is sure to cater
                    to and satisfy your cravings for an unforgettable otaku
                    experience.
                    <br />
                    <br />
                    Click the images to see the details of each event and sign
                    up now! Applications close in <b>3</b> days!
                </p>
            </div>
            <p className="text-2xl md:text-3xl font-bold">
                EVENTS AND COMPETITIONS
            </p>
            <div className="flex flex-row flex-wrap w-full justify-center">
                {Object.values(EVENTS).map((currentEvent) => (
                    <EventImage
                        key={currentEvent.eventName}
                        imageUrl={currentEvent.eventUrl}
                        name={currentEvent.eventName}
                    />
                ))}
            </div>
            <p className="text-4xl md:text-6xl font-bold my-5">
                PARTNERED COMPETITIONS
            </p>
            <p className="text-md md:text-xl">
                Want to partner with us for a competition? Contact us!
            </p>
            <div className="flex flex-row flex-wrap w-full justify-center">
                {Object.values(PARTNERED_EVENTS).map((currentEvent) => (
                    <EventImage
                        key={currentEvent.eventName}
                        imageUrl={currentEvent.eventUrl}
                        name={currentEvent.eventName}
                    />
                ))}
            </div>
        </div>
    );
};

export default EventSection;
