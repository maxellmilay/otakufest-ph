import React from 'react';
import Image from 'next/image';
import ImageUrl from '@/enums/imageUrl';

const ShirtsSection = () => {
    return (
        <div className="flex flex-col items-center justify-around text-justify bg-white h-screen w-full p-20">
            <div className="flex flex-col text-[#C60001]">
                <span className="text-8xl font-bold w-full">SHIRTS</span>
                <span className="text-xl w-full">
                    Knock, knock. Who’s there? Otakufest. Otakufest who?
                    Otakufest 2024! Charot. Unsa bitaw description ari? Happy
                    birthday, Maxell Gahit Milay. Knock, knock. Who’s there?
                    Otakufest. Otakufest who? Otakufest 2024! Charot. Unsa bitaw
                    description ari? Happy birthday, Maxell Gahit Milay.
                </span>
            </div>
            <div className="flex h-[50vh] w-full relative">
                <a href="https://www.google.com">
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
