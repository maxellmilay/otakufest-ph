import React from 'react';
import Image from 'next/image';
import { OF24_COMING_SOON } from '@/enums/imageUrls';

const ComingSoon = () => {
    return (
        <div className="flex flex-col md:flex-row items-center h-[30vh] w-full relative text-site-main bg-transparent md:py-56">
            <figure className="relative aspect-square w-1/2 scale-115 md:scale-50 duration-200 mt-4">
                <Image
                    src={OF24_COMING_SOON}
                    alt="coming soon"
                    fill
                    className="object-contain"
                />
            </figure>
            <div className="flex flex-col md:w-1/2 items-center justify-center md:items-start">
                <span className="text-center underline md:text-justify text-2xl md:text-4xl font-bold">
                    COMING SOON!
                </span>
                <span className="text-center md:text-justify w-3/4 text-xs md:text-xl md:text-[1.5vw] z-10">
                    We are cooking up more things for you this OtakuFest! Stand
                    by for more updates!
                </span>
            </div>
        </div>
    );
};

export default ComingSoon;
