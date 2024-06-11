import React from 'react';
import ComingSoon from './ComingSoon';
import Image from 'next/image';
import enums from '@/enums/OFYears/ImageUrl2024';

const SalesSection = () => {
    return (
        <div className="flex flex-col items-center justify-around text-justify bg-white h-screen w-full p-10 md:p-20">
            <div className="flex flex-col text-site-main">
                <span className="text-5xl md:text-8xl font-bold w-full">
                    SHIRTS
                </span>
            </div>
            <ComingSoon />
            {/*
            <div className="flex aspect-[4/3] w-[20rem] md:w-[52.5vh] relative">
                <a href="https://www.google.com" target="_blank">
                    <Image
                        src={enums.ImageUrl.SHIRT}
                        alt="venue"
                        fill
                        className="object-contain"
                    />
                </a>
            </div>
            */}
        </div>
    );
};

export default SalesSection;
