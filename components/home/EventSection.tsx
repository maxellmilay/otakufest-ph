import React, { useState } from 'react';
import EventImage from './EventImage';
import EventModal from './EventModal';
import { EVENTS, PARTNERED_EVENTS } from '@/enums/imageUrls';
import { Fade } from 'react-awesome-reveal';

const EventSection = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const openModal = (event: any) => {
        setSelectedEvent(event);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedEvent(null);
    };

    return (
        <div className="flex flex-col gap-3 items-center justify-around text-center bg-cover bg-center bg-theme text-site-main w-full p-10 md:p-20">
            <Fade>
                <div className="flex flex-col w-full">
                    <p className="text-4xl md:text-6xl font-bold w-full mb-5">
                        EVENTS
                    </p>
                    <p className="text-xs sm:text-sm md:text-xl mb-5">
                        Join us and let your boundless creativity soar in our
                        various assortment of events. Expect nothing less than a
                        brilliant showcase of skill and talent that is sure to
                        cater to and satisfy your cravings for an unforgettable
                        otaku experience.
                        <br />
                        <br />
                        Click the images to see the details of each event and
                        sign up now! Applications close in <b>3</b> days!
                    </p>
                </div>
                <p className="text-2xl md:text-3xl font-bold mt-5">
                    EVENTS AND COMPETITIONS
                </p>
            </Fade>
            <div className="grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-3 w-full">
                {Object.values(EVENTS).map((currentEvent, index) => (
                    <button
                        key={index + currentEvent.eventName}
                        onClick={() => openModal(currentEvent)}
                        className="focus:outline-none"
                    >
                        <EventImage
                            imageUrl={currentEvent.imageUrl}
                            blackImageURL={currentEvent.blackImageUrl}
                            name={currentEvent.eventName}
                            isRevealed={currentEvent.isRevealed}
                        />
                    </button>
                ))}
            </div>
            <Fade>
                <p className="text-2xl md:text-3xl font-bold mt-10 sm:mt-20">
                    PARTNERED COMPETITIONS
                </p>
                <p className="text-xs sm:text-sm md:text-xl mb-5">
                    Want to partner with us for a competition? Contact us!
                </p>
            </Fade>

            <div className="grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-3 w-full">
                {Object.values(PARTNERED_EVENTS).map((currentEvent, index) => (
                    <button
                        key={index + currentEvent.eventName}
                        onClick={() => openModal(currentEvent)}
                        className="focus:outline-none"
                    >
                        <EventImage
                            imageUrl={currentEvent.imageUrl}
                            blackImageURL={currentEvent.blackImageUrl}
                            name={currentEvent.eventName}
                            isRevealed={currentEvent.isRevealed}
                        />
                    </button>
                ))}
            </div>

            <EventModal
                event={selectedEvent}
                isOpen={modalIsOpen}
                onClose={closeModal}
            />
        </div>
    );
};

export default EventSection;
