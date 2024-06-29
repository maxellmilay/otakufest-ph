import React from 'react';
import Image from 'next/image';
import { Zoom } from 'react-awesome-reveal';

interface IProps {
    imageUrl: string;
    aspect: string;
    width?: string;
}

const SponsorImage = (props: IProps) => {
    const { imageUrl, aspect, width } = props;
    return (
        <Zoom duration={300}>
            <figure className={`relative ${aspect} ${width}`}>
                <Image
                    src={imageUrl}
                    alt="image"
                    fill
                    className="object-cover"
                />
            </figure>
        </Zoom>
    );
};

export default SponsorImage;
