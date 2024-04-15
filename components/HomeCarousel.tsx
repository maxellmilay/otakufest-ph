import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import ImageUrl from '@/enums/imageUrl';

const images = [ImageUrl.CAROUSEL1, ImageUrl.CAROUSEL2];

const HomeCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 7000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="flex flex-col items-center justify-around text-center bg-transparent h-[100vmin] w-full p-10 md:p-20">
            <div className="absolute h-[100vmin] w-full bg-gradient-to-b from-transparent to-[#700000] flex items-center justify-center"></div>
            <div className="flex-grow"></div>
            <figure className="relative aspect-square w-[50vmin]">
                <Image
                    src={ImageUrl.LOGO2024}
                    alt="guest"
                    fill
                    className="object-cover"
                />
            </figure>
            <span className="md:text-[2.5vw] z-10">
                Connecting the world, one hobby at a time
            </span>
            <span className="md:text-[1.5vw] z-10">
                August 10-11, 2024 • SM Seaside Cebu
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
