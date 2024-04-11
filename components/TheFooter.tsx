import ImageUrl from '@/enums/imageUrl';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Routes from '@/enums/routes';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import ExternalLink from '@/enums/externalLinks';

const TheFooter = () => {
    return (
        <footer className="flex flex-col md:flex-row gap-3 bg-white text-black justify-center items-center p-5 z-20">
            <figure className="relative aspect-[99/115] h-14">
                <Image
                    src={ImageUrl.LOGO}
                    alt="logo"
                    fill
                    className="object-cover"
                />
            </figure>
            <div className="flex flex-col gap-1 text-black">
                <p className="text-gray-500 text-center text-xs">
                    © 2023. All Rights Reserved.
                </p>
                <div className="flex flex-col md:flex-row gap-3 justify-center text-[0.5rem]">
                    <Link href={Routes.UPDATES}>Updates</Link>
                    <Link href={Routes.CONTACT_US}>Contact Us</Link>
                    <Link href={Routes.FAQS}>FAQs</Link>
                    <Link href={Routes.SUPPORT}>Support</Link>
                </div>
                <div className="flex flex-col md:flex-row justify-center gap-3 mt-1">
                    <>
                        <a
                            rel="noreferrer"
                            href={ExternalLink.FB}
                            target="_blank"
                        >
                            <FaFacebook />
                        </a>
                        <a
                            rel="noreferrer"
                            href={ExternalLink.TWITTER}
                            target="_blank"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            rel="noreferrer"
                            href={ExternalLink.INSTAGRAM}
                            target="_blank"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            rel="noreferrer"
                            href={ExternalLink.EMAIL}
                            target="_blank"
                        >
                            <FaEnvelope />
                        </a>
                    </>
                </div>
            </div>
        </footer>
    );
};

export default TheFooter;
