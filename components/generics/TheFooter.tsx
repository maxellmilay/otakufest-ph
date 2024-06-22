import React from 'react';
import Image from 'next/image';
import { LOGO } from '@/enums/imageUrls';
import ExternalLink from '@/enums/externalUrls';
import {
    RiFacebookCircleFill,
    RiTwitterFill,
    RiInstagramFill,
    RiFacebookCircleLine,
    RiTwitterLine,
    RiInstagramLine,
} from 'react-icons/ri';

const TheFooter = () => {
    return (
        <footer className="flex flex-row gap-0 md:gap-32 bg-white text-black justify-between md:justify-center items-center px-3 py-5 sm:px-5 md:p-10 z-20">
            <div className="flex flex-row items-center gap-2">
                <figure className="relative aspect-[99/115] h-10 md:h-[7.5vh]">
                    <Image
                        src={LOGO}
                        alt="logo"
                        fill
                        className="object-cover"
                    />
                </figure>
                <p className="text-xs md:text-5xl">OTAKUFEST</p>
            </div>
            <div className="flex flex-col gap-1 text-black">
                <div className="flex flex-row justify-end md:justify-center gap-3">
                    <a
                        rel="noreferrer"
                        href={ExternalLink.FB}
                        target="_blank"
                        className="group"
                    >
                        <RiFacebookCircleFill
                            color="black"
                            className="h-5 md:h-12 w-5 md:w-12 group-hover:hidden"
                        />
                        <RiFacebookCircleLine
                            color="black"
                            className="h-5 md:h-12 w-5 md:w-12 hidden group-hover:block"
                        />
                    </a>
                    <a
                        rel="noreferrer"
                        href={ExternalLink.TWITTER}
                        target="_blank"
                        className="group"
                    >
                        <RiTwitterFill
                            color="black"
                            className="h-5 md:h-12 w-5 md:w-12 group-hover:hidden"
                        />
                        <RiTwitterLine
                            color="black"
                            className="h-5 md:h-12 w-5 md:w-12 hidden group-hover:block"
                        />
                    </a>
                    <a
                        rel="noreferrer"
                        href={ExternalLink.INSTAGRAM}
                        target="_blank"
                        className="group"
                    >
                        <RiInstagramFill
                            color="black"
                            className="h-5 md:h-12 w-5 md:w-12 group-hover:hidden"
                        />
                        <RiInstagramLine
                            color="black"
                            className="h-5 md:h-12 w-5 md:w-12 hidden group-hover:block"
                        />
                    </a>
                </div>
                <p className="text-gray-500 text-center text-xs md:text-md">
                    © 2023. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default TheFooter;
