import React from 'react';
import Link from 'next/link';
import Routes from '@/enums/routes';
import { FaBars } from 'react-icons/fa';

const TheHeader = () => {
    return (
        <header className="bg-site-blue-100/70 fixed z-10 flex items-center h-20 w-screen px-10 justify-between">
            <Link
                href={Routes.HOME}
                className="text-4xl font-bangers text-transparent bg-clip-text bg-gradient-to-r from-55% from-site-blue-200 to-site-blue-300 text-outline-white"
            >
                OTAKUFEST 2023
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
                        className="border-lg text-transparent bg-clip-text bg-gradient-to-r from-50% from-site-blue-200 to-site-blue-300"
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
