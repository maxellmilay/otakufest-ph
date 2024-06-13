import React from 'react';
import ComingSoon from './ComingSoon';
import Image from 'next/image';
import Link from 'next/link';
import Routes from '@/enums/routes';

const SalesSection = () => {
    return (
        <div className="flex flex-col items-center justify-evenly bg-white w-full p-10 gap-10 md:p-20 md:px-[10vw]">
            <div className="flex flex-col text-site-main">
                <span className="text-5xl md:text-8xl font-bold w-full">
                    TICKETS & MERCH
                </span>
            </div>
            <div className="flex flex-col md:flex-row w-full bg-site-main rounded-xl overflow-hidden hover:scale-[1.01] transform transition duration-y">
                <figure className="relative w-auto h-64 md:w-1/2 md:h-auto">
                    <Image
                        src="/images/tickets.jpg"
                        alt="of24visual"
                        fill
                        className="object-cover"
                    />
                </figure>
                <div className="flex flex-col justify-between w-full gap-10 p-8 md:w-2/3">
                    <div className="flex flex-col">
                        <span className="text-2xl md:text-5xl font-bold w-full">
                            TICKETS
                        </span>
                        <span className="text-md md:text-xl mt-4">
                            Secure your tickets now for an unforgettable
                            experience packed with incredible panels, exclusive
                            screenings, and epic cosplay. Whether you&apos;re a
                            long-time fan or new to the scene, Otakufest 2024
                            promises excitement.
                        </span>
                    </div>

                    <div className="flex justify-end">
                        <button className="h-16 w-1/2 text-md md:text-xl bg-white text-site-main rounded-xl hover:scale-[1.05] transform transition duration-y">
                            AVAIL NOW!
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row w-full bg-site-main rounded-xl overflow-hidden hover:scale-[1.01] transform transition duration-y">
                <figure className="relative w-auto h-64 md:w-1/2 md:h-auto">
                    <Image
                        src="/images/tickets.jpg"
                        alt="of24visual"
                        fill
                        className="object-cover"
                    />
                </figure>
                <div className="flex flex-col justify-between w-full gap-10 p-8 md:w-2/3">
                    <div className="flex flex-col">
                        <span className="text-2xl md:text-5xl font-bold w-full">
                            SHIRTS
                        </span>
                        <span className="text-md md:text-xl mt-4">
                            Secure your shirts now for an unforgettable
                            experience packed with incredible panels, exclusive
                            screenings, and epic cosplay. Whether you&apos;re a
                            long-time fan or new to the scene, Otakufest 2024
                            promises excitement.
                        </span>
                    </div>

                    <div className="flex justify-end">
                        <button className="h-16 w-1/2 text-md md:text-xl bg-white text-site-main rounded-xl hover:scale-[1.05] transform transition duration-y">
                            AVAIL NOW!
                        </button>
                    </div>
                </div>
            </div>
            <span className="text-site-main text-justify text-md md:text-xl mt-4">
                For concerns regarding your purchases from Otakufest 2024,
                consider{' '}
                <Link href={Routes.HOME} className="underline">
                    reaching out to us
                </Link>{' '}
                or sending us an e-mail at <u>sales.otakufest@gmail.com</u>.
            </span>
        </div>
    );
};

export default SalesSection;
