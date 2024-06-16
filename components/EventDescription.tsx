import React from 'react';
import Image from 'next/image';
import { OF24_LOGO_WHITE, OF24_MAIN_VISUAL } from '@/enums/imageUrls';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaSquareXTwitter, FaSquareInstagram } from 'react-icons/fa6';

const EventDescription = () => {
    return (
        <div className="flex flex-col justify-center items-center text-center bg-site-main w-full h-[150vh] overflow-hidden relative">
            <div className="absolute bottom-0 flex flex-col h-1/2 w-full md:h-full md:w-1/2 md:right-0 z-[15] items-center text-center justify-center md:bg-gradient-to-l bg-gradient-to-t to-transparent from-site-main px-5 md:px-20">
                <div className="flex flex-row">
                    <figure className="aspect-square w-10 md:w-16 relative">
                        <Image
                            src={OF24_LOGO_WHITE}
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
                    Come join our event happening this{' '}
                    <span className="font-bold"> AUGUST 17-18, 2024 </span> !
                </span>
                <div className="flex flex-row mt-16 gap-4">
                    <FaFacebookSquare size={'5vh'} />
                    <FaSquareXTwitter size={'5vh'} />
                    <FaSquareInstagram size={'5vh'} />
                </div>
            </div>
            <div className="absolute top-0 flex-col w-full h-1/2 bg-gradient-to-b to-transparent from-site-main flex items-center justify-end z-10"></div>
            <figure className="relative aspect-square w-[150vh] md:w-[200vh] md:ml-[-85vh]">
                <Image
                    src={OF24_MAIN_VISUAL}
                    alt="of24visual"
                    fill
                    className="object-cover"
                />
            </figure>
        </div>
    );
};

export default EventDescription;
