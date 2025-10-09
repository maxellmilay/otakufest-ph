'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Marquee from 'react-fast-marquee';

interface BoothCardProps {
    images: string[];
    title: string;
    description: string;
    buttonText?: string;
    backgroundColor?: string;
    buttonClassName?: string;
    onButtonClick?: () => void;
}

export function BoothCard({
    images,
    title,
    description,
    buttonText,
    backgroundColor = '#FFE5E5',
    buttonClassName = 'bg-[#8B4049] hover:bg-[#6D3238]',
    onButtonClick,
}: BoothCardProps) {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={sectionRef}
            className="w-full py-6 sm:py-8 md:py-10 border-t-2 border-b-2 sm:border-t-4 sm:border-b-4 border-[#FFFFFF] transition-all duration-1000 ease-out"
            style={{
                backgroundColor,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-100px)',
            }}
        >
            <div className="mb-4 sm:mb-6 overflow-hidden max-w-6xl mx-auto">
                <Marquee speed={40} gradient={false}>
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="mx-3 sm:mx-4 md:mx-6 flex-shrink-0 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-[#C8D4D9] rounded-md overflow-hidden"
                        >
                            <Image
                                src={src || '/placeholder.svg'}
                                alt={`${title} image ${index + 1}`}
                                width={400}
                                height={400}
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                            />
                        </div>
                    ))}
                </Marquee>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3 sm:mb-4 tracking-wider text-[#2C2C2C] max-w-4xl mx-auto px-4">
                {title}
            </h2>

            <p className="text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6 text-[#2C2C2C] max-w-4xl mx-auto px-4 text-center">
                {description}
            </p>

            {buttonText && (
                <div className="flex justify-center max-w-4xl mx-auto px-4">
                    <button
                        onClick={onButtonClick}
                        className={`${buttonClassName} text-white px-6 py-2 sm:px-8 sm:py-2.5 md:px-10 md:py-3 text-sm sm:text-base font-semibold tracking-wide transition-colors cursor-pointer border-none rounded-xl w-full sm:w-auto max-w-xs`}
                    >
                        {buttonText}
                    </button>
                </div>
            )}
        </div>
    );
}
