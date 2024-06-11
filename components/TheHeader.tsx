import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import enums from '@/enums/OFYears/ImageUrl2024';
import Routes from '@/enums/routes';
import { FaBars } from 'react-icons/fa';

const TheHeader = () => {
    return (
        <header className="bg-site-main fixed z-20 flex items-center h-16 w-screen px-10 justify-between">
            <Link
                href={Routes.HOME}
                className="flex items-center text-2xl font-bold md:text-4xl"
            >
                <figure className="relative aspect-square w-8 md:w-14">
                    <Image
                        src={enums.ImageUrl.LOGO2024_WHITE}
                        alt="guest"
                        fill
                        className="object-cover"
                    />
                </figure>
                OTAKUFEST
            </Link>
            <nav className="hidden md:flex items-center gap-5 text-lg">
                <Link href="/#guestSection">Guests</Link>
                <Link href="/#shirtSection">Shirt</Link>
                <Link href="/#eventSection">Events</Link>
                <Link href={Routes.FAQS}>FAQs</Link>
                <Link href={Routes.CONTACT_US} className="border-lg">
                    <div className="bg-white px-5 py-2 rounded-lg text-site-main border-2 hover:bg-site-main hover:border-site-secondary hover:text-site-secondary">
                        Contact Us
                    </div>
                </Link>
            </nav>
            <button className="flex md:hidden">
                <FaBars className="text-2xl" />
            </button>
        </header>
    );
};

export default TheHeader;
