import React from 'react';
import Image from 'next/image';

interface IProps {
    imageUrl: string;
}

const GuestImage = (props: IProps) => {
    const { imageUrl } = props;
    return (
        <figure className="relative aspect-[4/3] w-[20rem] md:w-[25rem] mx-[1.7rem] mt-16">
            <Image
                src={imageUrl}
                alt="guest"
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 400px"
                className="object-cover"
            />
        </figure>
    );
};

export default GuestImage;
