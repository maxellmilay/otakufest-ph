'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Routes from '@/enums/routes';
import { FaBars } from 'react-icons/fa';
import { OF24_LOGO_WHITE } from '@/enums/imageUrls';
import TheNavBar from './TheNavBar';

const TheHeader = () => {
    const [isNavbarDropdownOpen, setIsNavbarDropdownOpen] = useState(false);

    return (
        <>
            <header className=" bg-site-main/75 fixed z-20 flex items-center py-4 w-screen px-10 justify-between">
                <Link
                    href={Routes.HOME}
                    className="flex items-center text-2xl font-bold md:text-4xl"
                >
                    <figure className="relative aspect-square w-8 md:w-14 hover:-translate-y-1 duration-200">
                        <Image
                            src={OF24_LOGO_WHITE}
                            alt="guest"
                            fill
                            className="object-cover"
                        />
                    </figure>
                    <p className="hover:-translate-y-1 duration-200">
                        OTAKUFEST
                    </p>
                </Link>
                <nav className="hidden md:flex items-center gap-5 text-lg">
                    <TheNavBar />
                </nav>
                <button
                    className="flex md:hidden"
                    onClick={() =>
                        setIsNavbarDropdownOpen(!isNavbarDropdownOpen)
                    }
                >
                    <FaBars className="text-2xl" />
                </button>
            </header>
            <aside
                className={`flex flex-col gap-5 items-end bg-site-main/90 h-[100dvh] w-[100dvw] z-30 ${isNavbarDropdownOpen ? 'fixed' : 'hidden'} py-5 px-10`}
            >
                <button
                    className="flex"
                    onClick={() =>
                        setIsNavbarDropdownOpen(!isNavbarDropdownOpen)
                    }
                >
                    <FaBars className="text-2xl" />
                </button>
                <TheNavBar setIsNavbarDropdownOpen={setIsNavbarDropdownOpen} />
            </aside>
        </>
    );
};

export default TheHeader;
