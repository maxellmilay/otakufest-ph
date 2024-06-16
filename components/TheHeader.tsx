import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import enums from '@/enums/OFYears/ImageUrl2024';
import Routes from '@/enums/routes';
import { FaBars } from 'react-icons/fa';

const TheHeader = () => {
    return (
        <header className="bg-site-main fixed z-20 flex items-center py-4 w-screen px-10 justify-between">
            <Link
                href={Routes.HOME}
                className="flex items-center text-2xl font-bold md:text-4xl"
            >
                <figure className="relative aspect-square w-8 md:w-14 hover:-translate-y-1 duration-200">
                    <Image
                        src={enums.ImageUrl.LOGO2024_WHITE}
                        alt="guest"
                        fill
                        className="object-cover"
                    />
                </figure>
                <p className="hover:-translate-y-1 duration-200">OTAKUFEST</p>
            </Link>
            <nav className="hidden md:flex items-center gap-5 text-lg">
                <Link
                    href="/#guestSection"
                    className="hover:-translate-y-1 duration-200"
                >
                    Guests
                </Link>
                <Link
                    href="/#shirtSection"
                    className="hover:-translate-y-1 duration-200"
                >
                    Merch
                </Link>
                <Link
                    href="/#eventSection"
                    className="hover:-translate-y-1 duration-200"
                >
                    Events
                </Link>
                <Link
                    href={Routes.FAQS}
                    className="hover:-translate-y-1 duration-200"
                >
                    FAQs
                </Link>
                <Link href={Routes.CONTACT_US} className="border-lg">
                    <div className="bg-white px-5 py-2 rounded-lg text-site-main border hover:bg-site-main hover:border-site-secondary hover:text-site-secondary duration-200">
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
