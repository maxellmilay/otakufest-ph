import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';
import { CarouselCard } from './CarouselCard';
import {
    OF24_BACKGROUND,
    OF24_CAROUSEL_1,
    OF24_CAROUSEL_2,
} from '@/enums/imageUrls';
import CarouselBackground from './CarouselBackground';

const images = ['', OF24_CAROUSEL_2, OF24_BACKGROUND, OF24_CAROUSEL_1];

export const HomePage = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex(
                (prevIndex) => (prevIndex + 1) % images.length
            );
        }, 6000);

        // Cleanup function to clear the timer when the component unmounts
        return () => clearInterval(timer);
    }, [currentImageIndex]);

    const handleCardClick = (index: number) => {
        setCurrentImageIndex(index);
    };
    const news = [
        {
            title: 'Otakufest 2024',
            description:
                'Connecting the world, one hobby at a time \n August 10-11, 2024 • SM Seaside Cebu',
            link: '',
        },
        {
            title: 'NEWS 1',
            description: 'Lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum',
            link: '',
        },
        {
            title: 'NEWS 2',
            description: 'Lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum',
            link: '',
        },
        {
            title: 'NEWS 3',
            description: 'Lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum',
            link: '',
        },
    ];
    
    return (
        <section className="h-screen  flex flex-col font-yaldevi relative ">
            <CarouselBackground
                currentIndex={currentImageIndex}
                news={news}
                images={images}
            />
            <div className="absolute bg-black/30 bottom-0 flex flex-row items-center justify-evenly  h-[18%] w-full p-4 space-x-2 ">
                {news.map((card, index) => (
                    <CarouselCard
                        key={index}
                        card={card}
                        onClick={() => handleCardClick(index)}
                        styles={`${index == currentImageIndex ? 'scale-110' : ''}`}
                    />
                ))}
            </div>
        </section>
    );
};
