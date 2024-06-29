import React from 'react';
import { GUESTS } from '@/enums/imageUrls';
import GuestCard from './GuestCard';
import { Fade } from 'react-awesome-reveal';
import { FaPeopleRobbery } from 'react-icons/fa6';

const GuestSection = () => {
    return (
        <div className="flex flex-col items-center justify-around text-justify bg-white w-full py-20">
            <div className="flex flex-col text-site-main gap-10">
                <Fade>
                    <p className="text-4xl lg:text-6xl font-bold w-full text-center">
                        GUESTS
                    </p>
                </Fade>

                <Fade>
                    <div className="flex items-center gap-4 justify-center">
                        <FaPeopleRobbery className="h-4 w-4 md:h-12 md:w-12 hidden md:block" />
                        <div className="flex flex-col gap-3 w-2/3 lg:w-auto">
                            <div className="flex gap-2">
                                <FaPeopleRobbery className="h-4 w-4 md:h-12 md:w-12 block md:hidden" />
                                <p className="text-xs xl:text-2xl font-bold">
                                    Personally meet our OF24 guests!
                                </p>
                            </div>
                            <p className="text-xs">
                                Get exclusive 1-on-1 photoshoots, ask away at
                                the Q&A session, receive a personalized physical
                                event ticket, and more! Meet & Greet tickets are
                                inclusive of entry!
                            </p>
                        </div>
                    </div>
                </Fade>

                {GUESTS.map((guest, index) => {
                    const isLeft = index % 2 == 0;

                    return (
                        <GuestCard
                            name={guest.name}
                            description={guest.description}
                            imageUrl={guest.imageUrl}
                            socials={guest.socials}
                            key={index + guest.name}
                            isLeft={isLeft}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default GuestSection;
