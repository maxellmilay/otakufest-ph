import React from 'react';
import EventImage from './EventImage';
import { EVENTS, PARTNERED_EVENTS } from '@/enums/imageUrls';

const EventSection = () => {
    return (
        <div className="flex flex-col items-center justify-around text-justify bg-site-main w-full p-10 md:p-20">
            <div className="flex flex-col text-white w-full">
                <span className="text-5xl md:text-8xl font-bold w-full">
                    EVENTS
                </span>
                <span className="text-md md:text-xl">
                    Join us and let your boundless creativity soar in our
                    various assortment of events. Expect nothing less than a
                    brilliant showcase of skill and talent that is sure to cater
                    to and satisfy your cravings for an unforgettable otaku
                    experience.
                    <br />
                    <br />
                    Click the images to see the details of each event and sign
                    up now! Applications close in <b>3</b> days!
                </span>
            </div>
            <span className="text-4xl md:text-6xl mt-14 font-bold">
                EVENTS AND COMPETITIONS
            </span>
            <div className="flex flex-row flex-wrap w-full justify-center">
                {Object.values(EVENTS).map((currentEvent) => (
                    <EventImage
                        key={currentEvent.eventName}
                        imageUrl={currentEvent.eventUrl}
                        name={currentEvent.eventName}
                    />
                ))}
            </div>
            <span className="text-4xl md:text-6xl mt-20 font-bold">
                PARTNERED COMPETITIONS
            </span>
            <span className="text-md md:text-xl">
                Want to partner with us for a competition? Contact us!
            </span>
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
