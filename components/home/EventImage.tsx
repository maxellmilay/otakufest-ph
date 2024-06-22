import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface IProps {
    imageUrl: string;
    blackImageURL: string;
    name: string;
    eventURL: string;
    isRevealed: boolean;
}

const EventImage = (props: IProps) => {
    const { imageUrl, blackImageURL, name, eventURL, isRevealed } = props;

    const imageContent = (
        <figure className="relative aspect-square w-28 sm:w-52 md:w-52 lg:w-64 xl:w-96 hover:scale-105 duration-200">
            <Image
                src={isRevealed ? imageUrl : blackImageURL}
                alt="guest"
                fill
                className="object-cover"
            />
        </figure>
    );

    return (
        <div className="flex flex-col items-center text-center text-md md:text-xl gap-2">
            {isRevealed ? (
                <Link href={eventURL}>{imageContent}</Link>
            ) : (
                imageContent
            )}
            <p className="text-xs md:text-sm lg:text-md xl:text-lg">
                {isRevealed ? name : '??? Competition'}
            </p>
        </div>
    );
};

export default EventImage;
