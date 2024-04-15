import React from 'react';
import Image from 'next/image';
import ImageUrl from '@/enums/imageUrl';

const ShirtsSection = () => {
    return (
        <div className="flex flex-col items-center justify-around text-justify bg-white h-screen w-full p-10 md:p-20">
            <div className="flex flex-col text-[#C60001]">
                <span className="text-5xl md:text-8xl font-bold w-full">
                    SHIRTS
                </span>
                <span className="text-md md:text-xl w-full">
                    Knock, knock. Who’s there? Otakufest. Otakufest who?
                    Otakufest 2024! Charot. Unsa bitaw description ari? Happy
                    birthday, Maxell Gahit Milay. Knock, knock. Who’s there?
                    Otakufest. Otakufest who? Otakufest 2024! Charot. Unsa bitaw
                    description ari? Happy birthday, Maxell Gahit Milay.
                </span>
            </div>
            <div className="flex aspect-[4/3] w-[20rem] md:w-[52.5vh] relative">
                <a href="https://www.google.com" target="_blank">
                    <Image
                        src={ImageUrl.SHIRT}
                        alt="venue"
                        fill
                        className="object-contain"
                    />
                </a>
            </div>
        </div>
    );
};

export default ShirtsSection;
