import React from 'react';
import Image from 'next/image';
import ExternalLink from '@/enums/externalUrls';
import { OF24_LOGO_WHITE, OF24_MAIN_VISUAL } from '@/enums/imageUrls';
import {
    RiFacebookCircleFill,
    RiTwitterFill,
    RiInstagramFill,
    RiFacebookCircleLine,
    RiTwitterLine,
    RiInstagramLine,
} from 'react-icons/ri';

const EventDescription = () => {
    return (
        <div className="flex flex-col justify-center items-center text-center bg-site-main w-full h-screen overflow-hidden relative">
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
                    <span className="text-4xl xl:text-6xl font-bold">
                        OTAKUFEST
                    </span>
                </div>
                <span className="text-xs sm:text-md md:text-xl mt-4">
                    Otakufest is the premier and the most anticipated cosplay
                    and hobbies convention in the Visayas, held annually in Cebu
                    City, Philippines. <br />
                    <br />
                    Come join our event happening this{' '}
                    <span className="font-bold"> AUGUST 17-18, 2024 </span> !
                </span>
                <div className="flex flex-row text-site-secondary mt-7 sm:mt-16 gap-4">
                    <a
                        rel="noreferrer"
                        href={ExternalLink.FB}
                        target="_blank"
                        className="group"
                    >
                        <RiFacebookCircleFill className="h-8 w-8 md:h-12 md:w-12 group-hover:hidden" />
                        <RiFacebookCircleLine className="h-8 w-8 md:h-12 md:w-12 hidden group-hover:block" />
                    </a>
                    <a
                        rel="noreferrer"
                        href={ExternalLink.TWITTER}
                        target="_blank"
                        className="group"
                    >
                        <RiTwitterFill className="h-8 w-8 md:h-12 md:w-12 group-hover:hidden" />
                        <RiTwitterLine className="h-8 w-8 md:h-12 md:w-12 hidden group-hover:block" />
                    </a>
                    <a
                        rel="noreferrer"
                        href={ExternalLink.INSTAGRAM}
                        target="_blank"
                        className="group"
                    >
                        <RiInstagramFill className="h-8 w-8 md:h-12 md:w-12 group-hover:hidden" />
                        <RiInstagramLine className="h-8 w-8 md:h-12 md:w-12 hidden group-hover:block" />
                    </a>
                </div>
            </div>
            <figure className="relative aspect-square w-[75dvh] sm:w-[150dvh] md:w-[200dvh] md:ml-[-85vh]">
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
