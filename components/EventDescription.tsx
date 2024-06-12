import React from 'react';
import Image from 'next/image';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaSquareInstagram } from 'react-icons/fa6';

const EventDescription = () => {
    return (
        <div className="flex flex-col justify-start text-center bg-site-main w-full h-[150vh] overflow-hidden relative">
            <div className="absolute right-0 flex flex-col h-full w-1/2 z-[15] items-center text-center justify-center bg-gradient-to-l to-transparent from-site-main px-5 md:px-20">
                <div className="flex flex-row">
                    <figure className="aspect-square w-10 md:w-16 relative">
                        <Image
                            src="/images/logo-2024-white.png"
                            alt="of24visual"
                            fill
                            className="object-cover"
                        />
                    </figure>
                    <span className="text-4xl md:text-6xl font-bold">
                        OTAKUFEST
                    </span>
                </div>
                <span className="text-md md:text-xl mt-4">
                    Otakufest is the premier and the most anticipated cosplay
                    and hobbies convention in the Visayas, held annually in Cebu
                    City, Philippines. <br />
                    <br />
                    Come join our event happening this <b>AUGUST 17-18, 2024</b>
                    !
                </span>
                <div className="flex flex-row mt-16 gap-4">
                    <FaFacebookSquare size={'5vh'} />
                    <FaSquareXTwitter size={'5vh'} />
                    <FaSquareInstagram size={'5vh'} />
                </div>
            </div>
            <div className="absolute flex flex-col h-[100vmin] w-full h-1/2  bg-gradient-to-b to-transparent from-site-main flex items-center justify-end z-10"></div>
            <figure className="aspect-square w-full md:w-[200vh] ml-[-40vh] relative">
                <Image
                    src="/images/of24visual.png"
                    alt="of24visual"
                    fill
                    className="object-cover"
                />
            </figure>
        </div>
    );
};

export default EventDescription;
