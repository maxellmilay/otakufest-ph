import React from 'react';
import GuestImage from './GuestImage';
import ImageUrl from '@/enums/imageUrl';

const GuestSection = () => {
    return (
        <div className="flex flex-col items-center justify-around text-justify bg-white w-full p-20">
            <div className="flex flex-col text-[#C60001]">
                <span className="text-8xl font-bold w-full">GUESTS</span>
                <span className="text-xl w-full">
                    Knock, knock. Who’s there? Otakufest. Otakufest who?
                    Otakufest 2024! Charot. Unsa bitaw description ari? Happy
                    birthday, Maxell Gahit Milay. Knock, knock. Who’s there?
                    Otakufest. Otakufest who? Otakufest 2024! Charot. Unsa bitaw
                    description ari? Happy birthday, Maxell Gahit Milay.
                </span>
            </div>
            <div className="flex flex-row flex-wrap w-full justify-center">
                <GuestImage imageUrl={ImageUrl.ASHEN} />
                <GuestImage imageUrl={ImageUrl.BYORU} />
                <GuestImage imageUrl={ImageUrl.SEANPAI} />
                <GuestImage imageUrl={ImageUrl.DIANE} />
                <GuestImage imageUrl={ImageUrl.LIA} />
            </div>
        </div>
    );
};

export default GuestSection;
