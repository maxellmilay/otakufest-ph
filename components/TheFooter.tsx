'use client';
import { useState } from 'react';
import enums from '@/enums/OFYears/ImageUrl2024';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Routes from '@/enums/routes';
import {
    RiFacebookCircleFill,
    RiTwitterFill,
    RiInstagramFill,
} from 'react-icons/ri';
import {
    RiFacebookCircleLine,
    RiTwitterLine,
    RiInstagramLine,
} from 'react-icons/ri';

import ExternalLink from '@/enums/externalLinks';

const TheFooter = () => {
    const [isFBHovered, setIsFBHovered] = useState(false);
    const [isTwtHovered, setIsTwtHovered] = useState(false);
    const [isIGHovered, setIsIGHovered] = useState(false);

    return (
        <footer className="flex flex-col md:flex-row md:h-[10vw] md:gap-32 bg-white text-black justify-center items-center p-5 z-20">
            <div className="flex flex-col md:flex-row items-center gap-2 text-2xl md:text-5xl">
                <figure className="relative aspect-[99/115] h-[7.5vh]">
                    <Image
                        src={enums.ImageUrl.LOGO}
                        alt="logo"
                        fill
                        className="object-cover"
                    />
                </figure>
                OTAKUFEST
            </div>
            <div className="flex flex-col gap-1 text-black">
                <div className="flex flex-row justify-center gap-3 mt-1">
                    <a
                        rel="noreferrer"
                        href={ExternalLink.FB}
                        target="_blank"
                        onMouseEnter={() => setIsFBHovered(true)}
                        onMouseLeave={() => setIsFBHovered(false)}
                    >
                        {isFBHovered ? (
                            <RiFacebookCircleLine
                                color="black"
                                className="h-12 w-12"
                            />
                        ) : (
                            <RiFacebookCircleFill
                                color="black"
                                className="h-12 w-12"
                            />
                        )}
                    </a>
                    <a
                        rel="noreferrer"
                        href={ExternalLink.TWITTER}
                        onMouseEnter={() => setIsTwtHovered(true)}
                        onMouseLeave={() => setIsTwtHovered(false)}
                    >
                        {isTwtHovered ? (
                            <RiTwitterLine
                                color="black"
                                className="h-12 w-12"
                            />
                        ) : (
                            <RiTwitterFill
                                color="black"
                                className="h-12 w-12"
                            />
                        )}
                    </a>
                    <a
                        rel="noreferrer"
                        href={ExternalLink.INSTAGRAM}
                        onMouseEnter={() => setIsIGHovered(true)}
                        onMouseLeave={() => setIsIGHovered(false)}
                    >
                        {isIGHovered ? (
                            <RiInstagramLine
                                color="black"
                                className="h-12 w-12"
                            />
                        ) : (
                            <RiInstagramFill
                                color="black"
                                className="h-12 w-12"
                            />
                        )}
                    </a>
                </div>
                <p className="text-gray-500 text-center text-xs">
                    © 2023. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default TheFooter;
