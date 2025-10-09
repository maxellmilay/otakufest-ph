import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Zoom } from 'react-awesome-reveal';
import { link } from 'fs';

interface IProps {
    slug?: string;
    imageUrl: string;
    blackImageURL: string;
    name: string;
    eventURL: string;
    isRevealed: boolean;
}

const EventImage = (props: IProps) => {
    const { imageUrl, blackImageURL, name, eventURL, isRevealed, slug } = props;
    const linkHref = slug ? `/events/${slug}` : eventURL;

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
        <Zoom duration={300}>
            <div className="flex flex-col items-center text-center text-md md:text-xl gap-2 md:px-14">
                {isRevealed ? (
                    <Link href={eventURL}>{imageContent}</Link>
                ) : (
                    imageContent
                )}

                <div className="h-full flex flex-col items-center">
                    <p className="text-xs md:text-sm lg:text-md xl:text-xl uppercase font-bold text-sm/6 leading-none">
                        {isRevealed ? name : '??? Competition'}
                    </p>

                    {isRevealed && (
                        <div className="flex flex-col sm:flex-row gap-2 w-full justify-center mt-2">
                            <Link
                                href={linkHref}
                                className="bg-white text-black px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-semibold hover:bg-gray-200 transition"
                            >
                                DETAILS & RULES
                            </Link>
                            <Link
                                href={`${eventURL}`}
                                className="bg-site-main text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-bold hover:bg-site-main/75 transition"
                            >
                                REGISTER NOW
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </Zoom>
    );
};

export default EventImage;
