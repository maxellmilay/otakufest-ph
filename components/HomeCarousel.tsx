import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import enums from '@/enums/OFYears/ImageUrl2024';

const images = [enums.ImageUrl.CAROUSEL1, enums.ImageUrl.CAROUSEL2];

const HomeCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 7000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center text-center bg-transparent h-[100vmin] w-full p-10 md:p-20">
            <div className="absolute h-[100vmin] w-full bg-gradient-to-b from-transparent to-site-main flex items-center justify-center"></div>
            <figure className="relative aspect-square w-[50vmin]">
                <Image
                    src={enums.ImageUrl.LOGO2024}
                    alt="guest"
                    fill
                    className="object-cover"
                />
            </figure>
            <span className="md:text-[2.5vw] z-10">
                Connecting the world, one hobby at a time
            </span>
            <span className="md:text-[1.5vw] z-10">
                August 17-18, 2024 • SM Seaside Cebu
            </span>
            <div className="absolute h-full w-full z-[-10]">
                {images.map((imageUrl, index) => (
                    <Image
                        key={index}
                        src={imageUrl}
                        alt="guest"
                        fill
                        className={`absolute object-cover transition-opacity duration-1000 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HomeCarousel;
