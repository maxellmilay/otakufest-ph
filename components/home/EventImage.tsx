import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface IProps {
    imageUrl: string;
    name: string;
    eventURL: string;
}

const EventImage = (props: IProps) => {
    const { imageUrl, name, eventURL } = props;

    const imageContent = (
        <figure className="relative aspect-square w-28 sm:w-52 md:w-52 lg:w-64 xl:w-96 hover:scale-105 duration-200">
            <Image src={imageUrl} alt="guest" fill className="object-cover" />
        </figure>
    );

    return (
        <div className="flex flex-col items-center text-center text-md md:text-xl gap-2">
            {eventURL ? (
                <Link href={eventURL}>{imageContent}</Link>
            ) : (
                imageContent
            )}
            <p className="text-xs md:text-sm lg:text-md xl:text-lg">{name}</p>
        </div>
    );
};

export default EventImage;
