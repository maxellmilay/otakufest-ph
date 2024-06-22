import React from 'react';

interface Card {
    title: string;
    description: string;
    link: string;
}

interface CarouselCardProps {
    card: Card;
    onClick: () => void;
    styles: string;
}

export const CarouselCard: React.FC<CarouselCardProps> = ({
    card,
    onClick,
    styles,
}) => {
    return (
        <button
            className={`bg-black/40 w-[40%] text-left flex-shrink-0 md:w-[20%] h-[100%] rounded-sm p-2 sm:p-3 md:p-4 lg:p-7  backdrop-blur-sm cursor-pointer hover:scale-105 hover:duration-300 duration-300 ${styles}`}
            onClick={onClick}
        >
            <p className="font-bold md:text-[0.7rem] text-[0.6rem] lg:text-base">
                {card.title}
            </p>
            <p className="lg:text-xs md:text-[0.45rem] text-[0.4rem] truncate">
                {card.description}
            </p>
        </button>
    );
};
