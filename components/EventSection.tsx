import React from 'react';
import EventImage from './EventImage';
import ImageUrl from '@/enums/imageUrl';

const EventSection = () => {
    return (
        <div className="flex flex-col items-center justify-around text-justify bg-[#C60001] w-full p-10 md:p-20">
            <div className="flex flex-col text-white">
                <span className="text-5xl md:text-8xl font-bold w-full">
                    EVENTS
                </span>
                <span className="text-md md:text-xl w-full">
                    Knock, knock. Who’s there? Otakufest. Otakufest who?
                    Otakufest 2024! Charot. Unsa bitaw description ari? Happy
                    birthday, Maxell Gahit Milay. Knock, knock. Who’s there?
                    Otakufest. Otakufest who? Otakufest 2024! Charot. Unsa bitaw
                    description ari? Happy birthday, Maxell Gahit Milay.
                </span>
            </div>
            <div className="flex flex-row flex-wrap w-full justify-center">
                <EventImage
                    imageUrl={ImageUrl.ASIAN_POP_DANCE}
                    name="Asian Pop Dance"
                />
                <EventImage imageUrl={ImageUrl.CARD_GAMES} name="Card Games" />
                <EventImage
                    imageUrl={ImageUrl.CHIBI_COSPLAY}
                    name="Chibi Cosplay"
                />
                <EventImage
                    imageUrl={ImageUrl.GUNPLA_BUILDING}
                    name="Gunpla Building"
                />
                <EventImage
                    imageUrl={ImageUrl.JAPANESE_SINGING}
                    name="Japanese Singing"
                />
                <EventImage
                    imageUrl={ImageUrl.ONE_SHOT_MANGA}
                    name="One Shot Manga"
                />
                <EventImage
                    imageUrl={ImageUrl.ORIGINAL_CHARACTER_DESIGN}
                    name="Original Character Design"
                />
                <EventImage
                    imageUrl={ImageUrl.PET_COSPLAY}
                    name="Pet Cosplay"
                />
                <EventImage
                    imageUrl={ImageUrl.SOLO_COSPLAY}
                    name="Solo Cosplay"
                />
            </div>
        </div>
    );
};

export default EventSection;
