import React from 'react';
import Link from 'next/link';
import Routes from '@/enums/routes';

const TheHeader = () => {
  return (
    <header className="bg-site-blue-100/70 fixed z-10 flex items-center h-20 w-screen px-10 justify-between">
      <h1 className="text-3xl">OTAKUFEST 2023</h1>
      <nav className="flex items-center gap-3">
        <Link href={Routes.GUESTS}>Guests</Link>
        <Link href={Routes.SHIRT}>Shirt</Link>
        <Link href={Routes.EVENTS}>Events</Link>
        <Link href={Routes.FAQS}>FAQS</Link>
        <Link href={Routes.CONTACT_US}>Contact Us</Link>
      </nav>
    </header>
  );
};

export default TheHeader;
