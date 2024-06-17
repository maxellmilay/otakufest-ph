import React from 'react';
import Image from 'next/image';

interface IProps {
    imageUrl: string;
    name: string;
}

const EventImage = (props: IProps) => {
    const { imageUrl, name } = props;
    return (
        <div className="flex flex-col items-center text-center text-md md:text-xl gap-2">
            <figure className="relative aspect-square w-28 sm:w-52 md:w-52 lg:w-64 xl:w-96">
                <Image
                    src={imageUrl}
                    alt="guest"
                    fill
                    className="object-cover"
                />
            </figure>
            <p className="text-xs md:text-sm lg:text-md xl:text-lg">{name}</p>
        </div>
    );
};

export default EventImage;
