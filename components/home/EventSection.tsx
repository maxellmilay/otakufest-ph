import React, { useRef } from 'react';
import EventImage from './EventImage';
import { EVENTS, PARTNERED_EVENTS } from '@/enums/imageUrls';
import { useIsVisible } from '../generics/isVisible';

const EventSection = () => {
    const ref1 = useRef<HTMLDivElement>(null);
    const isVisible1 = useIsVisible(ref1);
    const ref2 = useRef<HTMLDivElement>(null);
    const isVisible2 = useIsVisible(ref2);
    const ref3 = useRef<HTMLDivElement>(null);
    const isVisible3 = useIsVisible(ref3);
    const ref4 = useRef<HTMLDivElement>(null);
    const isVisible4 = useIsVisible(ref4);
    return (
        <div className="flex flex-col gap-3 items-center justify-around text-center bg-cover bg-center bg-theme text-site-main w-full p-10 md:p-20">
            <div
                ref={ref1}
                className={`flex flex-col w-full transition-opacity ease-in duration-500 ${isVisible1 ? 'opacity-100' : 'opacity-0'}`}
            >
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
                <p className="text-2xl md:text-3xl font-bold mt-5">
                    EVENTS AND COMPETITIONS
                </p>
            </div>

            <div
                ref={ref2}
                className={`grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-3 w-full transition-opacity ease-in duration-500 ${isVisible2 ? 'opacity-100' : 'opacity-0'}`}
            >
                {Object.values(EVENTS).map((currentEvent, index) => (
                    <EventImage
                        key={index + currentEvent.eventName}
                        imageUrl={currentEvent.imageUrl}
                        blackImageURL={currentEvent.blackImageUrl}
                        name={currentEvent.eventName}
                        eventURL={currentEvent.eventURL}
                        isRevealed={currentEvent.isRevealed}
                    />
                ))}
            </div>
            <p
                ref={ref3}
                className={`text-2xl md:text-3xl font-bold mt-10 sm:mt-20 transition-opacity ease-in duration-500 ${isVisible3 ? 'opacity-100' : 'opacity-0'}`}
            >
                PARTNERED COMPETITIONS
            </p>
            <p
                ref={ref3}
                className={`text-xs sm:text-sm md:text-xl mb-5 transition-opacity ease-in duration-500 ${isVisible3 ? 'opacity-100' : 'opacity-0'}`}
            >
                Want to partner with us for a competition? Contact us!
            </p>
            <div
                ref={ref4}
                className={`grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-3 w-full transition-opacity ease-in duration-500 ${isVisible4 ? 'opacity-100' : 'opacity-0'}`}
            >
                {Object.values(PARTNERED_EVENTS).map((currentEvent, index) => (
                    <EventImage
                        key={index + currentEvent.eventName}
                        imageUrl={currentEvent.imageUrl}
                        blackImageURL={currentEvent.blackImageUrl}
                        name={currentEvent.eventName}
                        eventURL={currentEvent.eventURL}
                        isRevealed={currentEvent.isRevealed}
                    />
                ))}
            </div>
        </div>
    );
};

export default EventSection;
