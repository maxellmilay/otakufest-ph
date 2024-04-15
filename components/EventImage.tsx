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
            <figure className="relative aspect-[4/3] w-[20rem] md:w-[52.5vh] mx-[1.7rem] mt-16">
                <Image
                    src={imageUrl}
                    alt="guest"
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 400px"
                    className="object-cover"
                />
            </figure>
            <p className="text-center text-md md:text-xl">{name}</p>
        </div>
    );
};

export default EventImage;
