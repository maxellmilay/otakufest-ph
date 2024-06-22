import React from 'react';
import { GUESTS } from '@/enums/imageUrls';
import GuestCard from './GuestCard';

const GuestSection = () => {
    return (
        <div className="flex flex-col items-center justify-around text-justify bg-white w-full py-20">
            <div className="flex flex-col text-site-main gap-10">
                <p className="text-4xl lg:text-6xl font-bold w-full text-center">
                    GUESTS
                </p>
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
