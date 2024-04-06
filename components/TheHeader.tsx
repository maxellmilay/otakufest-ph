import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ImageUrl from '@/enums/imageUrl';
import Routes from '@/enums/routes';
import { FaBars } from 'react-icons/fa';

const TheHeader = () => {
    return (
        <header className="bg-site-main fixed z-20 flex items-center h-20 w-screen px-10 justify-between">
            <Link
                href={Routes.HOME}
                className="flex items-center text-4xl font-bold"
            >
                <figure className="relative aspect-square w-14">
                    <Image
                        src={ImageUrl.LOGO2024_WHITE}
                        alt="guest"
                        fill
                        className="object-cover"
                    />
                </figure>
                OTAKUFEST
            </Link>
            <nav className="hidden md:flex items-center gap-5 text-xs">
                {/* Change this to anchor different sections of landing page
        <Link href={Routes.GUESTS}>Guests</Link>
        <Link href={Routes.SHIRT}>Shirt</Link>
        <Link href={Routes.EVENTS}>Events</Link> */}
                <Link href={Routes.FAQS}>FAQs</Link>
                <div className="bg-white px-5 py-3 rounded-lg">
                    <Link
                        href={Routes.CONTACT_US}
                        className="border-lg text-site-main"
                    >
                        Contact Us
                    </Link>
                </div>
            </nav>
            <button className="flex md:hidden">
                <FaBars className="text-2xl" />
            </button>
        </header>
    );
};

export default TheHeader;
