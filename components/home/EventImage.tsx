import React from 'react';
import Image from 'next/image';
import { Zoom } from 'react-awesome-reveal';

interface IProps {
    imageUrl: string;
    blackImageURL: string;
    name: string;
    isRevealed: boolean;
}

const EventImage = (props: IProps) => {
    const { imageUrl, blackImageURL, name, isRevealed } = props;

    const imageContent = (
        <figure className="relative aspect-square w-28 sm:w-52 md:w-52 lg:w-64 xl:w-96 hover:scale-105 duration-200 flex justify-center items-center">
            {name == 'AniMotion! Animation Competition' && (
                <Image
                    src={isRevealed ? imageUrl : blackImageURL}
                    alt="eventImg"
                    width={350}
                    height={350}
                />
            )}
            {name != 'AniMotion! Animation Competition' && (
                <Image
                    src={isRevealed ? imageUrl : blackImageURL}
                    alt="eventImg"
                    fill
                />
            )}
        </figure>
    );

    return (
        <Zoom duration={300}>
            <div className="flex flex-col items-center text-center text-md md:text-xl gap-2">
                {imageContent}
                <p className="text-xs md:text-sm lg:text-md xl:text-lg">
                    {isRevealed ? name : '??? Competition'}
                </p>
            </div>
        </Zoom>
    );
};

export default EventImage;
