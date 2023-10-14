import React from 'react';
import Link from 'next/link';
import Routes from '@/enums/routes';
import { FaBars } from 'react-icons/fa';

const TheHeader = () => {
  return (
    <header className="bg-site-blue-100/70 fixed z-10 flex items-center h-20 w-screen px-10 justify-between">
      <h1 className="text-3xl">OTAKUFEST 2023</h1>
      <nav className="hidden md:flex items-center gap-5">
        <Link href={Routes.GUESTS}>Guests</Link>
        <Link href={Routes.SHIRT}>Shirt</Link>
        <Link href={Routes.EVENTS}>Events</Link>
        <Link href={Routes.FAQS}>FAQS</Link>
        <Link href={Routes.CONTACT_US}>Contact Us</Link>
      </nav>
      <button className="flex md:hidden">
        <FaBars className="text-2xl" />
      </button>
    </header>
  );
};

export default TheHeader;
