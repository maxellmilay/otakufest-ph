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
        <div
            className={` bg-black/40 w-[20%] h-[90%] rounded-sm p-4  backdrop-blur-sm cursor-pointer hover:scale-110 hover:duration-300 duration-300 ${styles}`}
            onClick={onClick}
        >
            <span className="font-bold">{card.title}</span>
            <p className="text-xs">{card.description}</p>
        </div>
    );
};
