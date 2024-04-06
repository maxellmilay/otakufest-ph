import React from 'react';
import Image from 'next/image';

interface IProps {
    imageUrl: string;
    name: string;
}

const EventImage = (props: IProps) => {
    const { imageUrl, name } = props;
    return (
        <div className="flex flex-col gap-2">
            <figure className="relative aspect-[4/3] w-[25rem] mx-[1.7rem] mt-16">
                <Image
                    src={imageUrl}
                    alt="guest"
                    fill
                    className="object-cover"
                />
            </figure>
            <p className="text-center text-lg">{name}</p>
        </div>
    );
};

export default EventImage;
